import styles from './reviewSummary.module.scss'









const ReviewSummary = () => {




    return (
        <main className={ styles.reviewSummary }>
            <p className={ styles.averageRating }>8.7</p>
            <p>Very good</p>
            <p>21 reviews</p>
        </main>
    )
}



export default ReviewSummary