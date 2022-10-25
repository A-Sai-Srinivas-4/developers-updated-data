import { useState, useEffect } from 'react';

import InputForms from './../InputForms'

import './index.css'



const state = {
    name : "",
    email : "",
    password : "",
    isMember : true,
    isCheckedPassword: false,
};



const LoginPage = () => {

    const [values, setValues] = useState(state);

    const onChangeEvent = (event) => {
        console.log(event.target.value)
    }

    const onSubmitEvent = (event) => {
        event.preventDefault();
        console.log('is-success')
    }

    const onShowHidePassword = () => {
        this.setState(prev => ({isCheckedPassword: !prev.isCheckedPassword}))
      }

    const toggleMember = () => {
        setValues({...values, isMember : !values.isMember})
    }





    return(
        <>
        <div className="container">
        <form className="form" onSubmit={onSubmitEvent} >

        <img
        className="website-logo"
        src="https://secureservercdn.net/160.153.137.91/nhd.f13.myftpupload.com/wp-content/uploads/2022/06/logo-1-14.svg?time=1665549221"
        alt="website logo"
        />
        <h1 className="heading">{values.isMember ? "SIGN-IN" : "REGISTER"}</h1>

        {!values.isMember && (
   
        <InputForms  name="Name" type="text" value={values.name} onChangeEvent={onChangeEvent} /> )}

        <InputForms name='Email' type="email" value={values.email} onChangeEvent={onChangeEvent} />

        <InputForms name='Password' type={values.isCheckedPassword ? 'text' : 'password'} value={values.password} onChangeEvent={onChangeEvent} /> 

        <button className="login_button" type="submit">Sign-In</button>

        <div className="pa_container">
        <p className="paragraph" >Show-Password</p>
        <input
            type="checkbox"
            className="hide"
            checked={values.isCheckedPassword}
            onChange={onShowHidePassword}
          />
        </div>
        <hr/>

        <div className="member_container">

        <h4>{values.isMember ? "Not a member at" : "Already a member"}</h4>
        <button onClick={toggleMember} className="member_button" >{values.isMember ? "Register" : "Sign-In"}</button>
        
        </div>

        
        
        </form>
        </div>
        </>
    )
}

export default LoginPage




        