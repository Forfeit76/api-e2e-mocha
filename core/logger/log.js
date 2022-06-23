const resetColor = '\x1b[0m';
const colorRed = '\x1b[31m';
const colorGreen = '\x1b[32m';
const colorYellow = '\x1b[33m';

module.exports = {
    error(content, stack) {
        this._log(content, colorRed);

        if (stack) {
            this._log(stack, colorRed);
        }
    },
    info(content) {
        this._log(content);
    },
    success(content) {
        this._log(content, colorGreen);
    },
    warning(content) {
        this._log(content, colorYellow);
    },
    _log(content, color = '') {
        const now = new Date().toUTCString();

        console.log(`${color}[${now}] ${content}`, resetColor);
    },
};
