import styles from './reviewCard.module.scss'
import cover1 from '../../assets/images/hero_3.jpg'










const ReviewCard = () => {


    return (
        <article className={ styles.reviewCard }>
            <section className={ styles.authorInfo }>
                <div className={ styles.profile }>
                    <img src={ cover1 } />
                    <div className={ styles.authorNameAndCountry }>
                        <p className={ styles.authorName }>Larry</p>
                        <p className={ styles.authorCountry }>Canada</p>
                    </div>
                </div>

                <div className={ styles.timeAgo }>
                    <p>3 weeks ago</p>
                </div>
            </section>


            <section className={ styles.reviewContent }>
                <p className={ styles.reviewBody  }>
                    Beautiful property, clean, comfortable, and well equipped. The kitchen was functional and had 
                    everything we needed for our stay. One of the best surprises was realizing that the 
                    balcony had a view of the CN Tower, which was a huge bonus and made...                                
                </p>

                <p className={ styles.readMore }>Read more</p>
            </section>
        </article>
    )
}


export default ReviewCard