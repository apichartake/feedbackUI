import { useState ,useContext,useEffect} from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('');
  const [rating,setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])
  const handleTextChange = (e)=>{
    if(text===''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text!==''&& text.trim().length<=10){
        setBtnDisabled(true)
        setMessage(`text must be at least 10 charactor!(${text.trim().length})`)
    }else{
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating
        }
        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
          
        }else{
          addFeedback(newFeedback)
        }
        
        setText('')
    }
  }
  // if(feedbackEdit.edit===true){
  //   setText(feedbackEdit.item.text)
  //   setRating(feedbackEdit.item.rating)
  // }

  return (
    <Card>
      <form
        onSubmit={handleOnSubmit}
      >
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="write a reviews"
            onChange={handleTextChange}
            value={text}
          />
          {/* <button type="submit">Send</button> */}
          <Button type='submit' version='secondary' isDisable={btnDisabled}>Sent</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
