import styles from './bookingFlowStepper.module.scss'
import { Check, ChevronRight } from 'lucide-react'
import { useState } from 'react'







 

export const BookingFlowStepper = () => {
    

    const [ detailsCompleted ] = useState<boolean>(false)


    return (
        <main className={ styles.bookingFlowStepper}>
            <section className={ styles.stepperItem }>
                <article className={ styles.stepperArticle }>
                    <div className={ styles.step }>
                        <Check size={ 20 } className={ styles.checkIcon }/>
                    </div>
                    <h4>Your selection</h4>
                </article>
                <ChevronRight size={ 22 } className={ styles.divider } />
            </section>

            <section className={ styles.stepperItem }>
                <article className={ styles.stepperArticle }>
                    <div className={ styles.step }>
                        { 
                            detailsCompleted ? 
                                <Check size={ 20 } className={ styles.checkIcon }/>
                                :
                                <p>2</p>
                        }
                    </div>
                    <h4>Your details</h4>
                </article>
                <ChevronRight size={ 22 } className={ styles.divider } />
            </section>

            <section className={ styles.stepperItem }>
                <article className={ styles.stepperArticle }>
                    <div className={ styles.step }>
                        { 
                            detailsCompleted ? 
                                <Check size={ 20 } className={ styles.stepIcon }/>
                                :
                                <p>3</p>
                        }
                    </div>
                    <h4>Finish booking</h4>
                </article>
            </section>
        </main>
    )

}
 