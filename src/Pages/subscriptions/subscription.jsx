import './subscription.css'
import { useState } from 'react'
import Navbar from '../../components/nav bar/navigation'
import Footer from '../../components/footer/Footer'
import SubHeader from '../../components/SubscriptionHeader/SubHeader'




const subscription = () => {
    const [count, setCount] = useState(0)

    return (
        <div>

            <Navbar />

            <div className="subHeader">

                <h1>Solutions for every type of business</h1>

            </div>


            <div className="subpackage_all">

                <SubHeader />

            </div>


            <Footer />

        </div>
    )
}

export default subscription