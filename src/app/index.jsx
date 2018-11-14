import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import MemenaitorContainer from '../components/memenaitor/memenaitorContainer';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <MemenaitorContainer />
                </Provider>
            </Fragment>
        );
    }
}
