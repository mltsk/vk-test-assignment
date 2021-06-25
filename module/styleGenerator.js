const getUniqElements = (json) => {
    const result = [];

    const iter = (json) => {
        if (json.label !== undefined) result.push('label', 'p');
        if (json.legend !== undefined) result.push('legend');
        if (json.element === 'input' && json.type !== undefined) {
            result.push(json.element);
            result.push(`${json.element}[type='${json.type}']`);
        } else {
            result.push(json.element);
        }
        if (json.elements !== undefined) {
            if(Array.isArray(json.elements)) {
                json.elements.forEach(item => {
                    iter(item);
                })
            } else {
                iter(json.elements);
            }
        }
    }
    iter(json);
    return Array.from(new Set(result));
}

const styleGenerator = (json, style) => {
    const uniqElements = getUniqElements(json);
    return uniqElements
        .filter(item => item in style)
        .map(item => style[item])
        .join('\n\n')
}

export default styleGenerator;