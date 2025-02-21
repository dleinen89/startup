"use client";

import InspectionLayout from "@/components/InspectionLayout";
import { postOperationSteps } from "@/utils/inspectionData";

export default function PostOperationInspection() {
  return (
    <InspectionLayout
      inspectionType="Post-Operation"
      steps={postOperationSteps}
    />
  );
}
