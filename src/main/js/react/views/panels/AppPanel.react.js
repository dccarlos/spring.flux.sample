/**
 * Created by 'Carlos Dávila-Cordero'
 */

'use strict';

import React from 'react';
import {Panel, Button} from 'react-bootstrap';

import {getOneEntity} from '../../../rest/AppRestClient';

let AppPanel = (function () {
    return class AppPanel extends React.Component {
        constructor(props) {
            super(props);

            this.state = {response: ''};

            this.onClickShowLoginModal = this.onClickShowLoginModal.bind(this);
            this.onClickExecuteGet = this.onClickExecuteGet.bind(this);
        }

        onClickShowLoginModal() {
            // React + Flux component state
            this.props.context.showLoginModal(true);
        }

        onClickExecuteGet() {
            // React component state
            getOneEntity().then(resp => {
                this.setState({
                    response: resp
                });
            });
        }

        render() {
            return (
                <div>
                    <Panel>
                        <Button onClick={this.onClickShowLoginModal}>
                            Show login modal
                        </Button>
                        <Button onClick={this.onClickExecuteGet}>
                            {this.state.response ? 'Response obtained: ' + JSON.stringify(this.state.response) : 'Click to request an entity'}
                        </Button>
                    </Panel>
                </div>
            );
        }
    }
}());

export default AppPanel;