import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
// import { router } from "./app.routes";
import Navbar from "./components/Navbar";
import Compare from "./pages/Compare";

function App() {
  return (
    <Layout>
      <Navbar />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Layout>
  );
}

export default App;
