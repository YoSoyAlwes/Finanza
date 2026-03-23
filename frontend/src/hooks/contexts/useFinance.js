import { useContext } from 'react';
import { FinanceContext } from '../../contexts/Contexts.jsx';

export const useFinance = () => useContext(FinanceContext);
