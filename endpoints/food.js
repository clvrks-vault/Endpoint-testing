export async function endpoints(app) {
    await app.get('/:id', async(req) => {
        return { 
            id: req.params.id, 
            pog: "True", 
            unpog: "False"
        }
    });
};

