import './index.css'
import Card from '../../components/card'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getADs } from '../../config/firebase'
import loading from '../../Assets/loading.gif'
import banner1 from '../../Assets/banner-1.png'
import img1 from '../../Assets/image-1.png'
import img2 from '../../Assets/image-2.png'
import img3 from '../../Assets/image-3.png'
import img4 from '../../Assets/img-4.png'
import img5 from '../../Assets/img-5.png'
import img6 from '../../Assets/img-6.png'
import img7 from '../../Assets/img-7.png'
import img8 from '../../Assets/img-8.png'
import img9 from '../../Assets/img-9.png'
import img10 from '../../Assets/img-10.png'
import img11 from '../../Assets/img-11.png'
import img12 from '../../Assets/img-12.png'
import img13 from '../../Assets/img-13.png'
import img14 from '../../Assets/img-14.png'
import Header from '../../components/header';
import Footer from '../../components/footer';




function Home(props) {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsfromAPI()

    }, [])

    const getProductsfromAPI = async () => {

        const ads = await getADs()
        setProducts(ads)
        
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(res => setProducts(res.products));
    }
    // console.log('adsdata', products);
    if (!products.length) {
        return <div className='loading-img'><img src={loading} /></div>
        
    }



    return <>


        <br />
        <div className='allcat'>
            <p>
                <img className='imges' src={img1} />
                <br />
                Mobiles

            </p>

            <p>

                <img className='imges' src={img2} />
                <br />
                vehicles
            </p>
            <p>

                <img className='imges' src={img3} />
                <br />
                Property For <br /> Sale
            </p>
            <p>

                <img className='imges' src={img4} />
                <br />
                Property For <br /> Rent
            </p>
            <p>

                <img className='imges' src={img5} />
                <br />
                Electronics & <br />
                Home <br /> Appliances
            </p>
            <p>

                <img className='imges' src={img6} />
                <br />
                Bikes
            </p>
            <p>

                <img className='imges' src={img7} />
                <br />
                Business <br /> Industrial & <br /> Agriculture
            </p>
            <p>

                <img className='imges' src={img8} />
                <br />
                Services
            </p>
            <p>

                <img className='imges' src={img9} />
                <br />
                Jobs
            </p>

        </div>
        <br />
        <div className='allcat'>

            <p>
                <img className='imges' src={img10} />
                <br />
                Animals
            </p>
            <p>
                <img className='imges' src={img11} />
                <br />
                Furniture & <br />
                Home decor
            </p>
            <p>
                <img className='imges' src={img12} />
                <br />
                Fashion & <br /> Beauty
            </p>
            <p>
                <img className='imges' src={img13} />
                <br />
                Books, Sports <br /> & Hobbies
            </p>
            <p>
                <img className='imges' src={img14} />
                <br />
                Kids
            </p>
        </div>









        <div className='api-cards-main'>
            {products.map((item) => {
                return <div className='api-cards' onClick={()=> {navigate(`/detail/${item.id}`)}}>
                    <Card item = {item}/>
                </div>

            })}



        </div>
        <br />
        <br />
        <>
            <img src={banner1} />
            <hr />
        </>





    </>
}
export default Home;