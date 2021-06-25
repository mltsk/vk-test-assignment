const style = {
"p": `p {
    display: flex;
    flex-wrap: wrap;
    
    margin: 0;
    padding-top: 12px;
    padding-bottom: 2px;
}`,
"label": `label {
    color: rgb(129, 140, 153);
    font-family: Helvetica Neue, Roboto, sans-serif;
    font-size: 14px;
    
    padding-top: 2px;
    padding-bottom: 6px;
}`,
"input": `input {
    height: 34px;
    width: 100%;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 11px;
    padding-right: 11px;

    line-height: 20px;
    font-size: 15px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background-color: #f7f8fa;
}

input:hover {
    border-color: #bcbdbe;
    outline: none;
}
    
input:focus {
    border-color: #5181b8;
    outline: none;
}`,
"input[type='checkbox']": `input[type="checkbox"] {
    width: 16px;
    height: 16px;
    order: -1;
}`,
"input[type='radio']": `input[type="radio"] {
    width: 16px;
    height: 16px;
    order: -1;
}`,
"input[type='number']": `input[type="number"] {
    width: 75px;
}`,
"textarea": `textarea {
    width: 100%;
}`,
"button": `button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 36px;
    
    padding-top: 1px;
    padding-bottom: 1px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 12px;
    
    font-family: Helvetica Neue, Roboto, sans-serif;
    color: #fff;
    
    background-color: rgb(81, 129, 184);
    border-radius: 4px;
    border: 0px;
}
    
button:hover {
    background-color: rgb(81, 129, 164);
}
    
button:active {
    background-color: rgb(61, 129, 164);
}`,
"select": `select {
    margin-left: 10px;
}`,
"fieldset": `fieldset {
    font-family: Helvetica Neue, Roboto, sans-serif;
    font-size: 14px;
    color: rgb(129, 140, 153);
    width: 100%;
    
    margin: 0;
    padding: 0;
    border: none;
}`,
"legend": `legend {
    padding-top: 12px;
}`
}  

export default style;
