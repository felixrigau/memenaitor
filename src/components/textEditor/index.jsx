import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateText, updateFontSize, updateColor, updateShadowColor, updateLocation } from '../../actions';
import TextEditor from './TextEditor';

export class TextEditorContainer extends Component {
    render() {
        return (
            <Fragment>
                <TextEditor {...this.props}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    text: state.texts.list.find(text => text.id === state.selectedElement.id),
});

const mapDispatchToProps = {
    updateText,
    updateFontSize,
    updateColor,
    updateShadowColor,
    updateLocation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextEditorContainer);
