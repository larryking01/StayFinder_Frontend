import styles from './support.module.scss'
import { Search, ChevronRight } from 'lucide-react'
import { supportItems } from '../../data/supportItems'










const Support = () => {

    
    return (
        <main className={ styles.support }>
            <section className={ styles.support__intro }>
                <h3>Help Centre</h3>
                <p>Hi, Traveller</p>
            </section>


            <section className={ styles.support__searchSupport }>
                <div className={ styles.inputWrapper }>
                    <input type="text" placeholder="How can we help?" />
                    <Search size={ 22 } className={ styles.icon }/>
                </div>
                <button type="button" >Search</button>
            </section>


            <section className={ styles.support__supportArticles }>
                <h3>Explore help articles</h3>
                <div className={ styles.supportsGrid }>
                    {
                        supportItems.map(item => {
                            let Icon = item.icon 

                            return (
                                <div className={ styles.supportItem }>
                                    <div className={ styles.supportNameAndIcon }>
                                        <Icon className={ styles.icon } size={ 22 }/>
                                        <p>{ item.name }</p>
                                    </div>
                                    <ChevronRight size={ 25 } />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}



export default Support