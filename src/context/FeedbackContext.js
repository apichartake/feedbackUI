import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const deleteFeedback = (id) => {
    if (window.confirm("Are you delete?")) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const updateFeedback = (id,newUpdate)=>{
    console.log(id,newUpdate)
    setFeedback(feedback.map((val)=>(val.id===id?{...val,...newUpdate}:val)))
  }

  const [feedback, setFeedback] = useState([
    { id: 1, text: "feedback from context API state, id=1", rating: 6 },
    { id: 2, text: "feedback from context API state, id=2", rating: 8 },
    { id: 3, text: "feedback from context API state, id=3", rating: 10 },
  ]);
  const [feedbackEdit,setFeedbackEdit]= useState({
    item:{},
    edit:false
  })
  const editFeedback = (item)=>{
     setFeedbackEdit({
       item:item,
       edit:true
     })
  }
  // const editFeedbackForm = ()=>{

  // }
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback ,addFeedback,editFeedback,feedbackEdit,updateFeedback,setFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
