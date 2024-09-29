import { Hammer, HardHat } from "lucide-react";

function App() {
  return (
    <main>
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex justify-center space-x-4">
            <Hammer className="w-12 h-12 text-yellow-500" />
            <HardHat className="w-12 h-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Under Construction
          </h1>
          <p className="text-xl text-gray-600">
            We're working hard to bring you something amazing. Please check back
            soon!
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
          </div>
          <p className="text-sm text-gray-500">Expected completion: Soon™</p>
        </div>
      </div>
    </main>
  );
}

export default App;
