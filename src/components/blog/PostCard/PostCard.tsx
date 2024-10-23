import Image from "next/image";
import "./PostCard.css";

const PostCard = ({
  title,
  author,
  publish_date,
  post_desc,
  comments_count,
  url,
  img,
}) => {
  return (
    <div className="post-item">
      <div className="post-inner">
        <div className="post-thumb">
          <a href="/blog-single">
            <Image src={img} alt="blog thumb rajibraj91 rajibraj" width={386} height={260}/>
          </a>
        </div>
        <div className="post-content">
          <a href="/blog-single">
            <h4>{title}</h4>
          </a>
          <div className="meta-post">
            <ul className="lab-ul">
              <li>
                <i className="icofont-ui-user icofont"></i>
                {author}
              </li>
              <li>
                <i className="icofont-calendar icofont"></i>
                {publish_date}
              </li>
            </ul>
          </div>
          <p>{post_desc}</p>
        </div>
        <div className="post-footer">
          <div className="pf-left">
            <a className="lab-btn-text" href="/blog-single">
              Read more <i className="icofont-external-link icofont"></i>
            </a>
          </div>
          <div className="pf-right">
            <i className="icofont-comment icofont"></i>
            <span className="comment-count text-center">{comments_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
