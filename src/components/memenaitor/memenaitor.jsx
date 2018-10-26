import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import vue from './../../assets/vue.jpg';
import { Object } from 'core-js';

export class Memenaitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: {},
            image: '',
        };
    }

    addText = () => {
        // debugger
        const id = Object.keys(this.state.texts).length;
        this.setState({
            texts: {
                ...this.state.texts,
                [id]: {
                    id: id,
                    text: 'Any Text',
                    location: {
                        x: 0,
                        y: 0,
                    },
                },
            },
        });
    };

    handleMouseMove = e => {
        if (e.buttons === 1) {
            this.changePosition(e.target.id, e.movementX, e.movementY);
        }
    };

    changePosition = (id, movementX, movementY) => {
        const { x, y } = this.state.texts[id].location;
        this.setState({
            texts: {
                ...this.state.texts,
                [id]: {
                    ...this.state.texts[id],
                    location: {
                        x: x + movementX,
                        y: y + movementY,
                    },
                },
            },
        });
    };

    createSVG = () => {
        const svg = document.querySelector('#svg');
        let logo = document.getElementById('logo');
        this.convertSVGtoCanvas(svg, logo);
    };

    convertSVGtoCanvas = (svgElem, logo) => {
        let result = document.getElementById('result');
        const svg_xml = new XMLSerializer().serializeToString(svgElem);
        let canvas = document.createElement('canvas');
        canvas.width = result.width;
        canvas.height = result.height;
        var contextCanvas = canvas.getContext('2d');

        var img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svg_xml);

        img.onload = function() {
            contextCanvas.drawImage(logo, 0, 0, 300, 300);
            contextCanvas.drawImage(img, 0, 0, 300, 300);
            const base64 = canvas.toDataURL();
            result.src = base64;
        };
    };

    render() {
        const { width, height, classes } = this.props;
        const { texts } = this.state;
        return (
            <Fragment>
                <div>
                    <input id="button" type="button" value="convert" onClick={this.createSVG} />
                    <input id="button" type="button" value="Add Text" onClick={this.addText} />
                    <img id="result" className={classes.result} height={height} width={width} />
                </div>
                <div id="resultContainer" className={classes.resultContainer}>
                    <img id="logo" className={classes.logo} src={vue} alt="logo" height={height} width={width} />
                    <svg id="svg" className={classes.svg} height={height} width={width}>
                        {Object.values(texts).map(textSvg => (
                            <text
                                key={textSvg.id}
                                id={textSvg.id}
                                className={classes.textSvg}
                                x={textSvg.location.x}
                                y={textSvg.location.y}
                                fill="red"
                                fontSize="28"
                                alignmentBaseline="hanging"
                                onMouseMove={e => this.handleMouseMove(e)}
                            >
                                {textSvg.text}
                            </text>
                        ))}
                    </svg>
                </div>
            </Fragment>
        );
    }
}

Memenaitor.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

Memenaitor.defaultProps = {
    textTop: 'Text top',
    textBottom: 'Text bottom',
    width: 300,
    height: 300,
};

export default injectSheet(styles)(Memenaitor);
