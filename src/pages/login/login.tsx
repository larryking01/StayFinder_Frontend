import styles from './login.module.scss'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { selectAppName } from '../../store/features/hotelSlice/hotel.selectors';
import { loginUser } from '../../store/features/userSlice/user.thunks';
import { useState } from 'react'








const Login = () => {


    const appName = useAppSelector( selectAppName )
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()



    const handleLogin = async (e: React.SubmitEvent) => {
        try {
            e.preventDefault()
            const from = location.state?.from
            await dispatch(loginUser({ email, password })).unwrap()

            if(from) {
                navigate(`${ from.pathname }${ from.search }${ from.hash }`, { replace: true })
            }
            else {
                navigate("/")
            }
        }
        catch(error) {
            alert("Hmm, we couldn't sign you in. We couldn't verify your email and password. Please check your details and try again.")
        }
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
                <form onSubmit={ handleLogin }>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={ email } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={ password } />
                    </div>

                    <div className={ styles.inputContainer }>
                        <button type="submit">Login</button>
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