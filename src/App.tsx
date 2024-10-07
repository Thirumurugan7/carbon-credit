import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import Navbar from "./components/Navbar";
import Dashboard from "./Screens/Dashboard";
import Retirements from "./Screens/Retirements";
import Layout from "./components/Layout";
import Explorer from "./Screens/Explorer";
import CarbonPool from "./Screens/CarbonPools";
import CrossChain from "./Screens/Crosschain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/retirements"
          element={
            <Layout>
              <Retirements />
            </Layout>
          }
        />
        <Route
          path="/explorer"
          element={
            <Layout>
              <Explorer />
            </Layout>
          }
        />
        <Route
          path="/carbon-pools"
          element={
            <Layout>
              <CarbonPool />
            </Layout>
          }
        />
        <Route
          path="/cross-chain"
          element={
            <Layout>
              <CrossChain />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
