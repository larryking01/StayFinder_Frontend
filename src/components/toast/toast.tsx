import styles from './toast.module.scss'
import { X, Check, CircleCheckBig } from 'lucide-react'









const Toast = () => {


    let type = "info"



    return (
        <main className={ `${ styles.toast } 
                        ${ type === 'success' ? styles['toast--success'] :
                           type === 'error' ? styles['toast--error'] :
                           styles['toast--info']}`
                         }>


            <section className={ `${ styles.toast__iconWrapper } 
                               ${ type === 'success' ? styles['toast__iconWrapper--success'] :
                                  type === 'error' ? styles['toast__iconWrapper--error'] :
                                  styles['toast__iconWrapper--info']}` 
                        }>
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