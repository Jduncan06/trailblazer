import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AccountPage from ".pages/AccountPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
