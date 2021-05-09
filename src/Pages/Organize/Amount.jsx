import React from 'react';

import { useHistory, useParams } from 'react-router';
import { FiArrowLeft } from "react-icons/fi";

import './Amount.css'

const Amount = ({positiveBalances, negativeBalances}) => {

    const params = useParams();
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }

    return (
        <div className="amount-container">
            <div className={params.amount >= 0 ? 'positive-amount-container' : 'negative-amount-container'}>
                <div className="itens-amount">
                    <div>
                        <p className={params.amount >= 0 ? 'positive-us-params' : 'negative-us-params'}>U$</p>
                        <p className="params-amount">{params.amount}</p>
                    </div>
                    <div>
                        <FiArrowLeft className="arrow-icon" onClick={handleBackButton} />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}
 
export default Amount;