import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Landing from "./components/Landing";
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
};
export default App;
