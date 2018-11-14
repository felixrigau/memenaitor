import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles'

class DraggableText extends Component {
    drag = e => {
        var data = JSON.stringify({ id: e.target.id, x: parseInt(e.clientX, 10), y: parseInt(e.clientY, 10) });
        e.dataTransfer.setData('data', data);
    };

    handleMouseClick = e => {
        const { updateSelectedElement } = this.props;
        updateSelectedElement({ id: e.target.id, type: 'text' });
    };

    render(){
        const {classes, text } = this.props;
        return(
            <p
                id={text.id}
                className={classes.text}
                style={{
                    left: text.location.left,
                    top: text.location.top,
                    color: text.color,
                    fontSize: text.fontSize,
                }}
                draggable="true"
                onDragStart={e => this.drag(e)}
                onClick={e => this.handleMouseClick(e)}
            >
                {text.text}
            </p>
        )
    }
}

DraggableText.propTypes = {
    text: PropTypes.shape({}).isRequired,
    classes: PropTypes.shape({}).isRequired,
    updateSelectedElement: PropTypes.func.isRequired,
}

export default injectSheet(styles)(DraggableText) ;