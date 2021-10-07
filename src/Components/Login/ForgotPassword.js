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
import { Alert } from 'react-bootstrap';


function ForgotPassword() {
    const history=useHistory();
    const [email,setemail]=useState();
    const [error, setError]=useState("")
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState('')

    const [newType,setNewType]=useState('password');
    const {resetPassword}=useAuth()

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

        // await login(email,password)
        
        try{
            setMessage()
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage('check your inbox for further instructions')

        }
        catch{
            setError('Failed to reset password')
        }
        setLoading(false);
        

    }
    return (
        <>
        <div className="profile-container">
            <center><h2 className="profile-heading">Password Reset</h2></center>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <div className="form">
                <form>
                    <div className="profile-row">
                        <div className="input">
                            <img src={mailIcon} alt="mail icon" className="input-icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        
                    </div>
                    <div className="profile-row btn">
                        <button className="save" onClick={handlesave} disabled={loading}>Reset Password</button>
                    </div>
                </form>
            </div>
            <center><h2 className="profile-footer">OR</h2></center>
            <center><b>New here?</b><Link to="/signup">Create an account</Link></center>
            <center><Link to="/login">Login</Link></center>
        </div>
        <Footer/>
        </>
    )
}

export default ForgotPassword
