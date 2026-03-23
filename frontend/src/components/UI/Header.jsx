import '../../styles/components/header.css';

export const Header = ({ title }) => {
	return (
		<div className="header">
			<p>{title}</p>
		</div>
	);
};
