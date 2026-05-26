import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LegacySite from "../site/LegacySite";
import { legacyRedirects, pages } from "../site/siteData";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(pages).map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<LegacySite page={page} />}
          />
        ))}
        {Object.entries(legacyRedirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
