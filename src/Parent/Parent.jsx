import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state = {
        products: [{
            name: "Sony Z3",
            price: "400",
            count:1,
            onSale:true
        },
        {
            name: "Sony Z2",
            price: "300",
            count:1,
            onSale:false
        }
        ]
    }

    deleteProduct=(index)=>{
        let productsCopy=this.state.products
        productsCopy.splice(index,1)
        this.setState({products:productsCopy})
    }
    render() {
        return (
            <Child delete={this.deleteProduct} products={this.state.products}></Child>
        )
    }
}
