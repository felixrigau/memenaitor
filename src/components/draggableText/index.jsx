import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSelectedElement} from '../../actions'
import DraggableText from './draggableText';

class DraggableTextContainer extends Component {
    render(){
        return(
            <DraggableText {...this.props} />
        )
    }
}

const mapDispatchToProps = {
    updateSelectedElement
}

export default connect(null, mapDispatchToProps)(DraggableTextContainer) ;