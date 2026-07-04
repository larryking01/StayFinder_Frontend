import styles from './toast.module.scss'
import { X, Check, CircleCheckBig } from 'lucide-react'









const Toast = () => {


    let type = "success"



    return (
        <main className={ `${ styles.toast } ${ styles[`toast--${ type }`]} `}>


            <section className={ `${ styles.toast__iconWrapper } ${ styles[`toast__iconWrapper--${ type }`]}`}>
                <Check />
            </section>

            <section className={ styles.toast__content }>
                <h3>Success</h3>
                <p>You can access all the files in this folder.</p>
            </section>

            <section className={ styles.toast__closeWrapper }>
                <X />
            </section>
        </main>
    )
}




export default Toast