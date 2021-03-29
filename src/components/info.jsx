import React from 'react';

const Info = (props) => {
    return (
        <div>
            <h2>Générateur de devis</h2>
            <div>
                <button onClick={props.onHandleShowEstimateForm}>Nouveau devis</button>
            </div>
        </div>
    );
}

export default Info;
