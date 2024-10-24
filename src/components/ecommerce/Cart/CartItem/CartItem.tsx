import "./CartItem.css";

const CartItem = () => {
  return (
    <tr>
      <td className="product-item cat-product">
        <div className="p-thumb">
          <a href="/shop-single">
            <img src="assets/images/shop/01.jpg" alt="Product Thumb" />
          </a>
        </div>
        <div className="p-content">
          <a href="/shop-single">Product Text Here</a>
        </div>
      </td>
      <td className="cat-price">$250</td>
      <td className="cat-quantity">
        <div className="cart-plus-minus">
          <div className="dec qtybutton">-</div>
          <input
            className="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            value="3"
          />
          <div className="inc qtybutton">+</div>
        </div>
      </td>
      <td className="cat-toprice">$750</td>
      <td className="cat-edit">
        <a href="#">
          <img src="assets/images/shop/del.png" alt="Remove Thumb" />
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
