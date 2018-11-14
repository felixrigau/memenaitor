import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import { updateLocation, updateSelectedElement } from '../../actions';

class CanvasContainer extends Component {
    render() {
        return (
            <Fragment>
                <Canvas {...this.props}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    textList: state.texts.list,
});

const mapDispatchToProps = {
    updateLocation,
    updateSelectedElement,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CanvasContainer);
