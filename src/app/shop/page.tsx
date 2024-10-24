import { Fragment } from "react";
import "./Shop.css";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import SearchWidget from "@/components/common/SearchWidget/SearchWidget";
import PostPopularWidget from "@/components/blog/PostPopularWidget/PostPopularWidget";
import PopularTagWidget from "@/components/blog/Tag/PopularTagWidget";
import ProductCategoryWidget from "@/components/ecommerce/Product/ProductCategoryWidget/ProductCategoryWidget";
import ProductCard from "@/components/ecommerce/Product/ProductCard/ProductCard";

const ShopPage = () => {
  return (
    <Fragment>
      <PageHeader />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>Showing 01 - 12 of 139 Results</p>
                  <div className="product-view-mode gridActive">
                    <a className="grid">
                      <i className="icofont-ghost icofont"></i>
                    </a>
                    <a className="list">
                      <i className="icofont-listine-dots icofont"></i>
                    </a>
                  </div>
                </div>
                <div className="shop-product-wrap row justify-content-center grid">
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <ProductCard />
                  </div>
                </div>
                {/* <ul className="default-pagination lab-ul">
                                <li><a href="#"><i className="icofont-rounded-left"></i></a></li>
                                <li><a href="#">01</a></li><li><a href="#" className="active">02</a></li>
                                <li><a href="#">03</a></li><li><a href="#"><i className="icofont-rounded-right"></i></a></li>
                            </ul> */}
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <SearchWidget />
                <ProductCategoryWidget />
                <PostPopularWidget />
                <PopularTagWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
