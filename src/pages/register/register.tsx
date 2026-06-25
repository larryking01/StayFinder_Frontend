import styles from './register.module.scss'












const Register = () => {

    
    return (
        <main className={ styles.register }>
            <section className={ styles.register__intro }>
                <h3>StayFinder</h3>
                <p>Create your free account</p>
            </section>

            
            <section className={ styles.register__registerForm }>
                <form>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='First name' />
                    </div>

                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder='Last name' />
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


            <section className={ styles.register__googleLoginContainer }>
                <button type="submit">Login with google</button>
            </section>


            <section className={ styles.register__loginRedirect }>
                <p>Have an account?</p>
                <p className={ styles.loginText }>Login</p>
            </section>

        </main>
    )
}



export default Register