import "./SearchWidget.css";

const SearchWidget = () => {
  return (
    <div className="widget widget-search">
      <form className="search-wrapper">
        <input type="text" name="s" placeholder="Search..." />
        <button type="submit">
          <i className="icofont-search-2 icofont"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;
