import { SideBar } from '../components/UI/SideBar.jsx'
import '../styles/dashboard.css'

export const Dashboard = () => {

  return (
    <>
    <div className='containerSideBar'>
    	<SideBar active={'dashboard'} />
    </div>
    <div className='header'>
        <p>Bienvenido, Usuario</p>
    </div>
    <div className='containerInformation'>
        <div className='boxes'>
        <div className='income'>
            <p style={{fontSize: '2em'}}>Ingreso</p>
            <p style={{color: 'green', fontSize: '1.4em'}}>1.000.000 Gs</p>
        </div>
      <div className='expenses'>
        <p style={{fontSize: '2em'}}>Gasto</p>
        <p style={{color: 'red', fontSize: '1.4em'}}>1.000.000 Gs</p>
      </div>
      <div className='balance'>
        <p style={{fontSize: '2em'}}>Total</p>
        <p style={{fontSize: '1.4em'}}>0 Gs</p>
      </div>
        </div>
    </div>
    </>
  )
}
