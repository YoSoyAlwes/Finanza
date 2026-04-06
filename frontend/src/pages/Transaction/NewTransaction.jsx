import { TransactionTable } from '../../components/tables/TransactionTable.jsx';
import { SideBar } from '../../components/UI/SideBar.jsx';
import { Header } from '../../components/UI/Header.jsx';
import { useFinance } from '../../hooks/contexts/useFinance.js';
import { useState } from 'react';

export const NewTransaction = () => {
	const [transaction, setTransaction] = useState({
		date: '',
		amount: 0,
		type: 'in',
	});

	const handlerChange = e => {
		const data = e.target;
		setTransaction({ ...transaction, [data.name]: data.value });
	};

	const { addTransaction } = useFinance();

	const handlerSubmit = e => {
		e.preventDefault();
		addTransaction(transaction);
	};

	return (
		<>
			<Header title={'Crear Transaccion'} />
			<SideBar active={'newTransaction'} />
			<div className="containerInformation">
				<TransactionTable onSubmit={handlerSubmit} onChange={handlerChange} />
			</div>
		</>
	);
};
