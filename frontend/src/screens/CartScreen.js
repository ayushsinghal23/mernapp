import './CartScreen.css';
import CartItem from '../components/Cartitem';
const CartScreen = () => {
    return (
        <div className="cartscreen">
           <div class="cartscreen__left">
               <h2>Shopping Cart</h2>

               <CartItem/>
               <CartItem/>
               <CartItem/>
               <CartItem/>

           </div>
           <div class="cartscreen__right">
               <div className="cartScreen__info">
                   <p>Subtotal (0) items</p>
                   <p>$499.99</p>
               </div>
               <div>
                   <button>Proceed to Checkout
                   </button>
               </div>
           </div>
        </div>
    )
}

export default CartScreen
