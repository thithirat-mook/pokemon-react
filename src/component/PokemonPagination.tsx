interface IPokemonPaginationTextProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const PokemonPaginationText = ({
  disabled = false,
  text,
  onClick,
}: IPokemonPaginationTextProps) => {
  return (
    <span
      className={`px-3 py-2 font-roboto rounded border ${
        disabled
          ? "cursor-not-allowed border-[#64748b] text-[#64748b]"
          : "cursor-pointer border-primary text-primary"
      }`}
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
  page,
}: IPokemonPaginationProps) => {
  return (
    <div className="flex justify-between items-center py-2 mb-4">
      <PokemonPaginationText
        text="Previous 12"
        onClick={handlePrevious}
        disabled={page === 1}
      />
      <span>Page {page}</span>
      <PokemonPaginationText text="Next 12" onClick={handleNext} />
    </div>
  );
};

export default PokemonPagination;
