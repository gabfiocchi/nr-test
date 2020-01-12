export default (template, options) => template.replace(/\{\{\s?(\w+)\s?\}\}/g, (_match, variable) => options[variable] || '');
