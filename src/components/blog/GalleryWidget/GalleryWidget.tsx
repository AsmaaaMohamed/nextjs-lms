import "./GalleryWidget.css";

const GalleryWidget = () => {
  return (
    <div className="widget widget-instagram">
      <div className="widget-header">
        <h5 className="title">Gallery Photos</h5>
      </div>
      <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
        <li>
          <a href="assets/images/blog/01.jpg" target="_blank">
            <img src="assets/images/blog/01.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/02.jpg" target="_blank">
            <img src="assets/images/blog/02.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/03.jpg" target="_blank">
            <img src="assets/images/blog/03.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/04.jpg" target="_blank">
            <img src="assets/images/blog/04.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/05.jpg" target="_blank">
            <img src="assets/images/blog/05.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/06.jpg" target="_blank">
            <img src="assets/images/blog/06.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/07.jpg" target="_blank">
            <img src="assets/images/blog/07.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/08.jpg" target="_blank">
            <img src="assets/images/blog/08.jpg" alt="product" />
          </a>
        </li>
        <li>
          <a href="assets/images/blog/09.jpg" target="_blank">
            <img src="assets/images/blog/09.jpg" alt="product" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GalleryWidget;
