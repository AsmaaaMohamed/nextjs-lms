import ArchiveWidget from "@/components/blog/ArchiveWidget/ArchiveWidget";
import GalleryWidget from "@/components/blog/GalleryWidget/GalleryWidget";
import PostCard from "@/components/blog/PostCard/PostCard";
import PostCategorWidget from "@/components/blog/PostCategoryWidget/PostCategoryWidget";
import PostPopularWidget from "@/components/blog/PostPopularWidget/PostPopularWidget";
import PopularTagWidget from "@/components/blog/Tag/PopularTagWidget";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import SearchWidget from "@/components/common/SearchWidget/SearchWidget";
import { posts } from "@/utils/data";
import React, { Fragment } from "react";

const BlogPage = () => {
  const renderedPosts = posts.slice(0, 8).map((p) => {
    return (
      <div key={p.id} className="col">
        <PostCard {...p} />
      </div>
    );
  });
  return (
    <Fragment>
      <PageHeader />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 justify-content-center g-4">
                    {renderedPosts}
                  </div>
                  {/* <ul className="default-pagination lab-ul">
                    <li><a href="#"><i className="icofont-rounded-left"></i></a></li>
                    <li><a href="#">01</a></li>
                    <li><a href="#" className="active">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#"><i className="icofont-rounded-right"></i></a></li>
                  </ul> */}
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <SearchWidget />
                <PostCategorWidget />
                <PostPopularWidget />
                <ArchiveWidget />
                <GalleryWidget />
                <PopularTagWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
