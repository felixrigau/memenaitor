import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import axios from 'axios';
const PromiseFileReader = require('promise-file-reader');
import TextEditor from '../textEditor';
import ToolsBar from '../toolsBar';
import Canvas from '../canvas';

export class Memenaitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: {},
            selectedId: '',
            image: '',
        };
        this.fileReader = new FileReader();
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        selectedElement: PropTypes.shape({}),
    };

    mixImagesAndTexts = () => {
        let result = document.getElementById('result');
        const svgElem = document.querySelector('#svg');
        const svg_xml = new XMLSerializer().serializeToString(svgElem);

        let canvas = document.createElement('canvas');
        canvas.width = result.width;
        canvas.height = result.height;
        var contextCanvas = canvas.getContext('2d');

        var imgSvg = new Image();
        imgSvg.src = 'data:image/svg+xml;base64,' + btoa(svg_xml);

        var upladedImg = new Image();
        upladedImg.src = this.state.image;

        imgSvg.onload = function() {
            contextCanvas.drawImage(upladedImg, 0, 0, 300, 300);
            contextCanvas.drawImage(imgSvg, 0, 0, 300, 300);
            const base64 = canvas.toDataURL();
            result.src = base64;
        };
    };

    addUrl = e => {
        const value = e.currentTarget.value;
        this.setState({ ...this.state, url: value });
    };

    upload = e => {
        const file = e.target.files[0];
        PromiseFileReader.readAsDataURL(file).then(base64 => this.setState({ ...this.state, image: base64 }));
    };

    loadImageFromUrl = () => {
        axios
            .get(this.state.url, {
                responseType: 'arraybuffer',
            })
            .then(response => {
                const base64 = new Buffer(response.data, 'binary').toString('base64');
                this.setState({ ...this.state, image: `data:image/jpeg;base64,${base64}` });
            });
    };

    render() {
        const { classes, selectedElement } = this.props;
        return (
            <Fragment>
                <div className={classes.memenaitorContainer}>
                    <div className={classes.canvasContainer}>
                        <ToolsBar/>
                        <Canvas/>
                    </div>
                    <div className={classes.editorsContainer}>
                        {selectedElement.type === 'text' && <TextEditor />}
                    </div>
                </div>
                {/* <div className={classes.container}>
                    <div id="resultContainer" className={classes.resultContainer}>
                        <div className="buttons">
                            <input id="addText" type="button" value="Add Text" onClick={this.addText} />
                            <input id="convert" type="button" value="convert" onClick={this.mixImagesAndTexts} />
                            <input id="upload" type="file" onChange={e => this.upload(e)} />
                            <input id="url" type="text" placeholder="Any url image" onBlur={e => this.addUrl(e)} />
                            <input id="addUrl" type="button" onClick={this.loadImageFromUrl} value="Load URL" />
                        </div>
                        <div>
                            <div className={classes.containerImage}>
                                <p className={classes.textTest}>Any text</p>
                                <img id="logo" src={this.state.image} />
                            </div>
                            <svg id="svg" className={classes.svg} height={height} width={width}>
                                <text
                                    x="0"
                                    y="100"
                                    fontSize="28"
                                    fontFamily="impact"
                                    alignmentBaseline="hanging"
                                    fill="white"
                                    strokeWidth="1"
                                    stroke="black"
                                >
                                    Any Text
                                </text>
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
                    </div>
                    <div>
                        <img id="result" className={classes.result} height={height} width={width} />
                    </div>
                </div> */}
            </Fragment>
        );
    }
}

Memenaitor.defaultProps = {
    textTop: 'Text top',
    textBottom: 'Text bottom',
    width: 300,
    height: 300,
};

export default injectSheet(styles)(Memenaitor);
