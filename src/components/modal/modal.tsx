import styles from './modal.module.scss'
import { Trash } from 'lucide-react'







const Modal = () => {


    let type = 'info';




    return (
        <main className={ styles.modal }>
            <article className={ styles.modal__container }>
                <section className={ `${ styles.iconWrapper } 
                         ${type === 'delete' ? styles['iconWrapper--delete'] : 
                           type === 'success' ? styles['iconWrapper--success'] : 
                           styles['iconWrapper--info']}` 
                         }>
                    <Trash />
                </section>

                <section className={ styles.titleWrapper }>
                    <h3>Are you sure you want to delete this folder?</h3>
                </section>

                <section className={ styles.bodyWrapper }>
                    <p>This action cannot be undone</p>
                </section>

                <section className={ styles.actionsWrapper }>
                    <button type="button" className={ `${ styles.confirmBtn } 
                                          ${ type === 'delete' ? styles['confirmBtn--delete'] : 
                                             type === 'success' ? styles['confirmBtn--success'] :
                                             styles['confirmBtn--info'] } `
                                        }>
                        Yes
                    </button>

                    <button type="button" className={ styles.cancelBtn }>Cancel</button>
                </section>
            </article>
        </main>
    )
}




export default Modal