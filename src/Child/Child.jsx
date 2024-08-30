import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div className="container row">
        {this.props.products.map((p,i)=>{
        return <div key={i} className='col-md-4'>
            <div className='item bg-dark text-white text-center p-4 rounded position-relative'>
                <h3>{p.name}</h3>
                <h3>{p.price}</h3>
                <h3>{p.count}</h3>
                { p.onSale ? 
                <span className='sale position-absolute top-0 end-0 bg-danger text-white rounded-circle p-3 fs-5'>
                  Sale
                </span> : ''
                }
                <button className='btn btn-outline-danger w-100' onClick={()=>{this.props.delete(i)}}>Delete</button>
                
            </div>
        </div>
      })}
      </div>
    )
  }
}
