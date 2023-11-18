// import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

axios.defaults.baseURL = import.meta.env.VITE_FETCH_PLANETS;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </React.StrictMode>
);
