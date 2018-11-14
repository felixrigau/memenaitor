import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createText } from '../../actions';
import ToolsBar from './ToolsBar';

export class ToolsBarContainer extends Component {
    render() {
        return (
            <Fragment>
                <ToolsBar {...this.props} />
            </Fragment>
        );
    }
}

const mapDispatchToProps = {
    createText
};

export default connect(
    null,
    mapDispatchToProps
)(ToolsBarContainer);
