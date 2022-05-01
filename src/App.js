import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import About from "./components/About/About";
import Form from "./components/Form/ReactForm";
import NotFound from "./components/NotFound/NotFound";

const Home = () => {
  return <h2>This is Home page</h2>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
