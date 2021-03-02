import fastify from "fastify";
import endpoints from "./endpoints/food.js";

const app = fastify();

(async() => {
    try {
        await app.register(endpoints, {prefix: "/food"});
        await app.listen(9999);
        console.log('Server is up, port: 9999');
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
})();