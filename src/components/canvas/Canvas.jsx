import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import DraggableText from '../draggableText'

class Canvas extends Component {
    static propTypes = {
        textList: PropTypes.array.isRequired,
        classes: PropTypes.shape({}).isRequired,
        updateLocation: PropTypes.func.isRequired,
        updateSelectedElement: PropTypes.func.isRequired,
    };

    allowDrop = e => {
        e.preventDefault();
    };

    
    changePosition = (left, top) => {
        const { updateLocation } = this.props;
        updateLocation({ left, top });
    };
    
    drop = e => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('data'));
        const moveX = parseInt(e.clientX, 10) - data.x;
        const moveY = parseInt(e.clientY, 10) - data.y;
        this.changePosition(moveX, moveY);
    };
    
    render() {
        const { textList, classes } = this.props;
        return (
            <Fragment>
                <section className={classes.canvas} onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)}>
                    {textList.map(text => (
                        <DraggableText key={text.id} text={text}/>
                    ))}
                </section>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Canvas);
