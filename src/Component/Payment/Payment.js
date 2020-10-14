import React, { Component } from 'react';
import './Payment.css';

import axios from 'axios';
import Modal from '../Modal/Modal';

class Payment extends Component {
  state = {
    inputAmount: 0,
    payment_id: '',
  };

  inputChanged = (e) => {
    this.setState({
      inputAmount: e.target.value,
    });
  };

  requestRazorpay = () => {
    let options = {
      key: 'rzp_test_MzdlZzUgWM61A9',
      amount: parseInt(this.state.inputAmount) * 100,
      currency: 'INR',
      name: 'Subhasish',
      description: 'Testing',
      prefill: {
        name: 'Subhasish',
        email: 'test@gmail.com',
        contact: '9999999999',
      },
      image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
      handler: function (response) {
        console.log(response);
        alert(response.razorpay_payment_id);
      },
      notes: {
        address: 'any',
      },
      theme: {
        color: 'lightblue',
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log(rzp1);
  };

  paymentProceed = () => {
    this.requestRazorpay();
  };

  render() {
    return (
      <div>
        <main className="page payment-page">
          <section className="payment-form dark">
            <div className="container">
              <div className="block-heading">
                <h2>Payment</h2>
                <p>
                  A simple and advanced payment page by using Razorpay Gateway
                </p>
              </div>
              <form>
                <div className="products">
                  <h3 className="title">Checkout</h3>
                  <div className="item">
                    <span className="price">
                      ₹{' '}
                      <input
                        type="number"
                        placeholder="120"
                        onInput={this.inputChanged}
                      />
                    </span>
                    <p className="item-name">Total amount</p>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
                <div className="card-details">
                  <h3 className="title">Initialize Payment</h3>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={this.paymentProceed}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
        {/* Modal Component here */}
        <Modal />
      </div>
    );
  }
}

export default Payment;
