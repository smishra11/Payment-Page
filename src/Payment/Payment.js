import React, { Component } from 'react';
import './Payment.css';

class Payment extends Component {
  state = {
    input1: 0,
    input2: 0,
    totalAmount: 0,
  };

  input1Changed = (e) => {
    e.preventDefault();
    this.setState({
      input1: e.target.value,
      totalAmount: parseInt(this.state.input1) + parseInt(this.state.input2),
    });
    console.log(this.state.input1);
  };
  input2Changed = (e) => {
    e.preventDefault();
    this.setState({
      input2: e.target.value,
      totalAmount: parseInt(this.state.input1) + parseInt(this.state.input2),
    });
  };

  paymentProceed = () => {
    console.log('clicked');
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
                        placeholder="100"
                        onInput={this.input1Changed}
                      />
                    </span>
                    <p className="item-name">Product 1</p>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className="item">
                    <span className="price">
                      ₹{' '}
                      <input
                        type="number"
                        placeholder="120"
                        onInput={this.input2Changed}
                      />
                    </span>
                    <p className="item-name">Product 2</p>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className="total">
                    Total
                    <span className="price">₹ {this.state.totalAmount}</span>
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

        {/* Modal JSX */}
        <div id="myModal" className="modal fade">
          <div className="modal-dialog modal-confirm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="icon-box">
                  <i className="material-icons">&#xE876;</i>
                </div>
                <h4 className="modal-title">Awesome!</h4>
              </div>
              <div className="modal-body">
                <p className="text-center">
                  Your booking has been confirmed. Check your email for detials.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success btn-block"
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
