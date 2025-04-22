import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const companyList = useFeedbackItemsStore(
    (state) => state.getCompanyList()
  );
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          onSelectCompany={handleSelectCompany}
          company={company}
        />
      ))}
    </ul>
  );
}
