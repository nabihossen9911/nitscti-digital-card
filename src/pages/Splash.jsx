import { useEffect } from "react";
import logo from "/icons/icons.svg";

function Splash({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {

      onFinish();

    },1500);

    return ()=>clearTimeout(timer);

  },[]);

  return (

    <div className="splash">

      <img src={logo} className="splash-logo"/>

      <h1>NITS Computer Training Institute</h1>

      <p>Learn Future Skills.</p>

    </div>

  );

}

export default Splash;