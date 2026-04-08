import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard.jsx';
import { NewTransaction } from '../pages/Transaction/NewTransaction.jsx';
import { Transactions } from '../pages/Transaction/Transactions.jsx';
import { UpdateTransaction } from '../pages/Transaction/UpdateTransaction.jsx';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/newTransaction" element={<NewTransaction />}></Route>
			<Route path="/Transactions" element={<Transactions />}></Route>
			<Route
				path="/updateTransaction/:id"
				element={<UpdateTransaction />}
			></Route>
		</Routes>
	);
};
