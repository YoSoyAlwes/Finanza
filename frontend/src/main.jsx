import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FinanceProvider } from './contexts/FinanceContext.jsx';
import './styles/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<FinanceProvider>
				<App />
			</FinanceProvider>
		</BrowserRouter>
	</StrictMode>
);
