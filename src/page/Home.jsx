import './home.css';
import Info from '../info/Info'
import Chart from '../components/chart/Chart';
import WidgetInfo from '../components/widgetInfo/WidgetInfo'

export default function Home() {
  return (
    <div className='home'>
        <Info />
        <Chart />
        <WidgetInfo />
        </div>
  )
}
