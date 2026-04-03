import {BrowserRouter, Route, Routes} from "react-router"
import Collab from "./pages/Collab";
import Test from "./pages/Test";
import RealTime from "./pages/RealTime";

function App() {

  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/realtime" element={<RealTime/>} />
          <Route path="/collab" element={<Collab/>} />
       </Routes>
    </BrowserRouter>
   
  );
}

export default App
