export async function endpoints(app) {
    app.get('/:id', async(req) => {
        return { 
            id: req.params.id, 
            pog: "True", 
            unpog: "False"
        }
    });
};

