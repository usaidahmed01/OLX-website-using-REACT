import { useState } from 'react';
import logo from '../../Assets/logo-2.png'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { userAd } from '../../config/firebase';

function Ad() {
    const navigate = useNavigate()
    const [ title , setTitle ] = useState()
    const [ brand , setBrand ] = useState()
    const [ price , setPrice ] = useState()

    const posted = async () => {
        try{

            await userAd({ title , brand , price})
            navigate('/adPage')
        }catch(error){
            console.log(error);
        }
    }

    return <div className='main'>
        <div className='nav-bar'><img className='nav-img' src={logo} /></div>
        <h3 className='post-heading'>post your ad</h3>
        <div className='div1'>
            <div className='div2'>
            <div ><h3 >selected category</h3></div>
            <div >
                <h3>include some details</h3>
                <label>Ad title:</label>
                <br/>
                <input className='input'  type='text' placeholder='Enter Your Ad Title' onChange={ (e) => setTitle(e.target.value)}/>
                <br/>
                <br/>

                <label>Brand:</label>
                <br/>
                <input className='input' type='text' placeholder='Brand Name' onChange={ (e) => setBrand(e.target.value)}/>
            </div>
            <div>
                <h3>Set price</h3>
                <label>Price:</label>
                <br/>
                <input className='input' type='text' placeholder='RS' onChange={ (e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <button className='log-btn' onClick={posted}>Post Now</button>
            </div>
            </div>

        </div>
    </div>


}
export default Ad;