module.exports = {
    apps: [
        {
            name: "app",
            script: "server.js",
            instances: 1,
            exec_mode: "fork",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
