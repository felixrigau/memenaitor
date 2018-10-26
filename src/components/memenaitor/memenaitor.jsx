import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import vue from './../../assets/vue.jpg';

export class Memenaitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: {
                top: {
                    text: '',
                    location: {
                        x: 0,
                        y: 0,
                    },
                },
                bottom: {
                    text: '',
                    location: {
                        x: 0,
                        y: 0,
                    },
                },
            },
            image: '',
        };
    }

    componentDidMount() {
        // this.createSVG();
        const textRed = document.querySelector('#textRed');
        textRed.addEventListener('mousemove', e => this.handleMouseMove(e))
        const textBlue = document.querySelector('#textBlue');
        textBlue.addEventListener('mousemove', e => this.handleMouseMove(e))
    }

    handleClick = e => {
        debugger
        console.log('offsetX', e.offsetX)
        console.log('offsetX', e.offsetX)
    }

    handleMouseMove = e => {
        if (e.buttons === 1) {
            // debugger
            const element = e.target;       
            if (element.id.includes('text')) {
                this.changePosition(e.target, 'x', e.movementX)
                this.changePosition(e.target, 'y', e.movementY)
            }
        }
        
    }

    changePosition = (element, coordinate, value) => {
        // debugger
        const position = parseInt(element.getAttributeNS(null, coordinate));
        element.setAttributeNS(null, coordinate, position + value)
    }

    updateText = (position, text, x, y) => {
        this.setState({
            [position]: {
                text: text,
                location: {
                    x: x,
                    y: y,
                },
            },
        });
    };

    createSVG = () => {
        // const xmlns = 'http://www.w3.org/2000/svg';
        // let svgElem = document.createElementNS(xmlns, 'svg');
        // let txtElem1 = document.createElementNS(xmlns, 'text');
        // let txtElem2 = document.createElementNS(xmlns, 'text');

        // txtElem1.setAttributeNS(null, 'x', 100);
        // txtElem1.setAttributeNS(null, 'y', 100);
        // txtElem1.setAttributeNS(null, 'font-size', 28);

        // txtElem2.setAttributeNS(null, 'x', 100);
        // txtElem2.setAttributeNS(null, 'y', 250);
        // txtElem2.setAttributeNS(null, 'font-size', 28);

        // const helloTxt1 = document.createTextNode('Hello World!');
        // const helloTxt2 = document.createTextNode('Hello World!');

        // txtElem1.appendChild(helloTxt1);
        // txtElem2.appendChild(helloTxt2);

        // svgElem.appendChild(txtElem1);
        // svgElem.appendChild(txtElem2);

        const svg = document.querySelector('#svg');
        let logo = document.getElementById('logo');
        debugger
        this.convertSVGtoCanvas(svg, logo);
        // let element = document.getElementById('test');
        // element.appendChild(svgElem);
        // document.documentElement.appendChild(txtElem1);
    };

    convertSVGtoCanvas = (svgElem, logo) => {
        let result = document.getElementById('result');
        const svg_xml = new XMLSerializer().serializeToString(svgElem);
        let canvas = document.getElementById('canvas');
        canvas.width = result.width;
        canvas.height = result.height;
        var ctx1 = canvas.getContext('2d');

        var img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svg_xml);

        img.onload = function() {
            ctx1.drawImage(logo, 0, 0, 300, 300);
            ctx1.drawImage(img, 0, 0, 300, 300);
            const base64 = canvas.toDataURL();
            canvas.width = 0;
            canvas.height = 0;
            result.src = base64;
        };
    };

    render() {
        const { textTop, textBottom, width, height, classes } = this.props;
        return (
            <Fragment>
                {/* <div id="container" className={classes.container}>
                    <div id="box" className={classes.box}>

                    </div>
                </div> */}
                <div>
                    <input id="button" type="button" value="convert" onClick={this.createSVG}/>
                    <img id="result" className={classes.result} height={height} width={width}/>
                </div>
                <div id="resultContainer" className={classes.resultContainer}>
                    <img id="logo" className={classes.logo} src={vue} alt="logo" height={height} width={width}/>
                    <canvas id="canvas" className={classes.canvas} height="0" width="0" />
                    <svg id="svg" className={classes.svg} height={height} width={width}>
                        <text className={classes.textSvg} id="textRed" x="0" y="15" fill="red" fontSize="28">I love SVG!</text>
                        <text className={classes.textSvg} id="textBlue" x="0" y="50" fill="blue" fontSize="28">I love SVG!</text>
                    </svg>
                </div>
            </Fragment>
        );
    }
}

Memenaitor.propTypes = {
    classes: PropTypes.object.isRequired,
    textTop: PropTypes.string,
    textBottom: PropTypes.string,
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
