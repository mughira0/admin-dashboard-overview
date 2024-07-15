import React, { lazy, Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loader from "./Components/Loader";

const Analytics = lazy(() => import("./Screens/Analytics"));
const Overview = lazy(() => import("./Screens/OverView"));
function App() {
  return (
    <>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            {/* without login */}

            <Route path="/analytics" exact element={<Analytics />} />
            <Route path="/" exact element={<Overview />} />
            {/* <Route
              path="/courses"
              exact
              element={<ProtectedRoute file={<Courses />} />}
            /> */}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
