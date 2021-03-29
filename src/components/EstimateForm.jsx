import React, {Component} from 'react';
import Item from "./item";
import {renderPDFInDOM} from "./pdfMaker";

class EstimateForm extends Component {
    state = {
        id: '',
        title: '',
        customerFirstName: '',
        customerLastName: '',
        items: {}
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('generate');
    }

    handleChange = (e, name) => {
        const value = e.currentTarget.value;
        this.setState({
            [name]: value
        });
    }

    addItem = () => {
        const id = Date.now().toString();
        const items = {...this.state.items};
        items[id] = {
            id,
            description: '',
            quantity: '1',
            taxe: 0.2,
            amount: 0,
        }
        this.setState({
            items
        });
    }

    handleItemChange = (e, item, field) => {
        console.log(e.currentTarget, item, field);
        const value = e.currentTarget.value;
        const clonedItem = {...item};
        clonedItem[field] = value;
        const clonedItems = {...this.state.items};
        clonedItems[clonedItem.id] = clonedItem;
        this.setState({
            items: clonedItems
        });
    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id" id="id" placeholder="ID" value={this.state.id} onChange={ e => this.handleChange(e, 'id') }/><br/>
                    <input type="text" name="title" id="title" placeholder="titre du devis" value={this.state.title} onChange={ e => this.handleChange(e, 'title') }/><br/>
                    <input type="text" name="customerFirstName" id="customerFirstName" placeholder="Prenom" value={this.state.customerFirstName} onChange={ e => this.handleChange(e, 'customerFirstName') }/><br/>
                    <input type="text" name="" id="customerLastName" placeholder="Nom" value={this.state.customerLastName} onChange={ e => this.handleChange(e,'customerLastName') }/><br/>
                    <button onClick={this.addItem}>ajouter une ligne</button>
                    {Object.keys(this.state.items).map( (itemId, index) => (
                        <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />
                    ))}
                    <button onClick={()=>renderPDFInDOM(JSON.stringify(this.state))}>Générer le devis</button>
                </form>
            </>
        );
    }
}

export default EstimateForm;