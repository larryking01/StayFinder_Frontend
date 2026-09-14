import styles from './register.module.scss'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors';
import { registerUser } from '../../store/features/userSlice/user.thunks';
import type { CreateUserPayload } from '../../types/user.model';












const Register = () => {


    const dispatch = useAppDispatch()
    const appName = useAppSelector( selectAppName )
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ confirmPassword, setConfirmPassword ] = useState<string>('')



    const handleRegister = (e: any) => {
        e.preventDefault()

        let user: CreateUserPayload = {
            firstName,
            lastName,
            email,
            password
        }

        dispatch(registerUser(user))
    }


    
    return (
        <main className={ styles.register }>
            <section className={ styles.register__intro }>
                <NavLink to="/" className="nav-link-default">
                    <h3>{ appName }</h3>
                </NavLink>
                <p>Create your free account</p>
            </section>

            
            <section className={ styles.register__registerForm }>
                <form onSubmit={ handleRegister }>
                    <div className={ styles.nameContainer }>
                        <div className={ styles.inputContainer }>
                            <input type="text" placeholder='First name' onChange={(e) => setFirstName(e.target.value)} value={ firstName } />
                        </div>

                        <div className={ styles.inputContainer }>
                            <input type="text" placeholder='Last name' onChange={(e) => setLastName(e.target.value)} value={ lastName } />
                        </div>
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={ email } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={ password } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)} value={ confirmPassword } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </section>


            <section className={ styles.register__loginRedirect }>
                <p>Have an account?</p>
                <NavLink to="/accounts" className="nav-link-default">
                    <p className={ styles.loginText }>Login</p>
                </NavLink>
            </section>


            <section className={ styles.register__OrDividerContainer }>
                <p>OR</p>
            </section>


            <section className={ styles.register__googleLoginContainer }>
                <button type="submit">
                    <FcGoogle size={ 24 } />                   
                    <p>Join with google </p>
                </button>
            </section>


        </main>
    )
}



export default Register