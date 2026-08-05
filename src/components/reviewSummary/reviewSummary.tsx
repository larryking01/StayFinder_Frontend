import styles from './reviewSummary.module.scss'
import type { ReviewSummaryProps } from '../../types/componentProps/reviewSummaryProps'






const ReviewSummary = ( { reviewSummary }: ReviewSummaryProps ) => {


    

    return (
        <main className={ styles.reviewSummary }>
            <div className={ styles.ratingWrapper }>
                <p className={ styles.averageRating }>{ reviewSummary.averageRating }</p>
                <p className={ styles.ratingDescription }>Very good</p>
            </div>
            <p className={ styles.reviewsCount }> - { reviewSummary.reviewCount } reviews</p>
        </main>
    )
}



export default ReviewSummary