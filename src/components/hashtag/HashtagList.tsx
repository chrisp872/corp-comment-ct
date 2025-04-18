import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
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
