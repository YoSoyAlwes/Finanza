import { SideBar } from '../../components/UI/SideBar.jsx';
import { Header } from '../../components/UI/Header.jsx';
import { useFinance } from '../../hooks/contexts/useFinance.js';
import '../../styles/components/Table/table.css';

export const Transactions = () => {
	const { transactions: data } = useFinance();

	if (!data || data.length === 0) return <p>No Datos</p>;

	return (
		<>
			<Header title={'Crear Transaccion'} />
			<SideBar active={'transactions'} />
			<div className="containerInformation">
				<table className="transactionsTable">
					<thead>
						<tr>
							{Object.keys(data[0]).map(e => (
								<th key={e}>{e}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map(d => (
							<tr key={d.id}>
								{Object.values(d).map((e, i) => (
									<td key={i}>{e}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
