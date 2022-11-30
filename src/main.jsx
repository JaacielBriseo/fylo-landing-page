import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './context/DataContext';
import { FyloLandingPage } from './FyloLandingPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DataProvider>
			<FyloLandingPage />
		</DataProvider>
	</React.StrictMode>
);
