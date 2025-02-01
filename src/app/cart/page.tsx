import { Fragment } from "react";
import "./Cart.css";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import CartItem from "@/components/ecommerce/Cart/CartItem/CartItem";

const CartPage = () => {
  return (
    <Fragment>
      <PageHeader pageTitle="Cart/>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon" action="/">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout" action="/">
                  <input type="submit" value="Update Cart" />
                  <input type="submit" value="Proceed to Checkout" />
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="volvo">United Kingdom (UK)</option>
                          <option value="saab">Bangladesh</option>
                          <option value="saab">Pakisthan</option>
                          <option value="saab">India</option>
                          <option value="saab">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down icofont"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="volvo">State/Country</option>
                          <option value="saab">Dhaka</option>
                          <option value="saab">Benkok</option>
                          <option value="saab">Kolkata</option>
                          <option value="saab">Kapasia</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down icofont"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Total</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ 0.00</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">$ 2940.00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
