import React from 'react'
import loginImg from '../assets/login.png'
import Template from '../components/Template'

function Login({setIsLoggedIn}) {
  return (

    <Template
    title = 'Welcome Back'
    desc1 = 'sdfsdfd'
    desc2 = 'sfefgerf'
    image = {loginImg}
    formType = 'login'
    setIsLoggedIn = {setIsLoggedIn}
    />

  )
}

export default Login