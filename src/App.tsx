import { ConnectButton } from "@rainbow-me/rainbowkit"
import './App.css'
import Donate from "./Donate"

function App() {

  return (
    <main className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 style={{ fontSize: "24px" }}>Gratitude Gems NFT</h1>
        <br />
        <ConnectButton />
        <br />
        <Donate />
      </div>
    </main>
  )
}

export default App
