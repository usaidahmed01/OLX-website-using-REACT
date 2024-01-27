import { useState, useEffect } from 'react';
import './index.css'
import { useParams } from 'react-router-dom';
import loading from '../../Assets/loading.gif'
import Header from '../../components/header';
import Footer from '../../components/footer';
import profile from '../../Assets/profile.jpg'
import { getSingleProduct } from '../../config/firebase';

function Detail(props) {
    const [singleProduct, setSingleProduct] = useState([])
    const { adId } = useParams()
    const { price, title, brand, description, imageURL } = singleProduct

    useEffect(() => {
        getAProduct()


        // fetch(`https://dummyjson.com/products/${adId}`)
        //     .then(res => res.json())
        //     .then(res => setSingleProduct(res));
        // // .then(res => console.log(res))
    }, [])
    const getAProduct = async () =>{
        const singleproduct = await getSingleProduct(adId)
        setSingleProduct(singleproduct)
    }
console.log( 'single product' , singleProduct);





    return <>
        {singleProduct.length === 0 ?
            <><div className='loading-img'><img src={loading} /></div>
            </>
            :


            <>

                <br />
                <div className='detail'>

                    <div className='img-profile-div'>

                        <div className='img-div'>
                            <img className='api-img' src={imageURL} />

                        </div>
                        <div className='profile-div'>
                            <span className='img-span'><img className='profile-img' src={profile} /> Usaid Ahmed</span>
                            <div className='phone-btn'>Show Phone Number</div>
                            <div className='chat-btn'>Chat</div>

                        </div>

                    </div>

                    <br />
                    <div className='price-div'>

                        <h1>$ {price}</h1>
                        <h4>{title}</h4>

                        <h4>{brand}</h4>

                    </div>
                    <br />
                    <div className='price-div'>
                        <h1>Description</h1>
                        <p>{description}.</p>
                    </div>
                    <br />
                    <br />


                </div>
            </>
        }
    </>

}
export default Detail;