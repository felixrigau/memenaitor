const styles = {
    container: {
        width: props => `${props.width.toString()}px`,
        height: props => `${props.height.toString()}px`,
        backgroundColor: '#f7d13d',
        margin: '100px 0 0 100px'
    },
    resultContainer:{
        position: 'relative',
        margin: '1px 0 0 0'
    },
    logo:{
        position: 'absolute'
    },
    canvas:{
        position: 'absolute'
    },
    box: {
        width: '50px',
        height: '50px',
        backgroundColor: '#ebebeb',
        border: '2px solid #ababab',
        margin: '50px 0 0 50px'
    },
    svg: {
        position: 'absolute',
        border: '2px solid red',
    },
    textSvg: {
        cursor: 'pointer',
        '&::selection': { 
            color: 'transparent'
        }
    }
};

export default styles;
