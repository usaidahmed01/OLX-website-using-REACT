import { useState, useEffect } from 'react';
import './index.css'
import { useParams} from 'react-router-dom';
import loading from '../../Assets/loading.gif'
import profile from '../../Assets/profile.jpg'

import { getSingleProduct } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/adcart';
import CartPage from '../../components/cartPage';
import { auth } from '../../config/firebase';
import { onAuthStateChanged } from "firebase/auth";



function Detail(props) {
    const [singleProduct, setSingleProduct] = useState([])
    const [user , setUser] = useState()
    const { adId } = useParams()
    const dispatch = useDispatch()
    // const [ productID , setProductID] = useState()
    
    const { price, title, brand, description, imageURL } = singleProduct


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
                    // console.log(user, 'user hai bhai ye');
                    setUser(user)
        
        });
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
// console.log( 'single product' , singleProduct);




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
                        
                        {user && <div className='profile-div'>
                            <span className='img-span'><img className='profile-img' src={user?.photoURL == null ? profile : user.photoURL} /> {user.displayName}</span>
                            <div className='chat-btn'onClick={() => dispatch(addToCart(singleProduct))}>Add To Cart</div>
                            <div className="cart-page"><CartPage api = {singleProduct} /></div>

                        </div>}

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