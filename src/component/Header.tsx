import { SortByEnum } from "../type/main";
import RadioField from "./RadioField";

interface IHeaderProps {
  sortBy: SortByEnum;
  setSortBy: React.Dispatch<React.SetStateAction<SortByEnum>>;
}

const Header = ({ sortBy, setSortBy }: IHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-12">
      <h1 className="font-encode text-[32px]">All the Pokemon!</h1>
      <div className="flex items-center">
        <RadioField
          text="Sort Name"
          name={SortByEnum.name}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <RadioField
          text="Sort ID"
          name={SortByEnum.id}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </div>
  );
};

export default Header;
