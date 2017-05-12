/**
 * Created by 'Carlos Dávila-Cordero'
 */

'use strict';

import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import {Button} from 'react-bootstrap';

import AppLoginModal from './modals/AppLoginModal.react';
import AppPanel from './panels/AppPanel.react';

function AppMain(props) {
    return (
        <div>
            <AppPanel context={props}/>
            <AppLoginModal context={props}/>
        </div>
    );
}

export default AppMain;