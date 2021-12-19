import { useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {
    // calculate rating
    const {feedback}= useContext(FeedbackContext)
    
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/feedback.length
    // setAverage(av.toFixed(1).replace(/[.,]0$/, ''))
    average= average.toFixed(1).replace(/[.,]0$/, '')
    // setAverage(av)
    
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating : {isNaN(average)?0: average} </h4>
        </div>
    )
}



export default FeedbackStats
