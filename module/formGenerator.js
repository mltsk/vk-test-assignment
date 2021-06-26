import styleGenerator from "./styleGenerator.js";
import htmlGenerator from "./htmlGenerator.js";
import style from "../data/style.js";

const formGenerator = (json) => {
    const html = htmlGenerator(json);
    const css = `<style>\n${styleGenerator(json, style)}\n</style>`;
    html.insertAdjacentHTML('beforeend', css);
    const htmlAndCss = html.outerHTML.replace(/(<div>)/gm, '').replace(/(<\/div>)/gm, '').replace(/></gm, '>\n<');
    return htmlAndCss;
}

export default formGenerator;