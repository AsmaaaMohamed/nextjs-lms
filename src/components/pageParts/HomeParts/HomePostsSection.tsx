import PostCard from "@/components/blog/PostCard/PostCard";
import { getCachedPosts } from "@/server/db/cached";

const HomePostsSection = async() => {
    const posts =await getCachedPosts();
    // console.log(posts)
  const renderedPosts = posts.slice(0, 3).map((p) => {
    return (
      <div key={p.id} className="col">
        <PostCard {...p} />
      </div>
    );
  });
  return (
    <div className="blog-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">FORM OUR BLOG POSTS</span>
          <h2 className="title">More Articles From Resource Library</h2>
        </div>
        <div className="section-wrapper">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
            {renderedPosts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePostsSection;
