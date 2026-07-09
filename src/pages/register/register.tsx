import styles from './register.module.scss'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';












const Register = () => {

    
    return (
        <main className={ styles.register }>
            <section className={ styles.register__intro }>
                <NavLink to="/" className="nav-link-default">
                    <h3>StayFinder</h3>
                </NavLink>
                <p>Create your free account</p>
            </section>

            
            <section className={ styles.register__registerForm }>
                <form>
                    <div className={ styles.nameContainer }>
                        <div className={ styles.inputContainer }>
                            <input type="text" placeholder='First name' />
                        </div>

                        <div className={ styles.inputContainer }>
                            <input type="text" placeholder='Last name' />
                        </div>
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='E-mail' />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Password' />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Confirm password' />
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