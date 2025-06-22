import "@/styles/index.css";
import { StrictMode } from "react";
import { AppKitProvider } from "@/providers";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  Admin,
  Dashboard,
  DePins,
  Download,
  Landing,
} from "@/components/pages";
import Analytics from "./components/pages/Analytics";
import Contact from "./components/pages/Contact";

function App() {

  return (
    <main className="min-h-screen  text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />

        <Route path="/depins" element={<DePins />} />
        <Route path="/download" element={<Download />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </main>
  );
}

/**
 * The main entry point of the application.
 *
 * - Imports global styles and necessary dependencies.
 * - Wraps the application with `GoogleOAuthProvider` for Google OAuth functionality.
 * - Renders the `App` component inside a `StrictMode` wrapper.
 *
 * @remarks
 * Ensure that the `VITE_GOOGLE_OAUTH_CLIENT_ID` environment variable is properly set
 * for the Google OAuth integration to work.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <AppKitProvider>
          <App />
        </AppKitProvider>
      </GoogleOAuthProvider>
    </Router>
  </StrictMode>
);
