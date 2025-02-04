import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function SignupForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        confirmPassword: '',

    })

    const [showPassword , setShowPassword] = useState(false)

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
        if(formData.password != formData.confirmPassword){
            toast.error('Password do not match')
            return
        }
        setIsLoggedIn(true);
        toast.success('Account Created');
        const accountData= {
            ...formData
        }
        console.log('Account Data' + accountData);

        navigate('/dashboard')
    }

  return (
    <div>
         <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
         </div>

        <form onSubmit={submitHandler}>

            <div>
                <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter the First Name'
                            value={formData.firstName}
                        />
                </label>

                <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter the Last Name'
                            value={formData.lastName}
                        />
                </label>
            </div>

            <label>
                        <p>Email Address<sup>*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter the First Name'
                            value={formData.email}
                        />
            </label>

            {/* Password and confirmPassword */}

            <div>
            <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter the Password'
                            value={formData.firstName}
                        />
                         <span onClick={()=> setShowPassword((prev) => !prev)}>
                                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                         </span>
                </label>

                <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                        />
                         <span onClick={()=> setShowPassword((prev) => !prev)}>
                                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                         </span>
                </label>
            </div>

                <button>
                    Create Account
                </button>

        </form>
    </div>
  )
}

export default SignupForm