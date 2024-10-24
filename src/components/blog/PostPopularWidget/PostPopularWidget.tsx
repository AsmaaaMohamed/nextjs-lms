import "./PostPopularWidget.css";
const PostPopularWidget = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">Most Popular Post</h5>
      </div>
      <ul className="widget-wrapper">
        <li className="d-flex flex-wrap justify-content-between">
          <div className="post-thumb">
            <a href="/blog-single">
              <img src="assets/images/blog/01.jpg" alt="rajibraj91" />
            </a>
          </div>
          <div className="post-content">
            <a href="/blog-single">
              <h6>Poor People’s Campaign Our Resources</h6>
            </a>
            <p>Jun 05,2022</p>
          </div>
        </li>
        <li className="d-flex flex-wrap justify-content-between">
          <div className="post-thumb">
            <a href="/blog-single">
              <img src="assets/images/blog/02.jpg" alt="rajibraj91" />
            </a>
          </div>
          <div className="post-content">
            <a href="/blog-single">
              <h6>Poor People’s Campaign Our Resources</h6>
            </a>
            <p>Jun 05,2022</p>
          </div>
        </li>
        <li className="d-flex flex-wrap justify-content-between">
          <div className="post-thumb">
            <a href="/blog-single">
              <img src="assets/images/blog/03.jpg" alt="rajibraj91" />
            </a>
          </div>
          <div className="post-content">
            <a href="/blog-single">
              <h6>Poor People’s Campaign Our Resources</h6>
            </a>
            <p>Jun 05,2022</p>
          </div>
        </li>
        <li className="d-flex flex-wrap justify-content-between">
          <div className="post-thumb">
            <a href="/blog-single">
              <img src="assets/images/blog/04.jpg" alt="rajibraj91" />
            </a>
          </div>
          <div className="post-content">
            <a href="/blog-single">
              <h6>Poor People’s Campaign Our Resources</h6>
            </a>
            <p>Jun 05,2022</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PostPopularWidget;
