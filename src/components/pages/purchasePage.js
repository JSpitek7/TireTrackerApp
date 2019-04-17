import React, { Component } from 'react';
import TirePurchase from '../tirePurchase.js'

class PurchasePage extends Component {
    render() {
        return(
            <div className='userPage'>
                <TirePurchase/>
            </div>
        )
    }
}

export default PurchasePage;