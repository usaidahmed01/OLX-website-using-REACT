import logo from '../../Assets/logo.png'
import logo2 from '../../Assets/logo-2.png'
import './index.css'
import car from '../../Assets/car-front.png'
import building from '../../Assets/building-2.png'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from '../../config/firebase'
import { useEffect, useState } from 'react'
import { getpfps } from '../../config/firebase'




function Header() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [pfpImg, setPfpImg] = useState({})
    const [pfurl , setPfurl] = useState()
    // const { pfpURl , id , fullName } = pfpImg

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                setUser(null)
            }
        });
        
    }, [])
    useEffect(() => {
        getpicture()
        
    }, [pfpImg])
    
    console.log(pfpImg);

    const getpicture = async () => {
        const pfpicture = await getpfps()
        setPfpImg(pfpicture)

    }

    const signOut = async () => {
        await logout()
        setUser(null)
        setPfpImg()



        navigate('/home')
    }


    return <div className='main-div'>
        <div className='div2'>
            <ul className='nav-1'>

                <li><img className='olx-logo-1' src={logo} /></li>
                <li className='nav-1-lis'><img className='nav-1-car-builing' src={car} />  MOTORS</li>
                <li className='nav-1-lis'><img className='nav-1-car-builing' src={building} /> PROPERTY</li>

            </ul>
            <ul className='nav-2'>
                <li><img className='olx-logo-2' src={logo} onClick={() => navigate('/home')} /></li>
                <li><select className='loc-bar'>
                    <option selected >Pakistan</option>
                    <option>India</option>
                    <option>Bangladesh</option>

                </select></li>
                <li><input className='search-bar' placeholder='Find Cars, Mobile Phones and more...' type='search' /></li>
                <li>{user ? <p>
                    <span className='email'>{user.email}</span>
                    {!pfpImg.length  ?<span class="upload-btn-wrapper">
                            <button class="upload-img-btn" onClick={() => navigate('/editProfile')} >Upload Profile</button> 
                          
                        </span>
                        :
                        <span><img className='profile-img' src={pfpImg[0].pfpURl} /></span>


                    }

                    <button className='login-btn' onClick={signOut}>Logout</button>
                </p>
                    : <button className='login-btn' onClick={() => navigate('/')}>Login</button>}</li>

                <li><button className='sell-btn' onClick={() => navigate('/adpage')}>SELL</button></li>


            </ul>
            <ul className='nav-1'>
                <li className='nav-3-li1'>All categories</li>
                <li className='nav-3-lis'>Mobile Phones</li>
                <li className='nav-3-lis'>Cars</li>
                <li className='nav-3-lis'>Motorcycles</li>
                <li className='nav-3-lis'>Houses</li>
                <li className='nav-3-lis'>Video-Audios</li>
                <li className='nav-3-lis'>Tablets</li>
                <li className='nav-3-lis'>Land & Plots</li>
            </ul>
        </div>


    </div>

}
export default Header;