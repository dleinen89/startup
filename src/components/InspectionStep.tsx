import { useState } from 'react';
import ChecklistItem from './ChecklistItem';

export interface ChecklistItemData {
  title: string;
  description: string;
  trainingTip: string;
  status?: {
    isOk: boolean;
    severity?: 'Minor' | 'Major';
    comment?: string;
  };
}

interface InspectionStepProps {
  stepNumber: number;
  title: string;
  description: string;
  items: ChecklistItemData[];
  onComplete: (stepData: { items: ChecklistItemData[] }) => void;
}

export default function InspectionStep({
  stepNumber,
  title,
  description,
  items,
  onComplete,
}: InspectionStepProps) {
  const [checklistItems, setChecklistItems] = useState<ChecklistItemData[]>(items);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleItemChange = (index: number, status: {
    isOk: boolean;
    severity?: 'Minor' | 'Major';
    comment?: string;
  }) => {
    const updatedItems = [...checklistItems];
    updatedItems[index] = {
      ...updatedItems[index],
      status,
    };
    setChecklistItems(updatedItems);
    onComplete({ items: updatedItems });
  };

  const allItemsChecked = checklistItems.every(item => item.status !== undefined);

  return (
    <div className="border rounded-lg mb-6 bg-white shadow">
      <button
        className={`w-full px-6 py-4 flex items-center justify-between text-left ${
          isExpanded ? 'border-b' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
            {stepNumber}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center">
          {allItemsChecked && (
            <span className="mr-3 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="p-6">
          <div className="space-y-6">
            {checklistItems.map((item, index) => (
              <ChecklistItem
                key={index}
                title={item.title}
                description={item.description}
                trainingTip={item.trainingTip}
                onChange={(status) => handleItemChange(index, status)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
