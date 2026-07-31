import styles from './reviewSummary.module.scss'
import type { ReviewSummaryProps } from '../../types/componentProps/reviewSummaryProps'












const ReviewSummary = ( { reviewSummary }: ReviewSummaryProps ) => {




    return (
        <main className={ styles.reviewSummary }>
            <p className={ styles.averageRating }>{ reviewSummary.averageRating }</p>
            <p>Very good</p>
            <p>{ reviewSummary.reviewCount } reviews</p>
        </main>
    )
}



export default ReviewSummary