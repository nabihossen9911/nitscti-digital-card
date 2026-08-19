import { useState } from "react";
import Splash from "./pages//Splash";
import Home from "./pages/Home";

function App() {
const [loading,setLoading]=useState(true);

return loading

? <Splash onFinish={()=>setLoading(false)}/>

: <Home/>;

}

export default App;


