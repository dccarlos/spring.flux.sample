/**
 * Created by 'Carlos Dávila-Cordero'
 */

'use strict';

import React from 'react';
import {FormGroup, ControlLabel, FormControl, Modal, Button} from 'react-bootstrap';

import {isValidUserName, isValidPassword} from '../../../util/AppUtils';

let AppLoginModal = (function () {

    // Username text field
    let UserNameTextForm = (function () {
        return class UserNameTextForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {userName: ''};
                this.handleUserNameChange = this.handleUserNameChange.bind(this);
            }

            getLoginUserNameValidationState() {
                if (isValidUserName(this.state.userName)) return 'success';
                else return 'error';
            }

            handleUserNameChange(e) {
                this.setState({
                    userName: e.target.value
                });
            }

            render() {
                return (
                    <div>
                        <FormGroup validationState={this.getLoginUserNameValidationState()}>
                            <ControlLabel>User name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.userName}
                                placeholder="Enter username"
                                onChange={this.handleUserNameChange}/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                );
            }
        }
    }());

    // Password text field
    let PasswordTextForm = (function () {
        return class PasswordTextForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {password: ''};
                this.handlePasswordChange = this.handlePasswordChange.bind(this);
            }

            getPasswordValidationState() {
                if (isValidPassword(this.state.password)) return 'success';
                else return 'error';
            }

            handlePasswordChange(e) {
                this.setState({
                    password: e.target.value
                });
            }

            render() {
                return (
                    <div>
                        <FormGroup validationState={this.getPasswordValidationState()}>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handlePasswordChange}/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                );
            }
        }
    }());

    return class AppLoginModal extends React.Component {
        constructor(props) {
            super(props);
            this.onClickCloseLoginModal = this.onClickCloseLoginModal.bind(this);
        }

        onClickCloseLoginModal() {
            // Trigger the state change!
            this.props.context.showLoginModal(false);
        }

        render() {
            return (
                <Modal
                    show={this.props.context.appState.showLoginModal}>
                    <Modal.Header>
                        <Modal.Title>Sample Login Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <UserNameTextForm ref="UserNameTextForm"/>
                            <PasswordTextForm ref="PasswordTextForm"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClickCloseLoginModal}>Close login modal</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    }
}());

export default AppLoginModal;