import { SideBar } from '../../components/UI/SideBar.jsx';
import { Header } from '../../components/UI/Header.jsx';
import { useFinance } from '../../hooks/contexts/useFinance.js';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Table/table.css';

export const Transactions = () => {
	const { transactions: data, deleteTransaction } = useFinance();

	const navigate = useNavigate();

	if (!data || data.length === 0) return <p>No Datos</p>;

	return (
		<>
			<Header title={'Crear Transaccion'} />
			<SideBar active={'transactions'} />
			<div className="containerInformation">
				<table className="transactionsTable">
					<thead>
						<tr className="title">
							{Object.keys(data[0]).map(e => (
								<th key={e}>{e}</th>
							))}
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{data.map(d => (
							<tr key={d.id}>
								{Object.values(d).map((e, i) => (
									<td key={i}>{e}</td>
								))}
								<td>
									<button
										onClick={() => navigate(`/updateTransaction/${d.id}`)}
									>
										Editar
									</button>
									<button onClick={() => deleteTransaction(d.id)}>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
