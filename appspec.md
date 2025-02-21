# VEHICLE INSPECTION & TRAINING APPLICATION SPECIFICATION

This document describes a Next.js-based application used for **real-world vehicle inspections**, featuring **built-in training guidance** for both new and experienced operators. The application will guide users through **Pre-Operation** and **Post-Operation** checks, capture basic vehicle and driver information, and provide a final summary of the inspection for reference or potential export. All instructions, labels, and comments must use **British/Australian English** (e.g. “tyre”, “organisation”, “colour”, “odometer”, “rego”).

---

## 1. Purpose and Scope

1. **Real-World Usage**  
   - The app is intended for actual on-site inspections of vehicles, capturing critical information about potential faults or hazards.  
   - It also serves as a **training tool**, integrating brief tips and best-practice prompts to educate or refresh operators’ knowledge.

2. **Location & Deployment**  
   - All code must be placed **within the existing project directory** (do not create another root folder).  
   - Structure the project as a standard Next.js application ready for **Vercel** deployment.  
   - If necessary, the initial setup command (run within the existing directory) might be:
     ```bash
     npx create-next-app@latest .
     ```

3. **Key Features**  
   - **Mobile-First & Responsive**: The UI should be touch-friendly for use on phones or tablets in a workshop environment.  
   - **Guided Steps**: Provide training tips throughout the inspection process.  
   - **Session Storage Only**: Persist data locally without a permanent database.

---

## 2. Primary Workflows

The app facilitates two inspection types, each preceded by the collection of basic user and vehicle details.

### 2.1 Collect User & Vehicle Information

Upon starting **any** inspection (pre or post), prompt the user for:

- **Driver’s Name**  
- **Vehicle Rego**  
- **Odometer** (current reading)

Explain briefly why these details are important for record-keeping and training documentation. These fields should appear before the user proceeds to any step-by-step checklist.

### 2.2 Pre-Operation Inspection

Performed **before** operating the vehicle, covering essential safety and preparation steps:

1. **Safety & Preparation**  
   - **Hazard Identification**: Look for fluid leaks, debris, or slippery surfaces.  
   - **PPE Check**: Ensure hi‑vis clothing, safety boots, gloves, and eye protection are worn.  
   - **Workplace Policies**: Remind users to follow organisational safety rules.

2. **Walk-Around & External Checks**  
   - **Tyres**: Check pressure, tread depth, visible damage.  
   - **Lights & Reflectors**: Ensure cleanliness and functionality.  
   - **Coupling Systems & Load Security**: Verify trailers or load restraints are secure.  
   - **Bodywork**: Inspect for damage, rust, or fluid leaks.

3. **Cabin & Internal Checks**  
   - **Seatbelts and Seats**: Assess condition and correct adjustment.  
   - **Mirrors**: Check cleanliness and correct alignment.  
   - **Dashboard & Controls**: Confirm gauges and warning lights function normally.  
   - **Emergency Equipment**: Locate and check items such as fire extinguishers, first‑aid kits.

4. **Under-Bonnet Inspection**  
   - **Fluid Levels** (oil, coolant, brake fluid, washer fluid).  
   - **Belts & Hoses** (wear, cracks, leaks).  
   - **Caps & Fittings** (secure, undamaged).  
   - **General Condition** (any pooling fluids or apparent issues).

5. **Engine Start-Up Checks**  
   - **Engine Start**: Observe normal cranking and start.  
   - **Warning Lights**: Confirm any initial lights turn off properly.  
   - **Noise & Vibration**: Listen for abnormal knocking or squealing.  
   - **Gauge Readings**: Monitor oil pressure, temperature, etc.

### 2.3 Post-Operation Inspection

Conducted **after** using the vehicle, focusing on detecting new faults or potential hazards:

1. **Shutdown & Cooling**  
   - Turn off the engine; wait briefly, checking for unusual smells or smoke.  
   - Inspect for new leaks under the vehicle or in the engine bay.

2. **Warning Signals**  
   - Check the dashboard after shutdown for persistent or new warning lights.

3. **Damage or Faults**  
   - Conduct a quick walk-around to note any fresh damage or external changes noticed during operation.

4. **Immediate Actions**  
   - If a critical issue is identified, advise the user to contact a supervisor or workshop manager and consider the vehicle unsafe.

---

## 3. Fault Reporting & Severity

1. **Checklist Marking**  
   - Each inspection item can be marked as **OK** or **Needs Attention**.

2. **Severity Assignment**  
   - When **“Needs Attention”** is chosen, prompt the user to select:  
     - **Minor**: Issue not immediately hazardous but should be logged (e.g. a tyre nearing wear limit).  
     - **Major**: Issue requiring urgent attention (e.g. brake failure, severe leaks).  
   - Provide an optional **comment** field to record extra details.

3. **Guidance Text**  
   - For **Major** faults: Emphasise “Notify Workshop Manager immediately” or “Do not operate this vehicle until cleared.”  
   - For **Minor** faults: “Monitor until next maintenance” or “Schedule repair soon.”

---

## 4. Inspection Summary & Future Export

1. **Summary Screen**  
   - After completing **Pre-Operation** or **Post-Operation** checks, display a summary capturing:
     - **Driver’s Name**, **Vehicle Rego**, **Odometer**  
     - **Inspection Type** (Pre or Post)  
     - **Checklist Outcomes** (items OK vs. Needs Attention)  
     - **Fault Details** (severity, comments)

2. **Session Storage**  
   - Use session storage to retain the inspection data throughout the user’s session.  
   - No persistent database is required for this version.

3. **Potential Export**  
   - Add developer comments or placeholders indicating how a PDF or email export might be integrated in future (for official record-keeping).

---

## 5. Technical Implementation & Project Structure

1. **Next.js in Current Directory**  
   - Maintain the standard Next.js file structure (`pages/`, `public/`, etc.) directly in the existing folder.

2. **Vercel Configuration**  
   - Use Next.js defaults so the app can be deployed without further changes.  
   - If environment variables become necessary later, place them in `.env.local`.

3. **Components**  
   - Break down the UI into reusable React components, for example:
     - **InspectionStep** (handles each step’s content and training tips).  
     - **ChecklistItem** (OK or Needs Attention logic).  
     - **FaultSeveritySelector** (Minor or Major fault, plus comment input).  
     - **UserVehicleForm** (driver’s name, rego, odometer).  
     - **SummaryView** (final results).

4. **Mobile-First Styling**  
   - Ensure large buttons, intuitive design, clear fonts.  
   - Scale gracefully to tablets or desktops.

5. **British/Australian English**  
   - Use correct spelling in all UI labels, tooltips, and internal comments.

---

## 6. Additional Notes & Future Enhancements

- **Training Tips & Guidance**  
  - Incorporate short educational text at each checklist item, clarifying what to inspect and why it matters (e.g. “Checking oil level prevents engine damage.”).

- **Optional Review Page**  
  - Provide a “Review Previous” button on the Home Screen to show past session data or placeholder content, acknowledging possible future database integration.

- **Comments & Documentation**  
  - Keep thorough comments explaining the flow, how data is stored, and how expansions (like data export, multi-language support, or fleet management system integration) can be implemented later.

---

By following these specifications, the application will guide users in conducting **both Pre-Operation and Post-Operation** vehicle inspections, record essential info (driver’s name, rego, odometer, faults), and enhance safety and compliance through **real-world usage** combined with **training guidance**. The code must remain in the current directory, use **British/Australian English**, and be deployable on **Vercel** with minimal adjustments.
