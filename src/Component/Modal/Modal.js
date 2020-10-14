import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
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

export default Modal;
