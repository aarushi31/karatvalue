import React,{useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import mailIcon from '../../images/mail.png'
import cross from '../../images/cross.png'
import eye from '../../images/eye.png'
import lock from '../../images/lock.png'
import Footer from '../Footer/Footer';
import {useAuth} from '../AuthContext';
import {Alert} from 'react-bootstrap'


function Login() {
    const history=useHistory();
    const [email,setemail]=useState();
    const [password,setPassword]=useState();
    const [error, setError]=useState("")
    const [loading,setLoading]=useState(false);
    const [newType,setNewType]=useState('password');
    const {login,currentUser}=useAuth()

    const handleEye2=()=>{
        if(newType==='password'){
            setNewType('text')
        }
        else if(newType==='text'){
            setNewType('password')
        }
    } 

    const handlesave=async (e)=>{
        e.preventDefault();


        try{
            setError("")
            setLoading(true)
            await login(email,password)
            history.push('/')
        }catch{
            setError('Failed to login')
        }
        setLoading(false);
        
        

    }
    return (
        <>
        <div className="profile-container">
            <center><h2 className="profile-heading">Login</h2></center>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form">
                <form>
                    <div className="profile-row">
                        <div className="input">
                            <img src={mailIcon} alt="mail icon" className="input-icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={lock} alt="lock" className="input-icon"/>
                            <input placeholder="New Password" type={newType} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row btn">
                        <button className="save" onClick={handlesave} disabled={loading}>Login</button>
                    </div>
                </form>
            </div>
            <center><h2 className="profile-footer">OR</h2></center>
            <center><b>New here?</b><Link to="/signup">Create an account</Link></center>
            <center><Link to="/forgotPassword">Forgot Password?</Link></center>
        </div>
        <Footer/>
        </>
    )
}

export default Login
