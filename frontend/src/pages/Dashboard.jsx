import { SideBar } from '../components/UI/SideBar.jsx'

import '../styles/App.css'

export const Dashboard = () => {

  return (
    <>
    	<SideBar active={'dashboard'} />
      <div>
        <p>Bienvenido, </p>
      </div>
      <div className='income'>
        <p>Ingreso</p>
        <p>1.000.000 Gs</p>
      </div>
      <div className='expenses'></div>
      <div className='balance'></div>
    </>
  )
}
