import { TransactionTable } from '../../components/tables/TransactionTable.jsx';
import { SideBar } from '../../components/UI/SideBar.jsx';
import { Header } from '../../components/UI/Header.jsx';
import { useFinance } from '../../hooks/contexts/useFinance.js';

export const NewTransaction = () => {
	return (
		<>
			<Header title={'Crear Transaccion'} />
			<SideBar active={'newTransaction'} />
			<div className="containerInformation">
				<TransactionTable />
			</div>
		</>
	);
};
