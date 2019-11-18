
const Hapi = require('@hapi/hapi');
const serverRoute = require('./routes/route')

const init = async () => {

    const server = Hapi.server({
        port: 5252,
        host: 'localhost',
        "routes": {
            "cors": true
        }
    });

    server.route(serverRoute)

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
