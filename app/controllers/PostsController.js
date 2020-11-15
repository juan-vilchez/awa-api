const Post = require('../models/Posts');




module.exports = {

    /* function index(req, res) {
        Post.find({})
            .then(posts => {
                if (posts.length)
                    return res.status(200).send({ posts });
                return res.status(204).send({ message: 'NO CONTENT' });
            }).catch(error => res.status(500).send({ error }));
    } */
    show: function(req, res) {
        model.find({}, function(err, items) {
            if (!err) {
                res.json(items)
            } else {
                res.sendStatus(500);
                console.log(err);
            }
        });
    },

    create(req, res) {
        let post = new Post(req.body);
        post.save().then(post => res.status(201).send({
            post
        })).catch(error => res.status(500).send({ error }));
    },

    update(req, res) {
        if (req.body.error)
            return res.status(500).send({ error });
        if (!req.body.posts)
            return res.status(404).send({ message: 'not found-update' });
        let post = req.body.posts[0];
        post = Object.assign(post, req.body);
        post.save().then(post => res.status(200).send({ message: 'UPDATE', post })).catch(error => res.status(500).send(error))
    },
    remove(req, res) {
        if (req.body.error)
            return res.status(500).send({ error });

        if (!req.body.posts)
            return res.status(404).send({ message: 'no encontrado desde remove' });
        req.body.posts[0].remove().then(post => res.status(200).send({ message: 'removido :V', post })).catch(error => res.status(500).send(error));
    },

    /* (req, res) {
        let val_id = req.params.id;
        model.deleteOne({ _id: val_id }, function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    }
     */

    /* function find(req, res, next) {
        let query = {};
        query[req.params.key] = req.params.value;
        Post.find(query).then(posts => {
            if (!posts.length) return next();
            req.body.posts = posts;
            return next();
        }).catch(error => {
            req.body.error = error;
            next();
        })
    } */
    /*  find = (req, next) => {
        let query = {};
        query[req.params.key] = req.params.value;
        Post.find(query).then(posts => {
            if (!posts.length) return next();
            req.body.posts = posts;
            return next();
        }).catch(error => {
            req.body.error = error;
            next();
        })
    }
 */
};



























/* 
function index(req, res) {
    Post.find({})
        .then(posts => {
            if (posts.length)
                return res.status(200).send({ posts });
            return res.status(204).send({ message: 'NO CONTENT' });
        }).catch(error => res.status(500).send({ error }));
}

function show(req, res) {
    if (req.body.error)
        return res.status(500).send({ error });
    if (!req.body.posts)
        return res.status(404).send({ message: 'NOT FOUND' });
    let posts = req.body.posts;
    return res.status(200).send({ posts });
}

function create(req, res) {
    let post = new Post(req.body);
    post.save().then(post => res.status(201).send({
        post
    })).catch(error => res.status(500).send({ error }));
}

function update(req, res) {
    if (req.body.error)
        return res.status(500).send({ error });
    if (!req.body.posts)
        return res.status(404).send({ message: 'not found-update' });
    let post = req.body.posts[0];
    post = Object.assign(post, req.body);
    post.save().then(post => res.status(200).send({ message: 'UPDATE', post })).catch(error => res.status(500).send(error))
}

function remove(req, res) {
    if (req.body.error)
        return res.status(500).send({ error });

    if (!req.body.posts)
        return res.status(404).send({ message: 'no encontrado desde remove' });
    req.body.posts[0].remove().then(post => res.status(200).send({ message: 'removido :V', post })).catch(error => res.status(500).send(error));
}

/* (req, res) {
    let val_id = req.params.id;
    model.deleteOne({ _id: val_id }, function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
}
 */

/* function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Post.find(query).then(posts => {
        if (!posts.length) return next();
        req.body.posts = posts;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
} */
/*
find = (req, res, next) => {
    let query = {};
    query[req.params.key] = req.params.value;
    Post.find(query).then(posts => {
        if (!posts.length) return next();
        req.body.posts = posts;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    //-----------
    delete2,
    find

} */