import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";

import FeedbackData from "./data/feedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you delete?")) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
