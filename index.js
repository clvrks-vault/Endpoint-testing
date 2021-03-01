import fastify from "fastify";
import endpoints from "./endpoints/food.js";

app = fastify();

app.register(endpoints, {prefix: "/food"});

(async() => {
    try {
        app.listen(9999);
        console.log('Server is up, port: 9999');
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
})();