import Agent from '../models/agent.model';


function load(req, res, next, id) {
    Agent.get(id)
        .then((agent) => {
            req.agent = agent; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

function loadAgent(params) {
    return Agent.get(params.id);
}

function get(req, res) {
    return res.json(req.agent);
}

function create(params) {
    const agent = new Agent({
        title: params.body.title,
        content: params.body.content
    });
    return agent.save();
}

function update(req, res) {
    Agent.findByIdAndUpdate(req.params.agentId, req.body.data, function(err, result) {
        if (err) return res.json(500, { error: err });
        return res.json({ message: 'succesfully saved' });
    });
}

function list(req, res) {
    Agent.find().sort({ createdAt: -1 }).exec((err, result) => {
        if (err) {
            return res.send(500, { error: err });
        }
        return res.json(result);
    });
}

function remove(req, res) {
    Agent.findByIdAndRemove(req.params.agentId, function(err, result) {
        if (err) return res.json(500, { error: err });
        return res.json({ message: 'succesfully deleted' });
    });
}

export default { load, get, create, update, list, remove };