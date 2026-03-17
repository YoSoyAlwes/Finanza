import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard.jsx'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}