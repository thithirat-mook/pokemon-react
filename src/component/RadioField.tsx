import { SortByEnum } from "../type/main";

interface IRadioFieldProps {
  text: string;
  name: SortByEnum;
  sortBy: SortByEnum;
  setSortBy: React.Dispatch<React.SetStateAction<SortByEnum>>;
}

const RadioField = ({ text, name, sortBy, setSortBy }: IRadioFieldProps) => {
  const isChecked = sortBy === name;
  return (
    <div className="cursor-pointer flex items-center gap-2 p-2 pr-4" onClick={() => setSortBy(name)}>
      <input readOnly type="radio" className="h-5 w-5 accent-primary" checked={isChecked} />
      <label className="cursor-pointer font-roboto border-neutral-shades-30 text-xl">{text}</label>
    </div>
  );
};

export default RadioField;
