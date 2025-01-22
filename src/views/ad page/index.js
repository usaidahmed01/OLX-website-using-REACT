import { useState } from 'react';
import logo from '../../Assets/logo-2.png'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { userAd } from '../../config/firebase';

function Ad() {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [brand, setBrand] = useState()
    const [price, setPrice] = useState()
    const [images, setImages] = useState()
    const [description, setDescription] = useState()


    const posted = async () => {
        try {

            await userAd({ title, brand, price, images, description })

            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return <div className='main'>
        <h3 className='post-heading'>post your ad</h3>
        <div className='div1'>
            <div className='div2'>
                <div ><h3>selected category</h3></div>
                <div >
                    <h3>include some details</h3>
                    <label>Ad title:</label>
                    <br />
                    <input className='input' type='text' placeholder='Enter Your Ad Title' onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <br />

                    <label>Brand:</label>
                    <br />
                    <input className='input' type='text' placeholder='Brand Name' onChange={(e) => setBrand(e.target.value)} />
                </div>
                <div>
                    <h3>Set price</h3>
                    <label>Price:</label>
                    <br />
                    <input className='input' type='text' placeholder='RS' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <h3>Description</h3>
                    <label>Description:</label>
                    <br />
                    <textarea className='input' placeholder='Description' onChange={(e) => setDescription(e.target.value)} ></textarea>
                </div>
                <div>
                    <h3>Upload photos</h3>
                    <br />
                    <div class="upload-btn-wrapper">
                        <button for='file' class="upload-img-btn">Upload Profile</button>
                        <input type="file" id='file' name="myfile" onChange={(e) => setImages(e.target.files[0])} />
                    </div>
                </div>

                <div>
                    <button className='log-btn' onClick={posted}>Post Now</button>
                </div>
            </div>

        </div>
    </div>


}
export default Ad;