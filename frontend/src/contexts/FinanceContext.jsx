import { useLocalStorage } from '../func/storage/UseLocalStorage.jsx';
import { useState } from 'react';
import { FinanceContext } from './Contexts';

export function FinanceProvider({ children }) {
	const [transactions, setTransactions] = useLocalStorage('transactions', []);
	const [categories, setCategories] = useLocalStorage('categories', [
		{ id: '1', name: 'Comida', color: '#1D9E75' },
		{ id: '2', name: 'Transporte', color: '#378ADD' },
		{ id: '3', name: 'Salud', color: '#D85A30' },
	]);
	const [loading, setLoading] = useState(false);

	const getTransaction = async id => {
		setLoading(true);
		const transaction = transactions.filter(t => t.id === id);
		setLoading(false);
		return transaction;
	};

	const addTransaction = tx => {
		const nueva = {
			id: crypto.randomUUID(),
			...tx,
		};
		setTransactions([...transactions, nueva]);
	};

	const deleteTransaction = id => {
		setTransactions(transactions.filter(t => t.id !== id));
	};

	const updateTransaction = id => {};

	return (
		<FinanceContext.Provider
			value={{
				transactions,
				categories,
				setCategories,
				loading,
				addTransaction,
				deleteTransaction,
				getTransaction,
			}}
		>
			{children}
		</FinanceContext.Provider>
	);
}
