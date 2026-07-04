import styles from './modal.module.scss'
import { Trash } from 'lucide-react'







const Modal = () => {




    return (
        <main className={ styles.modal }>
            <article className={ styles.modal__container }>
                <section className={ styles.iconWrapper }>
                    <Trash />
                </section>

                <section className={ styles.titleWrapper }>
                    <h3>Are you sure you want to delete this folder?</h3>
                </section>

                <section className={ styles.bodyWrapper }>
                    <p>This action cannot be undone</p>
                </section>

                <section className={ styles.actionsWrapper }>
                    <button type="button">Yes</button>
                    <button type="button">Cancel</button>
                </section>
            </article>
        </main>
    )
}




export default Modal