import styles from './login.module.scss'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';










const Login = () => {

    
    return (
        <main className={ styles.login }>
            <section className={ styles.login__intro }>
                <NavLink to="/" className="nav-link-default">
                    <h3>StayFinder</h3>
                </NavLink>
                <p>Login to your account</p>
            </section>

            
            <section className={ styles.login__loginForm }>
                <form>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='E-mail' />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Password' />
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