import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import { CirclePicker } from 'react-color';


class TextEditor extends Component {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        text: PropTypes.shape({}).isRequired,
        updateText: PropTypes.function,
        updateFontSize: PropTypes.function,
        updateColor: PropTypes.function,
        updateShadowColor: PropTypes.function,
        updateLocation: PropTypes.function,
    };

    handleChangeFontSize = e => {
        const { updateFontSize } = this.props
        updateFontSize(e.target.valueAsNumber);
    };
    
    handleChangeText = e => {
        const { updateText } = this.props
        updateText(e.target.value);
    };
    
    handleChangeComplete = (color, property) => {
        const { updateColor, updateShadowColor } = this.props;
        property === 'text' ? updateColor(color.hex) : updateShadowColor(color.hex);
    };
    
    handleLocation = (e, coordinate) => {
        const { updateLocation } = this.props
        updateLocation({[coordinate]: e.target.valueAsNumber});
    };

    render() {
        const { classes, text } = this.props;
        return (
            <Fragment>
                <section className={classes.textEditor}>
                    <TextField
                        id="selected-meme-text"
                        label="Texto"
                        type="text"
                        margin="normal"
                        value={text.text}
                        onChange={e => this.handleChangeText(e)}
                    />
                    <TextField
                        id="standard-number"
                        label="Font Size"
                        value={text.fontSize}
                        onChange={e => this.handleChangeFontSize(e)}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <p>Color:</p>
                    <CirclePicker onChangeComplete={color => this.handleChangeComplete(color, 'text')} colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}/>
                    <p>Sombra:</p>
                    <CirclePicker onChangeComplete={color => this.handleChangeComplete(color, 'shadow')} colors={["#FFF", "#000"]}/>
                    <div>
                        <TextField
                            id="selected-meme-text"
                            label="Posición X"
                            type="number"
                            margin="normal"
                            value={text.location.left}
                            onChange={e => this.handleLocation(e, 'left')}
                        />
                        <TextField
                            id="standard-number"
                            label="Posición Y"
                            value={text.location.top}
                            onChange={e => this.handleLocation(e, 'top')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(TextEditor);
