import React from 'react';

import { useHistory, useParams } from 'react-router';
import { FiArrowLeft } from "react-icons/fi";

import './Amount.css'

const Amount = ({}) => {

    const params = useParams();
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }

    return (
            <div className={params.amount >= 0 ? 'positive-amount-container' : 'negative-amount-container'}>
                <div className="itens-amount">
                    <div className="amount-and-description">
                        <div className="params-amount">
                            <p className={params.amount >= 0 ? 'positive-us-params' : 'negative-us-params'}>U$</p>
                            <p className="params-amount">{params.amount}</p>
                        </div>
                        <div className="params-description">
                            <p>{params.description}</p>
                        </div>                       
                    </div>
                    <div>
                        <FiArrowLeft className="arrow-icon" onClick={handleBackButton} />
                    </div> 
                </div>
            </div>
    );
}
 
export default Amount;