import '../../styles/components/Table/transactionTable.css';

export const TransactionTable = ({ onSubmit, onChange, data }) => {
	return (
		<div className="containerTable">
			<form onSubmit={onSubmit}>
				<label htmlFor="date">Fecha</label>
				<input
					type="date"
					name="date"
					id="date"
					value={data.date || ''}
					onChange={onChange}
					required
				/>
				<label htmlFor="title">Titulo</label>
				<input
					type="text"
					name="title"
					value={data.title || ''}
					onChange={onChange}
					required
				/>
				<label htmlFor="amount">Cantidad</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={data.amount || ''}
					onChange={onChange}
					required
				/>
				<label htmlFor="type">Tipo</label>
				<select
					name="type"
					id="type"
					value={data.type || ''}
					onChange={onChange}
					required
				>
					<option value="in">Entra</option>
					<option value="out">Sale</option>
				</select>
				<button type="submit">Subir</button>
			</form>
		</div>
	);
};
