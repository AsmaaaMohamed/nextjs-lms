import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-item">
      <div className="product-thumb">
        <div className="pro-thumb">
          <img src="assets/images/shop/06.jpg" alt="Product Thumb" />
        </div>
        <div className="product-action-link">
          <a href="#">
            <i className="icofont-eye icofont"></i>
          </a>
          <a href="#">
            <i className="icofont-heart icofont"></i>
          </a>
          <a href="#">
            <i className="icofont-cart-alt icofont"></i>
          </a>
        </div>
      </div>
      <div className="product-content">
        <h5>
          <a href="/shop-single">Product Title Here</a>
        </h5>
        <p className="productRating">
          <span className="ratting">
            <i className="icofont-star icofont"></i>
            <i className="icofont-star icofont"></i>
            <i className="icofont-star icofont"></i>
            <i className="icofont-star icofont"></i>
            <i className="icofont-star icofont"></i>
          </span>
        </p>
        <h6>$200.00</h6>
      </div>
    </div>
  );
};

export default ProductCard;
