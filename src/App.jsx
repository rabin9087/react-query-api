import { Route, Routes } from "react-router-dom";
import ReactQueryExample from "./reactQuery/ReactQueryExample";
import SigleQueryExample from "./reactQuery/SigleQueryExample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReactQueryExample />} />
      <Route path="/:id" element={<SigleQueryExample />} />
    </Routes>
  );
}

export default App;
