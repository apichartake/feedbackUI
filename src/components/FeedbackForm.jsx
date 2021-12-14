import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('');
  const [rating,setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
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
        handleAdd(newFeedback)
        setText('')
    }
  }

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
