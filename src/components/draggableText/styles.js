const styles = {
    text: props => ({
        position: 'absolute',
        margin: 0,
        textShadow: `${props.text.shadowColor} -1px -1px 0px, ${props.text.shadowColor} 1px -1px 0px, ${props.text.shadowColor} -1px 1px 0px, ${props.text.shadowColor} 1px 1px 0px`,
        fontFamily: 'Impact'
    }),
}

export default styles