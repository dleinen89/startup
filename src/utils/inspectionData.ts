import { ChecklistItemData } from '@/components/InspectionStep';

export interface InspectionStep {
  title: string;
  description: string;
  items: ChecklistItemData[];
}

export const preOperationSteps: InspectionStep[] = [
  {
    title: "Safety & Preparation",
    description: "Essential safety checks and preparation steps",
    items: [
      {
        title: "Hazard Identification",
        description: "Check for fluid leaks, debris, or slippery surfaces",
        trainingTip: "Walk around the vehicle and work area, looking for any potential hazards that could cause accidents or injuries. Pay special attention to fluid leaks which might indicate mechanical issues.",
      },
      {
        title: "PPE Check",
        description: "Hi-vis clothing, safety boots, gloves, and eye protection",
        trainingTip: "Personal Protective Equipment is crucial for your safety. Ensure all items are in good condition and properly worn before starting the inspection.",
      },
      {
        title: "Workplace Policies",
        description: "Compliance with organisational safety rules",
        trainingTip: "Familiarise yourself with and follow all workplace safety policies. These rules are designed to protect you and others in the workplace.",
      },
    ],
  },
  {
    title: "Walk-Around & External Checks",
    description: "Exterior vehicle inspection points",
    items: [
      {
        title: "Tyres",
        description: "Pressure, tread depth, visible damage",
        trainingTip: "Check each tyre's pressure when cold. Look for uneven wear patterns which might indicate alignment issues. Ensure tread depth meets minimum requirements.",
      },
      {
        title: "Lights & Reflectors",
        description: "Cleanliness and functionality check",
        trainingTip: "All lights must be clean and working properly. This includes indicators, brake lights, and reversing lights. Clean or replace any dirty or damaged reflectors.",
      },
      {
        title: "Coupling Systems & Load Security",
        description: "Trailer connections and load restraints",
        trainingTip: "Ensure all coupling mechanisms are properly engaged and secured. Check that any loads are correctly restrained according to load restraint guidelines.",
      },
      {
        title: "Bodywork",
        description: "Check for damage, rust, or fluid leaks",
        trainingTip: "Look for any new damage, developing rust spots, or signs of fluid leaks. Early detection can prevent more serious issues from developing.",
      },
    ],
  },
  {
    title: "Cabin & Internal Checks",
    description: "Interior safety and control checks",
    items: [
      {
        title: "Seatbelts and Seats",
        description: "Condition and adjustment check",
        trainingTip: "Ensure seatbelts retract smoothly and lock when pulled quickly. Check seat adjustments work properly and lock in position.",
      },
      {
        title: "Mirrors",
        description: "Cleanliness and alignment",
        trainingTip: "Clean all mirrors and adjust them for optimal visibility. Ensure they are securely mounted and free from cracks.",
      },
      {
        title: "Dashboard & Controls",
        description: "Gauges and warning lights check",
        trainingTip: "Familiarise yourself with all warning lights and their meanings. Ensure all gauges are visible and working correctly.",
      },
      {
        title: "Emergency Equipment",
        description: "First-aid kit and fire extinguisher check",
        trainingTip: "Verify that all emergency equipment is present, accessible, and within its expiry date. Know how to use each item if needed.",
      },
    ],
  },
  {
    title: "Under-Bonnet Inspection",
    description: "Engine bay and fluid checks",
    items: [
      {
        title: "Fluid Levels",
        description: "Oil, coolant, brake fluid, washer fluid",
        trainingTip: "Check all fluid levels when the engine is cold and on level ground. Use the dipstick or sight glasses where provided. Top up if necessary with the correct type.",
      },
      {
        title: "Belts & Hoses",
        description: "Check for wear, cracks, leaks",
        trainingTip: "Look for signs of fraying or cracking in belts. Check hoses for bulges, splits, or leaks. Listen for unusual squealing which might indicate belt issues.",
      },
      {
        title: "Caps & Fittings",
        description: "Security and condition check",
        trainingTip: "Ensure all caps (oil, coolant, etc.) are properly secured. Check for any loose connections or damaged fittings.",
      },
      {
        title: "General Condition",
        description: "Look for fluid leaks or obvious issues",
        trainingTip: "Check for any signs of fluid leaks, unusual corrosion, or loose components. A clean engine bay makes it easier to spot new issues.",
      },
    ],
  },
  {
    title: "Engine Start-Up Checks",
    description: "Operational checks during start-up",
    items: [
      {
        title: "Engine Start",
        description: "Normal cranking and start behaviour",
        trainingTip: "Listen for any unusual noises during start-up. The engine should start promptly without excessive cranking.",
      },
      {
        title: "Warning Lights",
        description: "Check lights turn off properly",
        trainingTip: "Observe that warning lights illuminate during start-up and then turn off. Any lights remaining on may indicate issues requiring attention.",
      },
      {
        title: "Noise & Vibration",
        description: "Listen for abnormal sounds",
        trainingTip: "Be alert for any unusual knocking, squealing, or vibrations. These could indicate mechanical problems requiring immediate attention.",
      },
      {
        title: "Gauge Readings",
        description: "Monitor vital engine readings",
        trainingTip: "Check that oil pressure builds normally and temperature begins to rise gradually. All gauges should show normal operating ranges.",
      },
    ],
  },
];

export const postOperationSteps: InspectionStep[] = [
  {
    title: "Shutdown & Cooling",
    description: "Post-operation engine and system checks",
    items: [
      {
        title: "Engine Shutdown",
        description: "Check for unusual smells or smoke",
        trainingTip: "After turning off the engine, stay alert for any unusual odours or smoke that might indicate mechanical issues.",
      },
      {
        title: "Fluid Leaks",
        description: "Inspect for new leaks under vehicle",
        trainingTip: "Check the ground under the vehicle and in the engine bay for any fresh fluid leaks that were not present before operation.",
      },
    ],
  },
  {
    title: "Warning Signals",
    description: "Final system status check",
    items: [
      {
        title: "Dashboard Warnings",
        description: "Check for persistent warning lights",
        trainingTip: "Note any warning lights that appeared during operation or remain on after shutdown. These could indicate developing issues.",
      },
    ],
  },
  {
    title: "Damage or Faults",
    description: "Post-operation damage assessment",
    items: [
      {
        title: "External Inspection",
        description: "Look for new damage or changes",
        trainingTip: "Conduct a walk-around to identify any damage that may have occurred during operation. Compare with pre-operation condition.",
      },
    ],
  },
  {
    title: "Immediate Actions",
    description: "Critical issue response",
    items: [
      {
        title: "Critical Issues",
        description: "Assess need for immediate action",
        trainingTip: "If any critical issues are found, immediately notify your supervisor or workshop manager. The vehicle should not be used until cleared by maintenance staff.",
      },
    ],
  },
];
