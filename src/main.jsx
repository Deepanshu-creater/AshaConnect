import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Move i18n configuration to separate file
import IntroPage from "./introduction/Intro.jsx";
import Chikitsa365App from "./App.jsx";
import PatientApp from "./PatientApp.jsx";
import ChatBot from "./Chatbot.jsx";
import EmergencyTab from "./EmergencyApp.jsx";
import "./index.css";

// Create a layout component that wraps all routes with I18nextProvider
const AppLayout = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
);

// Define routes
const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <AppLayout>
        <IntroPage/>
      </AppLayout>
    ),
  },
    {
    path: "/asha",
    element: (
      <AppLayout>
        <Chikitsa365App />
      </AppLayout>
    ),
  },
  {
    path: "/patient",
    element: (
      <AppLayout>
        <PatientApp />
      </AppLayout>
    )
  },
  {
    path: "/ChatBot",
    element: (
      <AppLayout>
        <ChatBot />
      </AppLayout>
    )
  },
  {
   path: "/emergency",
    element: (
      <AppLayout>
        <EmergencyTab/>
      </AppLayout>
    )
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);