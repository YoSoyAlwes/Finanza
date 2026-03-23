export const TransactionTable = () => {
	return (
		<>
			<form>
				<label htmlFor="id">ID</label>
				<input type="text" name="id" required />
				<label htmlFor="date">Fecha</label>
				<input type="date" name="date" id="date" required />
				<label htmlFor="title">Titulo</label>
				<input type="text" name="title" required />
				<label htmlFor="amount">Cantidad</label>
				<input type="number" name="amount" id="amount" required />
				<label htmlFor="type">Tipo</label>
				<select name="type" id="type" required>
					<option value="in">Entra</option>
					<option value="out">Sale</option>
				</select>
				<button type="submit">Subir</button>
			</form>
		</>
	);
};
