import "./App.css";

import SendPage from "./pages/SendPage.jsx";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import OutletPage from "./pages/OutletPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import FindPage from "./pages/FindPage.jsx";
import DispRequestPage from "./pages/DispRequestsPage.jsx";
import DispDeliveriesPage from "./pages/DispDeliveriesPage.jsx";
import DispArchivePage from "./pages/DispArchivePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletPage />}>
          <Route path="/" element={<Navigate to="/aboutUs" />} />
          <Route path="send" element={<SendPage />}></Route>
          <Route path="find" element={<FindPage />}></Route>
          <Route path="aboutUs" element={<AboutUsPage />}></Route>
          <Route path="*" element={<SendPage />} />
          <Route path="dispatch">
            <Route index element={<Navigate to="requests" />} />
            <Route path="requests" element={<DispRequestPage />}></Route>
            <Route path="deliveries" element={<DispDeliveriesPage />}></Route>
            <Route path="archive" element={<DispArchivePage />}></Route>
            <Route path="*" element={<DispRequestPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
