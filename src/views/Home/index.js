import './index.css'
import Card from '../../components/card'
import { useEffect, useState } from 'react'


function Home(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsfromAPI()

    }, [])

    const getProductsfromAPI = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res));
    }



    return <div>

        <Card  />

    </div>
}
export default Home;