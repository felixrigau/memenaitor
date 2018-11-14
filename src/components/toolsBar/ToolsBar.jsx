import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
const uuidv4 = require('uuid/v4');
import Button from '@material-ui/core/Button';
import styles from './styles';

class ToolsBar extends Component {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        createText: PropTypes.func.isRequired,
    };

    createText = () => {
        const { createText } = this.props;
        createText({
            id: uuidv4(),
            type: 'text',
            text: 'Any Text',
            location: {
                left: 0,
                top: 0,
            },
            fontSize: 28,
            color: 'white',
            shadowColor: 'black'
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <section className={classes.toolsBar}>
                    <Button onClick={() => this.createText()}>Add Text</Button>
                </section>
            </div>
        );
    }
}

export default injectSheet(styles)(ToolsBar);
