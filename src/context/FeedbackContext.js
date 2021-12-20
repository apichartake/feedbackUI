import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit,setFeedbackEdit]= useState({
    item:{},
    edit:false
  })
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

  
  useEffect(()=>{
    fetchFeedback()
  },[])
  const fetchFeedback = async()=>{
    const response = await fetch('http://localhost:4000/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }
  const editFeedback = (item)=>{
     setFeedbackEdit({
       item:item,
       edit:true
     })
  }
  // const editFeedbackForm = ()=>{

  // }
  return (
    <FeedbackContext.Provider value={
      { feedback, deleteFeedback ,isLoading
      ,addFeedback,editFeedback,feedbackEdit,
      updateFeedback,setFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
