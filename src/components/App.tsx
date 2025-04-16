import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./HashtagList";
import { useEffect, useState } from "react";
import { Feedbackitem as TFeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.startsWith("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.charAt(0).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage(
          "Failed to fetch feedback items. Please try again later."
        );
      }
      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <>
      <div className="app">
        <Footer />
        <Container
          isLoading={isLoading}
          feedBackItems={feedbackItems}
          errorMessage={errorMessage}
          handleAddToList={handleAddToList}
        />
        <HashtagList />
      </div>
    </>
  );
}

export default App;
