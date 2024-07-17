interface IPokemonPaginationTextProps {
  text: string;
  onClick: () => void;
}

const PokemonPaginationText = ({
  text,
  onClick,
}: IPokemonPaginationTextProps) => {
  return (
    <span
      className="px-3 py-2 text-primary font-roboto cursor-pointer"
      onClick={onClick}
    >
      {text}
    </span>
  );
};

interface IPokemonPaginationProps {
  handleNext: () => void;
  handlePrevious: () => void;
  page: number;
}

const PokemonPagination = ({
  handleNext,
  handlePrevious,
  page
}: IPokemonPaginationProps) => {
  return (
    <div className="flex justify-between items-center py-2 mb-4">
      <PokemonPaginationText text="Previous 12" onClick={handlePrevious} />
      <span>Page {page}</span>
      <PokemonPaginationText text="Next 12" onClick={handleNext} />
    </div>
  );
};

export default PokemonPagination;
