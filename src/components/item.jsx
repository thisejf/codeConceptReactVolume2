import React from 'react';

const Item = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" name="description" value={props.item.description} onChange={ e => props.onItemChange(e, props.item, "description")}/>
                    </div>
                    <div className="col">
                        <input type="number" name="quantity" value={props.item.quantity} onChange={ e => props.onItemChange(e, props.item, "quantity")}/>
                    </div>
                    <div className="col">
                        <input type="text" name="taxe" value={props.item.taxe} onChange={ e => props.onItemChange(e, props.item, "taxe")}/>
                    </div>
                    <div className="col">
                        <input type="text" name="amount" value={props.item.amount} onChange={ e => props.onItemChange(e, props.item, "amount")}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;