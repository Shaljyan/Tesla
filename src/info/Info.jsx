import './info.css'
import CheckIcon from '@mui/icons-material/Check';
import MovingIcon from '@mui/icons-material/Moving';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HelpIcon from '@mui/icons-material/Help';

export default function Info() {
  return (
    <div className='info'>
        <div className='infoItem'>
            <div className='infoMoneyConatiner'>
                <span className='infoMoney'>25</span><br/>
                <span className='infoMoneyRate'><CheckIcon className='check'/>SIGNUPS</span>
            </div>
        </div>

        <div className='infoItem'>
            <div className='infoMoneyConatiner'>
                <span className='infoMoney2'>$1000</span><br/>
                <span className='infoMoneyRate'><MovingIcon className='moving'/>PROFIT</span>
            </div>
        </div>

        <div className='infoItem'>
            <div className='infoMoneyConatiner'>
                <span className='infoMoney3'>$350</span><br/>
                <span className='infoMoneyRate'><LocalAtmIcon className='local'/>COMMISSIONS</span>
            </div>
        </div>

        <div className='infoItem'>
            <div className='infoMoneyConatiner'>
                <span className='infoMoney4'>$300</span><br/>
                <span className='infoMoneyRate'><HelpIcon className='help'/>PENDING COMMISSIONS</span>
            </div>
        </div>
        </div>
  )
}
