import { TransactionTable } from '../../components/tables/TransactionTable.jsx';
import { SideBar } from '../../components/UI/SideBar.jsx';
import { Header } from '../../components/UI/Header.jsx';
import { useFinance } from '../../hooks/contexts/useFinance.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UpdateTransaction = () => {
	const [transaction, setTransaction] = useState({});
	const { id } = useParams();
	const { getTransaction, loading } = useFinance();

	useEffect(() => {
		getTransaction(id)
			.then(data => {
				setTransaction(data[0]);
			})
			.catch(e => {
				console.log(e);
			});
	}, []);

	if (loading) return <p>Cargando</p>;
	if (transaction.length === 0) return <p>Sin Datos</p>;

	const handlerChange = e => {
		const data = e.target;
		setTransaction({ ...transaction, [data.name]: data.value });
	};

	const handlerSubmit = e => {
		e.preventDefault();
		console.log(transaction);
	};

	return (
		<>
			<Header title={'Crear Transaccion'} />
			<SideBar active={'updateTransaction'} />
			<div className="containerInformation">
				<TransactionTable
					onSubmit={handlerSubmit}
					onChange={handlerChange}
					data={transaction}
				/>
			</div>
		</>
	);
};
