const FeedbackStats = ({feedback}) => {
    // calculate rating
    const averageRating = feedback.reduce(()=>(<p>ave</p>))
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating : 10 </h4>
        </div>
    )
}

export default FeedbackStats
