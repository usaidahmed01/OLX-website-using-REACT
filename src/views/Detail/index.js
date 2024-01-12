import { useState, useEffect } from 'react';
import './index.css'
import { useParams } from 'react-router-dom';
import loading from '../../Assets/loading.gif'
import Header from '../../components/header';
import Footer from '../../components/footer';

function Detail(props) {
    const [singleProduct, setSingleProduct] = useState([])
    const { adId } = useParams()
    const { price, title, brand, description, images } = singleProduct

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${adId}`)
            .then(res => res.json())
            .then(res => setSingleProduct(res));
        // .then(res => console.log(res))
    }, [])






    return <>
        {singleProduct.length === 0 ?
            <><div className='loading-img'><img src={loading} /></div>
            </>
            :


            <>

                <Header />
                <br />
                <div className='detail'>


                    <div className='img-div'>
                        <img width='100%' src={images[0]}/>


                        {/* {images.map((item) => {
                            return <img src={item} />

                        })} */}

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
                <div><Footer /></div>
            </>
        }
    </>

}
export default Detail;