import { web3Init } from "./auction";
import Homepage from "./pages/Homepage";

function App() {
  web3Init();
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1f2937] to-[#0f172a] text-white">
      <Homepage />
    </div>
  );
}

export default App;
