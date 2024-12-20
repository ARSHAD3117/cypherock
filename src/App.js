import { Outlet, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Wallets from "./components/Wallets";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="wallets" element={<Wallets />}></Route>
          <Route path="transactions" element={<Transactions />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
