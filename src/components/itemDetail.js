import React, { useEffect } from 'react';

function ItemDetail(props) {
    const { 
        items,
        handleAddToCart,
        handleQtyChange
     } = props;

    /* for troubleshooting purposes
    useEffect(() => {
        console.log(props);
        console.log(items);
        console.log(props.match.params.id)
    });
    */

    const findTargetInd = (id) => { // returns the index for this.state.items (via item.id)
        return items.findIndex((item) => item.id === id);
    }

    // items are rendered according to the index obtained in line18 (itemDetail.js)
    return (
        <div>
            <div className='item-detail-container'>
                <div className='full-size-img-container'>
                    <h3 className='img-item-name'>{items[findTargetInd(props.match.params.id)].name}</h3>
                    <img 
                    src={items[findTargetInd(props.match.params.id)].fullImg} 
                    alt={items[findTargetInd(props.match.params.id)].name} 
                    className='full-img'
                    />
                </div>

                <div className='details-content'>
                    <h2 className='item-title'>{items[findTargetInd(props.match.params.id)].name}</h2>
                    <br/>
                    <table className='item-table'>
                        <tr>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>{items[findTargetInd(props.match.params.id)].description}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='mini-shop'>
                <label htmlFor={items[findTargetInd(props.match.params.id)].name}>Quantity : </label>
                <input 
                    type='number' 
                    id={items[findTargetInd(props.match.params.id)].id} 
                    name={items[findTargetInd(props.match.params.id)].name}
                    max={items[findTargetInd(props.match.params.id)].quantity} 
                    min='1' 
                    step='1' 
                    onChange={(e) => handleQtyChange(e)} 
                />
                <p>({items[findTargetInd(props.match.params.id)].quantity} in stock)</p>
                <h3>Price : {items[findTargetInd(props.match.params.id)].price} DP</h3>
                <input 
                    className='add-button'
                    type='submit' 
                    value='Add to cart' 
                    onClick={() => handleAddToCart(items[findTargetInd(props.match.params.id)])}
                />
            </div>
        </div>
    );
};


export default ItemDetail;