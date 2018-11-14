const styles = {
    memenaitorContainer: {
        width: '100%',
        height: '600px',
        display: 'flex',
        border: '1px solid black',
    },
    canvasContainer: {
        width: '50%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    toolsBar: {
        border: '1px solid black',
        width: '100%',
        height: '50px',
    },
    editorsContainer: {
        width: '25%',
        height: 'auto',
        border: '1px solid black',
    },
    container: {
        display: 'flex',
    },
    resultContainer: {
        position: 'relative',
        margin: '1px 0 0 0',
        width: '300px',
    },
    textTest: {
        fontFamily: 'Impact',
        fontSize: 28,
        marginTop: '40px',
        color: 'white',
        textShadow: '1px 1px black',
    },
    containerImage: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
    },
    box: {
        width: '50px',
        height: '50px',
        backgroundColor: '#ebebeb',
        border: '2px solid #ababab',
        margin: '50px 0 0 50px',
    },
    svg: {
        position: 'absolute',
        border: '2px solid red',
    },
    textSvg: {
        cursor: 'pointer',
        '&::selection': {
            color: 'transparent',
        },
    },
};

export default styles;
