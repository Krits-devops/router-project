import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
   <Template
   title= ' sdff'
   desc1 ='werfewrferf'
   image={signupImg}
   formtype='signup'
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Signup