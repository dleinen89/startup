import { useState } from 'react';

interface ChecklistItemProps {
  title: string;
  description: string;
  trainingTip: string;
  onChange: (status: {
    isOk: boolean;
    severity?: 'Minor' | 'Major';
    comment?: string;
  }) => void;
}

export default function ChecklistItem({
  title,
  description,
  trainingTip,
  onChange,
}: ChecklistItemProps) {
  const [status, setStatus] = useState<'OK' | 'NeedsAttention' | null>(null);
  const [severity, setSeverity] = useState<'Minor' | 'Major'>('Minor');
  const [comment, setComment] = useState('');
  const [showTrainingTip, setShowTrainingTip] = useState(false);

  const handleStatusChange = (newStatus: 'OK' | 'NeedsAttention') => {
    setStatus(newStatus);
    onChange({
      isOk: newStatus === 'OK',
      severity: newStatus === 'NeedsAttention' ? severity : undefined,
      comment: newStatus === 'NeedsAttention' ? comment : undefined,
    });
  };

  const handleSeverityChange = (newSeverity: 'Minor' | 'Major') => {
    setSeverity(newSeverity);
    onChange({
      isOk: false,
      severity: newSeverity,
      comment,
    });
  };

  const handleCommentChange = (newComment: string) => {
    setComment(newComment);
    onChange({
      isOk: false,
      severity,
      comment: newComment,
    });
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowTrainingTip(!showTrainingTip)}
          className="ml-2 text-blue-600 hover:text-blue-800"
        >
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      </div>

      {showTrainingTip && (
        <div className="mb-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-700">{trainingTip}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          className={`px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center min-w-[120px] ${
            status === 'OK'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => handleStatusChange('OK')}
        >
          OK
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center min-w-[120px] ${
            status === 'NeedsAttention'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => handleStatusChange('NeedsAttention')}
        >
          Needs Attention
        </button>
      </div>

      {status === 'NeedsAttention' && (
        <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-md">
          <div className="flex flex-wrap gap-4">
            <button
              className={`px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center min-w-[120px] ${
                severity === 'Minor'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleSeverityChange('Minor')}
            >
              Minor Issue
            </button>
            <button
              className={`px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center min-w-[120px] ${
                severity === 'Major'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleSeverityChange('Major')}
            >
              Major Issue
            </button>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Additional Comments
            </label>
            <textarea
              id="comment"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={comment}
              onChange={(e) => handleCommentChange(e.target.value)}
              placeholder="Describe the issue..."
            />
          </div>

          {severity === 'Major' && (
            <div className="p-3 bg-red-50 rounded-md">
              <p className="text-sm text-red-700 font-medium">
                Major Issue: Notify Workshop Manager immediately. Do not operate this vehicle until cleared.
              </p>
            </div>
          )}

          {severity === 'Minor' && (
            <div className="p-3 bg-yellow-50 rounded-md">
              <p className="text-sm text-yellow-700">
                Minor Issue: Monitor until next maintenance. Schedule repair soon.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
