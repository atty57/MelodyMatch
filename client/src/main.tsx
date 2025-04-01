import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Create a loading element for visual feedback even before React mounts
const showInitialLoadingState = () => {
  const loadingElement = document.createElement('div');
  loadingElement.id = 'initial-loader';
  loadingElement.style.position = 'fixed';
  loadingElement.style.inset = '0';
  loadingElement.style.zIndex = '9999';
  loadingElement.style.background = 'linear-gradient(135deg, hsl(267, 84%, 45%), hsl(280, 84%, 30%))';
  loadingElement.style.display = 'flex';
  loadingElement.style.alignItems = 'center';
  loadingElement.style.justifyContent = 'center';
  loadingElement.innerHTML = `
    <div style="text-align: center; color: white;">
      <div style="border: 4px solid rgba(255,255,255,0.2); border-top-color: white; border-radius: 50%; width: 40px; height: 40px; margin: 0 auto; animation: spin 1s linear infinite;"></div>
      <p style="margin-top: 16px; font-family: sans-serif; font-weight: 500;">Loading MusicPliance...</p>
    </div>
    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loadingElement);
  
  // Remove the initial loader once React is mounted
  return () => {
    setTimeout(() => {
      const loader = document.getElementById('initial-loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 500ms';
        setTimeout(() => loader.remove(), 500);
      }
    }, 500);
  };
};

// Show initial loading indicator
const removeInitialLoader = showInitialLoadingState();

// Mount React application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

// Cleanup initial loader
removeInitialLoader();
