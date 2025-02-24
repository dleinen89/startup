import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vehicle Inspection & Training
          </h1>
          <p className="text-lg text-gray-600">
            Select the type of inspection you need to perform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/pre-operation"
            className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-2 border-[#1b9c85] hover:scale-[1.02] cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1b9c85] mb-4">
                Pre-Operation Inspection
              </h2>
              <p className="text-gray-600 mb-4">
                Complete a thorough check before operating the vehicle. Includes safety
                equipment, fluid levels, and mechanical inspections.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Safety & preparation checks</li>
                <li>• External vehicle inspection</li>
                <li>• Cabin & controls verification</li>
                <li>• Under-bonnet checks</li>
                <li>• Start-up system tests</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-[#1b9c85] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#158873] transition-colors duration-200">
                  Start Inspection →
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/post-operation"
            className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-2 border-[#1b9c85] hover:scale-[1.02] cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1b9c85] mb-4">
                Post-Operation Inspection
              </h2>
              <p className="text-gray-600 mb-4">
                Perform essential checks after vehicle use. Document any issues or
                changes noticed during operation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Shutdown observations</li>
                <li>• Warning light check</li>
                <li>• New damage assessment</li>
                <li>• System status review</li>
                <li>• Critical issue reporting</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-[#1b9c85] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#158873] transition-colors duration-200">
                  Start Inspection →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Training & Guidance Available
          </h3>
          <p className="text-blue-700">
            Each inspection step includes helpful tips and best practices to guide you
            through the process. Click the info icon during inspection to view training
            notes.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            All inspections follow Australian safety standards and organisational
            policies.
          </p>
        </div>
      </div>
    </main>
  );
}
