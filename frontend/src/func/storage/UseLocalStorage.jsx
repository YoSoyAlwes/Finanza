import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		const stored = localStorage.getItem(key);
		return stored ? JSON.parse(stored) : initialValue;
	});

	const set = newVal => {
		setValue(newVal);
		localStorage.setItem(key, JSON.stringify(newVal));
	};

	return [value, set];
}
