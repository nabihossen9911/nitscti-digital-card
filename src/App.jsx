import { useState } from "react";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Splash onFinish={() => setLoading(false)} />
      ) : (
        <Home />
      )}

      <ToastContainer />
    </>
  );
}

export default App;