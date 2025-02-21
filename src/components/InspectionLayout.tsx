import { useState } from "react";
import { useRouter } from "next/navigation";
import UserVehicleForm from "./UserVehicleForm";
import InspectionStep, { ChecklistItemData } from "./InspectionStep";
import SummaryView from "./SummaryView";
import { InspectionStep as InspectionStepType } from "@/utils/inspectionData";

interface InspectionLayoutProps {
  inspectionType: "Pre-Operation" | "Post-Operation";
  steps: InspectionStepType[];
}

interface InspectionData {
  driverName: string;
  vehicleRego: string;
  odometer: string;
  steps: InspectionStepType[];
  currentStep: number;
  isComplete: boolean;
}

export default function InspectionLayout({
  inspectionType,
  steps,
}: InspectionLayoutProps) {
  const router = useRouter();
  const [inspectionData, setInspectionData] = useState<InspectionData>({
    driverName: "",
    vehicleRego: "",
    odometer: "",
    steps: steps,
    currentStep: -1, // -1 indicates user info form, 0+ for inspection steps
    isComplete: false,
  });

  const handleUserVehicleSubmit = (data: {
    driverName: string;
    vehicleRego: string;
    odometer: string;
  }) => {
    setInspectionData((prev) => ({
      ...prev,
      ...data,
      currentStep: 0,
    }));

    // Store in session storage
    sessionStorage.setItem(
      `${inspectionType.toLowerCase()}-inspection`,
      JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      })
    );
  };

  const handleStepComplete = (stepIndex: number, stepData: { items: ChecklistItemData[] }) => {
    const updatedSteps = [...inspectionData.steps];
    updatedSteps[stepIndex] = {
      ...updatedSteps[stepIndex],
      items: stepData.items,
    };

    // Check if all items in all steps have been selected (not null)
    const allStepsComplete = updatedSteps.every((step) =>
      step.items.every((item) => 
        item.status !== undefined && 
        (item.status.isOk !== undefined || item.status.severity !== undefined)
      )
    );

    setInspectionData((prev) => ({
      ...prev,
      steps: updatedSteps,
      isComplete: allStepsComplete,
    }));

    // Update session storage
    const storageKey = `${inspectionType.toLowerCase()}-inspection`;
    const storedData = JSON.parse(
      sessionStorage.getItem(storageKey) || "{}"
    );
    sessionStorage.setItem(
      storageKey,
      JSON.stringify({
        ...storedData,
        steps: updatedSteps,
        isComplete: allStepsComplete,
      })
    );
  };

  const handleStartOver = () => {
    // Clear session storage for this inspection type
    sessionStorage.removeItem(`${inspectionType.toLowerCase()}-inspection`);
    router.push("/");
  };

  // Show user & vehicle form
  if (inspectionData.currentStep === -1) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {inspectionType} Inspection
          </h1>
          <UserVehicleForm onSubmit={handleUserVehicleSubmit} />
        </div>
      </div>
    );
  }

  // Show summary view when complete
  if (inspectionData.isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <SummaryView
            inspectionType={inspectionType}
            driverName={inspectionData.driverName}
            vehicleRego={inspectionData.vehicleRego}
            odometer={inspectionData.odometer}
            steps={inspectionData.steps}
          />
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleStartOver}
              className="w-full sm:w-auto px-6 py-3 text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start New Inspection
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show inspection steps
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            {inspectionType} Inspection
          </h1>
          <div className="text-center text-gray-600">
            <p>Driver: {inspectionData.driverName}</p>
            <p>Vehicle: {inspectionData.vehicleRego}</p>
            <p>Odometer: {inspectionData.odometer}</p>
          </div>
        </div>

        <div className="space-y-6">
          {inspectionData.steps.map((step, index) => (
            <InspectionStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              items={step.items}
              onComplete={(stepData) => handleStepComplete(index, stepData)}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {inspectionData.steps.every((step) =>
            step.items.every((item) => 
              item.status !== undefined && 
              (item.status.isOk !== undefined || item.status.severity !== undefined)
            )
          ) ? (
            <button
              onClick={() => setInspectionData(prev => ({ ...prev, isComplete: true }))}
              className="w-full sm:w-auto px-6 py-3 text-lg font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Complete Inspection
            </button>
          ) : (
            <button
              onClick={handleStartOver}
              className="w-full sm:w-auto px-6 py-3 text-lg font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancel Inspection
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
