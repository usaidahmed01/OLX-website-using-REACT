import './index.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../config/firebase";
import logo from '../../Assets/logo-2.png'
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = async () => {
        try {

            await login({ email, password });
            navigate('/home')
        } catch (error) {
            alert (error)
        }



    }

    return <div className='flex'>
        <div className="mainDiv">
            <img src={logo} className='olx-logo' />
            <h5>Welcome to OLX</h5>
            <p className='title'>The trusted community of buyers and sellers.</p>
            <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <div>
                <button className='log-btn' onClick={signIn} >Login</button>
                <p className='title'>Don't you have an account? <span className='signup-link' onClick={() => navigate('/signup')}>Sign Up</span></p>
            </div>
        </div>
    </div>
}
export default Login;