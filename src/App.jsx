import {BrowserRouter, Route, Routes} from "react-router"
import Collab from "./pages/Collab";
import Test from "./pages/Test";
import RealTime from "./pages/RealTime";

function App() {

  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/realtime/:roomId" element={<RealTime/>} />
          <Route path="/collab/:roomId" element={<Collab/>} />
       </Routes>
    </BrowserRouter>
   
  );
}

export default App
