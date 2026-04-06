import { SideBar } from '../components/UI/SideBar.jsx';
import { Header } from '../components/UI/Header.jsx';
import { useFinance } from '../hooks/contexts/useFinance.js';
import '../styles/dashboard.css';

export const Dashboard = () => {
	const { transactions: data } = useFinance();

	const calculateTotals = () => {
		let income = 0;
		let expenses = 0;

		data.forEach(s => {
			if (s.type === 'in') {
				income += Number(s.amount);
			} else if (s.type === 'out') {
				expenses += Number(s.amount);
			}
		});

		return { income, expenses, total: income - expenses };
	};

	const { income, expenses, total } = calculateTotals();

	return (
		<>
			<div className="containerSideBar">
				<SideBar active={'dashboard'} />
			</div>
			<Header title={'Bienvenido, usuario'} />
			<div className="containerInformation">
				<div className="boxes">
					<div className="income">
						<p style={{ fontSize: '2em' }}>Ingreso</p>
						<p style={{ color: 'green', fontSize: '1.4em' }}>{income} Gs</p>
					</div>
					<div className="expenses">
						<p style={{ fontSize: '2em' }}>Gasto</p>
						<p style={{ color: 'red', fontSize: '1.4em' }}>{expenses} Gs</p>
					</div>
					<div className="balance">
						<p style={{ fontSize: '2em' }}>Total</p>
						<p style={{ fontSize: '1.4em' }}>{total} Gs</p>
					</div>
				</div>
			</div>
		</>
	);
};
