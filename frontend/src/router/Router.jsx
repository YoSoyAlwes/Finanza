import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard.jsx';
import { NewTransaction } from '../pages/Transaction/NewTransaction.jsx';
export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/newTransaction" element={<NewTransaction />}></Route>
		</Routes>
	);
};
