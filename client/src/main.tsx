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
  loadingElement.style.background = 'linear-gradient(135deg, hsl(267, 84%, 15%), hsl(280, 84%, 5%))';
  loadingElement.style.display = 'flex';
  loadingElement.style.alignItems = 'center';
  loadingElement.style.justifyContent = 'center';
  loadingElement.innerHTML = `
    <div style="text-align: center; color: white; position: relative;">
      <div style="position: absolute; width: 80px; height: 80px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(circle, rgba(157, 78, 221, 0.2) 0%, rgba(0,0,0,0) 70%); animation: pulse 2s ease-in-out infinite;"></div>
      <div style="border: 4px solid rgba(157, 78, 221, 0.2); border-top-color: rgba(157, 78, 221, 0.8); border-radius: 50%; width: 50px; height: 50px; margin: 0 auto; animation: spin 1s linear infinite;"></div>
      <p style="margin-top: 20px; font-family: sans-serif; font-weight: 500; font-size: 16px; color: rgba(255, 255, 255, 0.9);">Loading MusicPliance...</p>
    </div>
    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
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
