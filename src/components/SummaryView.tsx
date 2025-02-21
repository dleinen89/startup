import { ChecklistItemData } from './InspectionStep';

interface SummaryViewProps {
  inspectionType: 'Pre-Operation' | 'Post-Operation';
  driverName: string;
  vehicleRego: string;
  odometer: string;
  steps: {
    title: string;
    items: ChecklistItemData[];
  }[];
}

export default function SummaryView({
  inspectionType,
  driverName,
  vehicleRego,
  odometer,
  steps,
}: SummaryViewProps) {
  const hasIssues = steps.some((step) =>
    step.items.some((item) => item.status?.isOk === false)
  );

  const majorIssues = steps.flatMap((step) =>
    step.items.filter((item) => item.status?.severity === 'Major')
  );

  const minorIssues = steps.flatMap((step) =>
    step.items.filter((item) => item.status?.severity === 'Minor')
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-blue-600">
          <h2 className="text-2xl font-bold text-white">Inspection Summary</h2>
        </div>

        <div className="p-6">
          {/* Basic Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Inspection Type</p>
                <p className="font-medium text-lg">{inspectionType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Driver&apos;s Name</p>
                <p className="font-medium text-lg">{driverName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicle Rego</p>
                <p className="font-medium text-lg">{vehicleRego}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Odometer Reading</p>
                <p className="font-medium text-lg">{odometer}</p>
              </div>
            </div>
          </div>

          {/* Overall Status */}
          <div className="mb-8">
            <div
              className={`p-6 rounded-lg ${
                hasIssues ? 'bg-yellow-50' : 'bg-green-50'
              }`}
            >
              <p
                className={`text-xl font-medium ${
                  hasIssues ? 'text-yellow-800' : 'text-green-800'
                }`}
              >
                {hasIssues
                  ? 'Issues Found During Inspection'
                  : 'All Items Passed Inspection'}
              </p>
            </div>
          </div>

          {/* Major Issues */}
          {majorIssues.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Major Issues Requiring Immediate Attention
              </h3>
              <div className="bg-red-50 p-6 rounded-lg">
                {majorIssues.map((issue, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <p className="font-medium text-red-800">{issue.title}</p>
                    <p className="text-sm text-red-600 mt-1">{issue.status?.comment}</p>
                  </div>
                ))}
                <p className="text-sm font-medium text-red-800 mt-4">
                  ⚠️ Do not operate this vehicle until these issues have been cleared by the Workshop Manager
                </p>
              </div>
            </div>
          )}

          {/* Minor Issues */}
          {minorIssues.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Minor Issues for Monitoring
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                {minorIssues.map((issue, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <p className="font-medium text-yellow-800">{issue.title}</p>
                    <p className="text-sm text-yellow-600 mt-1">{issue.status?.comment}</p>
                  </div>
                ))}
                <p className="text-sm font-medium text-yellow-800 mt-4">
                  Schedule repairs for these items during the next maintenance period
                </p>
              </div>
            </div>
          )}

          {/* Detailed Results */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Detailed Inspection Results
            </h3>
            {steps.map((step, stepIndex) => (
              <div key={stepIndex} className="mb-6 last:mb-0">
                <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                <div className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-3"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        {item.status?.comment && (
                          <p className="text-sm text-gray-500 mt-1">
                            {item.status.comment}
                          </p>
                        )}
                      </div>
                      <span
                        className={`px-3 py-2 rounded-lg text-base font-medium ${
                          item.status?.isOk
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status?.isOk ? 'OK' : 'Needs Attention'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Future Export Note */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">
              Note: In future versions, this inspection report will be available for export as
              a PDF or email for official record-keeping purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
