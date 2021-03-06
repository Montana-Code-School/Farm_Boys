import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import LoginContainer from "./loginContainer.js";
import "../styles/modalContainer.css";

export default class LoginButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.resetModal}>Login</Button>
        {this.props.display ? (
          <div className="modal">
            <Modal
              bsSize="small"
              show={this.props.display}
              onHide={() => {
                this.props.resetModal();
              }}
            >
              <Modal.Body>
                <LoginContainer {...this.props} />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => {
                    this.props.resetModal();
                  }}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
