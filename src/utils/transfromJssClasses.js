/**
 * Transform any jss syntax: "{text: {fontSize: '14rem'}}", to a object with the jss classes name: {text: 'text'}
 * @function
 * @name anonymous
 * @param {Object|Function} styles - Any jss syntax object or any function that return one.
 * @return {Object} - A object with the jss classes name:
 */
export default styles => {
    const reduceClasses = (previous, current) => Object.assign({}, previous, { [current]: current });
    const getClasses = styles => Object.keys(styles).reduce(reduceClasses, {});
    return typeof styles === 'object' ? getClasses(styles) : getClasses(styles());
};
