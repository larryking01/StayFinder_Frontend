import styles from './reviewSummary.module.scss'
import type { ReviewSummaryProps } from '../../types/componentProps/reviewSummaryProps'












const ReviewSummary = ( { reviewSummary }: ReviewSummaryProps ) => {


    

    return (
        <main className={ styles.reviewSummary }>
            <p className={ styles.averageRating }>{ reviewSummary.averageRating }</p>
            <p>50 reviews</p>
            {/* <p>Very good</p> */}
        </main>
    )
}



export default ReviewSummary