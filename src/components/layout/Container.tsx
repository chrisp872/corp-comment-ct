import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";
import { TFeedbackItem } from "../../lib/types";

type ContainerProps = {
  isLoading: boolean;
  feedBackItems: TFeedbackItem[];
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  isLoading,
  feedBackItems,
  errorMessage,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedBackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
