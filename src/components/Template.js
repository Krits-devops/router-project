import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import frame from '../assets/frame.png'

function template({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div>
       
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === 'signup' ?
            (<SignupForm/>) :
            (<LoginForm/>)
            }

            <div>
                <div></div>
                <p>OR</p>
            </div>

            <button>
                Signup With Google
            </button>
        </div>

        <div>
            <img src={frame} alt="image" 
            width={558}
            height={504}
            loading='lazy'/>

            <img src={image}
            width={558}
            height={490}
            loading='lazy'/>
        </div>

    </div>
  )
}

export default template