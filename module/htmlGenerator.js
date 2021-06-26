const createElementWithAttributes = (json, tag = false) => {
    if (tag) {
        json.element = tag;
    }
    const element = document.createElement(json.element);
    const attribute = [];
    const specialAttribute = ['element', 'elements', 'label', 'legend', 'text', 'option'];
    Object.keys(json).forEach( key => {
        if (!specialAttribute.includes(key)){
            attribute.push(key);
        } 
    })
    attribute.forEach(key => element.setAttribute(key, json[key]));
    return element;
}

const htmlGenerator = (json) => {
    let result = createElementWithAttributes(json.form ,'form');
    
    const iter = (jsonArr) => {
        const node = document.createElement('div');
        
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
                node.appendChild(p);

            } else if (json.legend !== undefined) {
                let legend = document.createElement('legend');
                legend.innerText = json.legend;
                element.appendChild(legend);
                node.appendChild(element);
                
            } else  {
                node.appendChild(element);
            }

            if(json.elements !== undefined) {
                element.appendChild(iter(json.elements));
            }
        })

        return node;
    }

    result.appendChild(iter(json.elements));
    const button = createElementWithAttributes(json.button ,'button');
    button.textContent = json.button.text;
    result.appendChild(button);
    return result;
}

export default htmlGenerator;


