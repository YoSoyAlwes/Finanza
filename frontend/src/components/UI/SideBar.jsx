import { useState } from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/sidebar.css';

export const SideBar = ({ active }) => {
	const navItems = [
		{ id: 'dashboard', label: 'Dashboard' },
		{ id: 'newTransaction', label: 'Nueva Transaccion' },
		{ id: 'transactions', label: 'Transacciones' },
	];

	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const handlerOpen = async () => {
		setOpen(!open);
	};

	return (
		<>
			{open == false ? (
				<button onClick={handlerOpen} className={`openButton`}>
					☰
				</button>
			) : (
				''
			)}
			{open && <div className="overlay" onClick={handlerOpen} />}
			<aside className={`sidebar ${open ? `open` : ''}`}>
				<div className="headerBar">
					<button onClick={handlerOpen} className={`closeButton`}>
						✕
					</button>
					<h3>Finanza</h3>
				</div>
				<nav className="nav">
					{navItems.map(item => (
						<button
							key={item.id}
							className={`navItem ${active === item.id ? 'active' : ''}`}
							onClick={() => navigate(`/${item.id}`)}
						>
							{item.label}
						</button>
					))}
				</nav>
				<div className="footerBar">
					<button className={`navItem ${active === 'user' ? 'active' : ''}`}>
						<User /> Usuario
					</button>
				</div>
			</aside>
		</>
	);
};
