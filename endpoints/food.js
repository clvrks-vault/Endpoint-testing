async function endpoints(fastify, options) {
    fastify.get('/:id', async(req, res) =>
    {
        res.send({
            id: req.params.id,
            pog: "True",
            unpog: "False"
        })
    })

};

module.exports = endpoints;