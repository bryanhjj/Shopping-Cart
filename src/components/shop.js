import React from 'react';
import { Link } from 'react-router-dom';

function Shop(props) {
    const {
        items,
        handleAddToCart,
        handleQtyChange
    } = props;

    const navStyle = {
        color: 'white'
    };

    return (
        <div>
            <div className='banner-container'>
                <img src='https://bo2.ggame.jp/en/images/items/tit_ctg.png' alt='items'></img>
            </div>
            <div className='shop-container'>
                {items.map((item) => {
                    return(
                        <div key={item.id} className='item-container'>
                            <h3>
                                <Link to={`/shop/${item.id}`} style={navStyle} className='item-name'>{item.name}</Link>
                            </h3>
                            <img src={item.thumbnail} alt={item.name} />
                            <h4>{item.price} DP</h4>
                            <label htmlFor={item.name}>Quantity : </label>
                            <input 
                                type='number' 
                                id={item.id} 
                                name={item.name}
                                max={item.quantity} 
                                min='1' 
                                step='1' 
                                onChange={(e) => handleQtyChange(e)} 
                            />
                            <h4>(Amount in stock : {item.quantity} )</h4>
                            <br />
                            <input 
                                className='add-button'
                                type='submit' 
                                value='Add to cart' 
                                onClick={() => handleAddToCart(item)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;