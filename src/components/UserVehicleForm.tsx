import { useState } from 'react';

interface UserVehicleFormProps {
  onSubmit: (data: {
    driverName: string;
    vehicleRego: string;
    odometer: string;
  }) => void;
}

export default function UserVehicleForm({ onSubmit }: UserVehicleFormProps) {
  const [formData, setFormData] = useState({
    driverName: '',
    vehicleRego: '',
    odometer: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto p-4 sm:p-6">
      <div className="space-y-2">
        <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">
          Driver&apos;s Name
        </label>
        <input
          type="text"
          id="driverName"
          required
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
          value={formData.driverName}
          onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
        />
        <p className="text-xs text-gray-500">Required for record-keeping and accountability</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="vehicleRego" className="block text-sm font-medium text-gray-700">
          Vehicle Rego
        </label>
        <input
          type="text"
          id="vehicleRego"
          required
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
          value={formData.vehicleRego}
          onChange={(e) => setFormData({ ...formData, vehicleRego: e.target.value })}
        />
        <p className="text-xs text-gray-500">Vehicle registration number for identification</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="odometer" className="block text-sm font-medium text-gray-700">
          Odometer Reading
        </label>
        <input
          type="number"
          id="odometer"
          required
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
          value={formData.odometer}
          onChange={(e) => setFormData({ ...formData, odometer: e.target.value })}
        />
        <p className="text-xs text-gray-500">Current odometer reading for maintenance tracking</p>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Continue to Inspection
      </button>
    </form>
  );
}
