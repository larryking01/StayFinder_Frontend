import styles from './login.module.scss'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors';
import { loginUser } from '../../store/features/userSlice/user.thunks';
import { useState } from 'react'







const Login = () => {


    const appName = useAppSelector( selectAppName )
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const dispatch = useAppDispatch()



    const handleLogin = (e: any) => {
        e.preventDefault()
        console.log("login triggered")
        dispatch(loginUser({ email, password }))
    }

    
    return (
        <main className={ styles.login }>
            <section className={ styles.login__intro }>
                <NavLink to="/" className="nav-link-default">
                    <h3>{ appName }</h3>
                </NavLink>
                <p>Login to your account</p>
            </section>

            
            <section className={ styles.login__loginForm }>
                <form>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={ email } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={ password } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <button type="submit" onClick={ handleLogin }>Login</button>
                    </div>
                </form>
            </section>


            <section className={ styles.login__registerRedirect }>
                <p>Don't have an account?</p>
                <NavLink to="register" className="nav-link-default">
                    <p className={ styles.registerText }>Register</p>
                </NavLink>
            </section>


            <section className={ styles.login__OrDividerContainer }>
                <p>OR</p>
            </section>


            <section className={ styles.login__googleLoginContainer }>
                <button type="submit">
                    <FcGoogle size={ 27 } />                   
                    Login with google
                </button>
            </section>


        </main>
    )
}



export default Login