import "./PostCategoryWidget.css";

const PostCategorWidget = () => {
  return (
    <div className="widget widget-category">
      <div className="widget-header">
        <h5 className="title">Post Category</h5>
      </div>
      <ul className="widget-wrapper">
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>Themeforest
            </span>
            <span>06</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>Photodune
            </span>
            <span>11</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>Codecanyon
            </span>
            <span>07</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>GRaphicdriver
            </span>
            <span>09</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>Wordpress
            </span>
            <span>50</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>Joomla
            </span>
            <span>20</span>
          </a>
        </li>
        <li>
          <a href="#" className="d-flex flex-wrap justify-content-between">
            <span>
              <i className="icofont-double-right icofont"></i>3docean
            </span>
            <span>93</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostCategorWidget;
