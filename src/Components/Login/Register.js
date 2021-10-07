import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import userIcon from '../../images/user.png'
import phoneIcon from '../../images/phone.png'
import hashIcon from '../../images/hash.png'
import faxIcon from '../../images/fax.png'
import locationIcon from '../../images/location.png'
import mailIcon from '../../images/mail.png'
import cross from '../../images/cross.png'
import eye from '../../images/eye.png'
import lock from '../../images/lock.png'
import Footer from '../Footer/Footer';

function Register() {
    const history=useHistory();
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [email,setemail]=useState();
    const [telephone,setTelephone]=useState();
    const [fax,setFax]=useState();
    const [add1,setAdd1]=useState();
    const [add2,setAdd2]=useState();
    const [city,setCity]=useState();
    const [postCode,setPcode]=useState();
    const [countryCode,setCcode]=useState();
    const [zoneId,setZoneId]=useState();
    const [password,setPassword]=useState();
    const [newsLetter,setNewsletter]=useState(true);
    const [agree,setAgree]=useState(true);

    const [newP,setNew]=useState('');
    const [confirm,setConfirm]=useState('');

    const [newType,setNewType]=useState('password');
    const [confirmType,setConfirmType]=useState('password');

    const handleEye2=()=>{
        if(newType==='password'){
            setNewType('text')
        }
        else if(newType==='text'){
            setNewType('password')
        }
    }
    const handleEye3=()=>{
        if(confirmType==='password'){
            setConfirmType('text')
        }
        else if(confirmType==='text'){
            setConfirmType('password')
        }
    }

    const handlesave=()=>{
        if(newP!==confirm){
            window.alert('New and confirm passwords are different')
        }
        else if(!newP || !confirm){
            window.alert('Please fill all the fields')
        }
        else{
            window.alert('Your have registered successfully');
            history.push('/')
        }
    }


    return (
        <>
            <div className="profile-container">
            <center><h2 className="profile-heading">Update your profile</h2></center>
            <div className="form">
                <form>
                    <div className="profile-row">
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="First name" type="text" onChange={(e)=>setFname(e.target.value)} value={firstname}/>
                            <img src={cross} alt="clear" onClick={()=>setFname('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="Last name" type="text" onChange={(e)=>setLname(e.target.value)} value={lastname}/>
                            <img src={cross} alt="clear" onClick={()=>setLname('')} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={mailIcon} alt="mail icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={phoneIcon} alt="phone icon"/>
                            <input placeholder="Mobile number" type="text" onChange={(e)=>setTelephone(e.target.value)} value={telephone}/>
                            <img src={cross} alt="clear" onClick={()=>setTelephone('')} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={faxIcon} alt="fax icon"/>
                            <input placeholder="Fax" type="text" onChange={(e)=>setFax(e.target.value)} value={fax}/>
                            <img src={cross} alt="clear" onClick={()=>setFax('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Postal code" type="text" onChange={(e)=>setPcode(e.target.value)} value={postCode}/>
                            <img src={cross} alt="clear" onClick={()=>setPcode('')} className="cross"/>
                        </div>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" onChange={(e)=>setAdd1(e.target.value)} value={add1}/>
                        <img src={cross} alt="clear" onClick={()=>setAdd1('')} className="cross"/>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="City" type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                        <img src={cross} alt="clear" onClick={()=>setCity('')} className="cross"/>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Zone Id" type="text" onChange={(e)=>setZoneId(e.target.value)} value={zoneId}/>
                            <img src={cross} alt="clear" onClick={()=>setZoneId('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Country code" type="text" onChange={(e)=>setCcode(e.target.value)} v/>
                            <img src={cross} alt="clear" onClick={()=>setFname('')} className="cross"/>
                        </div>
                    </div>
                    
                            <div className="profile-row">
                                <div className="input-checkbox">
                            
                                    <input type="checkbox" id="newletter" name="newsletter" onChange={(e)=>setNewsletter(!newsLetter)} value={newsLetter}/>
                                    <label for="newletter">Subscribe to newletter</label>
                                </div>
                                <div className="input-checkbox">
                            
                                    <input type="checkbox" name="terms" id="terms" onChange={(e)=>setAgree(!agree)} value={agree}/>
                                    <label for="terms">Terms and conditions</label>
                            </div>
                    </div>
                    <div className="profile-row btn">
                        <center><button className="save" onClick={handlesave} disabled={!agree}>Save</button></center>
                    </div>
                </form>
            </div>
            
        </div>
        <Footer/>
        
        </>
    )
}

export default Register
