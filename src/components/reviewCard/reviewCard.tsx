import styles from './reviewCard.module.scss'
import cover1 from '../../assets/images/hero_3.jpg'
import type { ReviewCardProp } from '../../types/componentProps/reviewCardProps'









const ReviewCard = ({ review } : ReviewCardProp) => {


    return (
        <article className={ styles.reviewCard }>
            <section className={ styles.authorInfo }>
                <div className={ styles.profile }>
                    <img src={ cover1 } />
                    <div className={ styles.authorNameAndCountry }>
                        <p className={ styles.authorName }>{ review.userName }</p>
                        <p className={ styles.authorCountry }>Canada</p>
                    </div>
                </div>

                <div className={ styles.timeAgo }>
                    <p>{ review.createdAt.split('T')[0] }</p>
                </div>
            </section>


            <section className={ styles.reviewContent }>
                <p className={ styles.reviewBody  }> { review.reviewContent.slice(0, 300) }... </p>

                <p className={ styles.readMore }>Read more</p>
            </section>
        </article>
    )
}


export default ReviewCard