;(() => {
    'use strict';

    const express = require('express');
    const path = require('path');

    const app = express();

    app.use(express.static('dist'));

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    const server = app.listen(8009);

    server.on('listening', (error) => {
        if(error) throw new Error(error);
        let host = '127.0.0.1';
        let port = server.address().port;
        console.log('Servidor corriendo en: http://%s:%s', host, port);
    });
})();