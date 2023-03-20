import { useState } from "react";
import qrcode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white flex flex-col justify-center items-center w-96 rounded-3xl shadow-lg">
      <div className="justify-center items-center m-4">
        <img src={qrcode} alt="qrcode_img" className="rounded-lg" />
      </div>
      <div className="w-80 flex flex-col justify-center items-center mb-10 mt-2">
        <h2 className="text-slate-900 text-2xl font-bold text-center mb-4">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-slate-500 w-72">
          Scan the QR Code to vist Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
