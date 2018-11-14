import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Memenaitor from './memenaitor';

export class MemenaitorContainer extends Component {
    render() {
        return (
            <Fragment>
                <Memenaitor {...this.props}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    selectedElement: state.selectedElement,
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemenaitorContainer);
