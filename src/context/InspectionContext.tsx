"use client";

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { InspectionStep as InspectionStepType } from "@/utils/inspectionData";

interface InspectionData {
  driverName: string;
  vehicleRego: string;
  odometer: string;
  steps: InspectionStepType[];
  currentStep: number;
  isComplete: boolean;
}

interface FormData {
  driverName: string;
  vehicleRego: string;
  odometer: string;
  inspectionType: 'pre-operation' | 'post-operation';
}

type Action =
  | { type: 'SUBMIT_FORM'; payload: { formData: FormData; steps: InspectionStepType[] } }
  | { type: 'UPDATE_STEPS'; payload: { steps: InspectionStepType[] } }
  | { type: 'COMPLETE_INSPECTION' }
  | { type: 'RESET' }
  | { type: 'SET_CURRENT_STEP'; payload: { step: number } };

const INITIAL_STATE: InspectionData = {
  driverName: "",
  vehicleRego: "",
  odometer: "",
  steps: [],
  currentStep: -1,
  isComplete: false,
};

function reducer(state: InspectionData = INITIAL_STATE, action: Action): InspectionData {
  console.log('Reducer called with action:', action.type, action);
  
  switch (action.type) {
    case 'SUBMIT_FORM':
      console.log('Processing SUBMIT_FORM with payload:', action.payload);
      return {
        ...state,
        driverName: action.payload.formData.driverName,
        vehicleRego: action.payload.formData.vehicleRego,
        odometer: action.payload.formData.odometer,
        steps: action.payload.steps.map(step => ({
          ...step,
          items: step.items.map(item => ({ ...item }))
        })),
        currentStep: 0,
        isComplete: false,
      };
    case 'UPDATE_STEPS':
      return {
        ...state,
        steps: action.payload.steps,
      };
    case 'COMPLETE_INSPECTION':
      return {
        ...state,
        isComplete: true,
      };
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: action.payload.step,
      };
    case 'RESET':
      return INITIAL_STATE;
    default:
      console.warn('Unknown action type:', action);
      return state;
  }
}

const InspectionContext = createContext<{
  inspectionData: InspectionData;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export function InspectionProvider({ children }: { children: ReactNode }) {
  const [inspectionData, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <InspectionContext.Provider value={{ inspectionData, dispatch }}>
      {children}
    </InspectionContext.Provider>
  );
}

export function useInspection() {
  const context = useContext(InspectionContext);
  if (context === undefined) {
    throw new Error('useInspection must be used within an InspectionProvider');
  }

  const { inspectionData, dispatch } = context;

  const setInspectionData = (data: InspectionData & Partial<FormData>) => {
    console.log('setInspectionData called with:', data);
    
    if (data.currentStep === 0 && 'inspectionType' in data) {
      const formData: FormData = {
        driverName: data.driverName,
        vehicleRego: data.vehicleRego,
        odometer: data.odometer,
        inspectionType: data.inspectionType as 'pre-operation' | 'post-operation'
      };
      console.log('Dispatching SUBMIT_FORM with formData:', formData);
      dispatch({ type: 'SUBMIT_FORM', payload: { formData, steps: data.steps } });
    } else if (data.isComplete) {
      console.log('Dispatching COMPLETE_INSPECTION');
      dispatch({ type: 'COMPLETE_INSPECTION' });
    } else if (data.currentStep !== inspectionData.currentStep) {
      console.log('Dispatching SET_CURRENT_STEP:', data.currentStep);
      dispatch({ type: 'SET_CURRENT_STEP', payload: { step: data.currentStep } });
    } else {
      console.log('Dispatching UPDATE_STEPS');
      dispatch({ type: 'UPDATE_STEPS', payload: { steps: data.steps } });
    }
  };

  return { inspectionData, setInspectionData };
}
