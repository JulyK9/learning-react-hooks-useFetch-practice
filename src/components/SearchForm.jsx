const SearchForm = ({ value, onSearch }) => {
  return (
    <form onSubmit>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
