import { createContext, useState,useEffect } from "react";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit,setFeedbackEdit]= useState({
    item:{},
    edit:false
  })
  const deleteFeedback =async (id) => {
    if (window.confirm("Are you delete?")) {
      await fetch(`feedback/${id}`,{method:'DELETE'})
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  const addFeedback = async(newFeedback) => {
    const res = await fetch('feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newFeedback)
    })
    const data =await res.json()
    setFeedback([data,...feedback])
  };
  const updateFeedback =async (id,newUpdate)=>{
    const res = await fetch(`feedback/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newUpdate)
    })
    const data =await res.json()
    setFeedback(feedback.map((val)=>(val.id===id?{...val,...data}:val)))
  }

  
  useEffect(()=>{
    fetchFeedback()
  },[])
  const fetchFeedback = async()=>{
    const response = await fetch('/feedback?_sort=id&_order=desc')
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
      { feedback,isLoading,feedbackEdit,
         deleteFeedback 
      ,addFeedback,editFeedback,
      updateFeedback,setFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
