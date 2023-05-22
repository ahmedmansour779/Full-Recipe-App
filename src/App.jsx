import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Scroll from "./scroll to top/Scroll";

//! stop in (2:09:00) framer-motion

function App() {
  return (
    <>
      <BrowserRouter >
        <Pages />
      </BrowserRouter>
      <Scroll />
    </>
  );
}

export default App;