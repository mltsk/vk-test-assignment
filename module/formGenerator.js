import styleGenerator from "./styleGenerator.js";
import htmlGenerator from "./htmlGenerator.js";

const formGenerator = (json, style) => {
    const html = htmlGenerator(json);
    // const css = `<style>\n${styleGenerator(json, style)}\n</style>`;
    // html.insertAdjacentHTML('beforeend', css);
    const htmlAndCss = html.outerHTML.replace(/></gm, '>\n<');
    // return htmlAndCss;
    return htmlAndCss;
    console.log('html: ', html);
}

export default formGenerator;