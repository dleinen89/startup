"use client";

import InspectionLayout from "@/components/InspectionLayout";
import { preOperationSteps } from "@/utils/inspectionData";

export default function PreOperationInspection() {
  return (
    <InspectionLayout
      inspectionType="Pre-Operation"
      steps={preOperationSteps}
    />
  );
}
