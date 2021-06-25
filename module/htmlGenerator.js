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
    let result = document.createElement('form');
    console.log('result0: ', result);
    const iter = (jsonArr, result) => {
        // console.log('result2: ', result);
        // let node = '';
        jsonArr.forEach(json => {
            const element = createElementWithAttributes(json);
            if(json.text !== undefined) element.textContent = json.text;
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
                const p = (document.createElement('p'));
                p.appendChild(label);
                p.appendChild(element);
                result.appendChild(p);

            } else if (json.legend !== undefined) {
                let legend = document.createElement('legend');
                legend.innerText = json.legend;
                element.appendChild(legend);
                result.appendChild(element);
                
            } else  {
                result.appendChild(element);
            }

            if(json.elements !== undefined) {
                // console.log('json.elements: ', json.elements);
                (iter(json.elements, result));
            }
            // console.log('result11: ', result);
        })
        return result; 
    }
    return iter(json.elements, result);
}

export default htmlGenerator;