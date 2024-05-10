import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
// import { ClerkProvider } from '@clerk/clerk-react'

// // Import your publishable key
// const PUBLISHABLE_KEY = "pk_test_aGlwLXN1bmJpcmQtNDQuY2xlcmsuYWNjb3VudHMuZGV2JA"

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

ReactDOM.render(
  // <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <ContextProvider>
      <App />
    </ContextProvider>,
  // </ClerkProvider>,

  document.getElementById("root")
);
