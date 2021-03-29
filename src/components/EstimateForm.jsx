import React, {Component} from 'react';

class EstimateForm extends Component {
    state = {
        estimateTitle: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('generate');
    }

    handleChange = e => {
        const title = e.currentTarget.value;
        this.setState({
            estimateTitle: title
        });
    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="estimate-title" id="estimate-title" placeholder="titre du devis" value={this.state.estimateTitle} onChange={ e => this.handleChange(e) }/>
                    <button type="submit">Générer le devis</button>
                </form>
            </>
        );
    }
}

export default EstimateForm;