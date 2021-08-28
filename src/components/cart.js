import React from 'react';

function Cart(props) {
    const {
        cartItems,
        handleRemoveFromCart,
        handleOrderTotal,
        show,
        onClose
    } = props;
    let content;

    const checkEmptyArr = (arrItems) => { // checks if this.state.cartItems is empty
        if (typeof arrItems !== 'object') {
            return true;
        };
    };

    if (cartItems.every(checkEmptyArr)) { // different stuff is rendered if this.state.cartItems is empty
        content = 
            <div  id='myModal' className='modal' onClick={onClose}>
                <h3 className='modal-content' onClick={(e) => e.stopPropagation()}>Your cart is currently empty.</h3>
            </div>
    } else {
        content = 
            <div id='myModal' onClick={onClose}>
                <div className='modal'>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <div>
                        {cartItems.map((item) => {
                            if (checkEmptyArr(item)) {
                                return null;
                            } else {
                            return (
                                <div key={item.id} className='cart-items'>
                                    <h4 className='cart-item-name'>{item.name}</h4>
                                    <img src={item.thumbnail} alt={item.name} className='cart-item-thumbnail' />
                                    <h4 className='cart-item-price'>{item.price} DP</h4>
                                    <h4 className='cart-item-quantity' >Quantity : {item.quantity}</h4>
                                    <button onClick={() => handleRemoveFromCart(item.id)} className='cart-remove-btn'>Remove from cart</button>
                                </div>
                                );
                            }
                        })} 
                        </div>
                        <div>
                            <h4>Total cost: {handleOrderTotal(cartItems)} DP</h4>
                            <button onClick={() => alert("Thank you for your purchase!")} className='checkout-btn'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

    }

    if(!show) {
        return null
    }
    return(
        <div>
            {content}
        </div>
    );

};

export default Cart;