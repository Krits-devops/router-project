import React, { useState } from 'react'
import { use } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        email:'', password : ''
    })

    const [showPassword, setShowPassword] = useState(false);

        function changeHandler(event){
            setFormData((prevData)=>(
                {
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            ))
        }

        function submitHandler(event){
            event.preventDefault();
            setIsLoggedIn(true);
            toast.success('Logged In')
            navigate("/dashboard")
        }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input type="email" name="email" required
             value={formData.email}
             onChange={changeHandler}
             placeholder='Enter Email ID'
            />
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input type={showPassword ? ('text') : ('password')} 
            required
            name='password'
             value={formData.password}
             onChange={changeHandler}
             placeholder='Enter Password'
            />

                <span onClick={()=> setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to='#'>
                     <p>
                        Forgot Password?
                     </p>
                </Link>

                <button>
                    SignIn
                </button>

        </label>
    </form>
  )
}

export default LoginForm