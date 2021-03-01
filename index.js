import fastify from "fastify";


fastify.register(require("./endpoints/food", {prefix: "/food"}));


fastify.listen(9999, function(err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log('Server is up, port: 9999')
    }
});