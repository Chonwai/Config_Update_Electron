// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.ipcRenderer = require('electron').ipcRenderer
window.fs = require('fs');
window.child_process = require('child_process');
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }

    // const ipcRenderer = window.ipcRenderer;
    // ipcRenderer.on('message', (event, data) => {
    //     console.log('message', data.msg);
    // });
});
