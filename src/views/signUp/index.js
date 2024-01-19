import { useNavigate } from "react-router-dom";
import { signup } from "../../config/firebase";
import { useState } from "react";
import './index.css'
import logo from '../../Assets/logo-2.png'

function SignUp() {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const register = async () => {
        try {

            await signup({ fullName, age, email, password })
            navigate('/home')
        } catch (error) {
            console.log(error);
        }

    }



    return <div className="flex">
    <div className="mainDiv">
        <img src={logo} className='olx-logo' />
        <h5>Welcome to OLX</h5>
        <p className='title'>The trusted community of buyers and sellers.</p>
        <input type="text" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} />
        <br />
        <input type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <div>
            <button className='log-btn' onClick={register}>Sign Up</button>
            <p className='title'>Already have an account? <span className='signup-link' onClick={() => navigate('/')}>Login</span></p>
        </div>

    </div>
    </div>

}
export default SignUp;