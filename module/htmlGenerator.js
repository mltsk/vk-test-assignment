const createElementWithAttributes = (json) => {
    const element = document.createElement(json.element);
    const attribute = [];
    const notAttribute = ['element', 'elements', 'label', 'legend', 'text', 'option'];
    Object.keys(json).forEach( key => {
        if (!notAttribute.includes(key)){
            attribute.push(key);
        } 
    })
    attribute.forEach(key => element.setAttribute(key, json[key]));
    return element;
}

const htmlGenerator = (json) => {
    const result = document.createElement('div');
    const iter = (json, result) => {
        const element = createElementWithAttributes(json);
        if(json.text !== undefined) element.textContent = json.text;
        if(json.text !== undefined && json.type === 'submit') element.value = json.text;
        if(json.element === 'select') {
            json.option.forEach(item => {
                if (typeof(item) === 'string') {
                    const option = document.createElement('option');
                    option.textContent = item
                    element.appendChild(option);
                } else {
                    const obj = Object.assign(item, {element: 'option'});
                    const option = createElementWithAttributes(obj);
                    option.textContent = obj.text;
                    element.appendChild(option);
                }
            })
        }

        if(json.label !== undefined) {
            let label = document.createElement('label');
            label.setAttribute('for', json.id);
            label.innerText = json.label;
            result = result.appendChild(document.createElement('p'));
            result.appendChild(label);
            result.appendChild(element);
        } else if (json.legend !== undefined) {
            let legend = document.createElement('legend');
            legend.innerText = json.legend;
            result = result.appendChild(element);
            result.appendChild(legend);
            
        } else  {
            result = result.appendChild(element);
        }

        if(json.elements !== undefined) {
            if(Array.isArray(json.elements)) {
                json.elements.forEach(item => {
                    result.appendChild(iter(item, element));
                })
            } else {
                result.appendChild(iter(json.elements, element));
            } 
        }
        return result;
    }

    return iter(json, result);
}

export default htmlGenerator;