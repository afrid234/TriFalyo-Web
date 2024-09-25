import { useState } from 'react'
import './index.css'
import Navbar from '../../components/nav bar/navigation'
import FrameComponent4 from '../../components/header/header'
import Stat from '../../components/statistics/stat'
import PartnerRestaurants from '../../components/restuarants/partner/partner'
import Menu from '../../components/restuarants/menu/menu'
import TechStack from '../../components/TechStack/techstack'
import OurPartners from '../../components/ourpartners/OurPartners'
import Footer from '../../components/footer/Footer'




const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            
            <Navbar />
            <FrameComponent4 />
            <Stat />
            <PartnerRestaurants />
            <Menu />
            <PartnerRestaurants />
            <TechStack />
            <OurPartners />
            <Footer />

        </div>
    )
}


export default App