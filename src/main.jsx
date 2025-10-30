import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import ThemeWrapper from './contexts/ThemeWrapper.jsx';
import store from './store';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
          <ThemeWrapper />
    </Provider>
  </StrictMode>
);
