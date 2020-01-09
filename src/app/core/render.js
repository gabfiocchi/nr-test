export const Render = (template, options) => template.replace(/\{\{\s?(\w+)\s?\}\}/g, (_match, variable) => options[variable] || '');
export const RenderArray = (tag, options) => options.map((option) => `<${tag}>${option}</${tag}>`).join('');
