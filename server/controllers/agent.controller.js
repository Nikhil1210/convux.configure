import Agent from '../models/agent.model';


function load(req, res, next, id) {
    Agent.get(id)
        .then((agent) => {
            req.agent = agent; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
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
    req.agent.title = req.body.title;
    req.agent.content = req.body.content;
    return agent.save();
    // return load(params).then(agent => {
    //     const tmp = agent;
    //     agent.title = params.title;
    //     agent.content = params.content;
    //     return agent.save();
    // });
}

function list() {
    // return [{ agentId: 23, title: 'agent 23' }, { agentId: 44, title: 'agent 44' }, { agentId: 3, title: 'agent 3' }];
    // const { limit = 50, skip = 0 } = {};
    // return Agent.list({ limit, skip });
    return Agent;
}

function allAgents() {
    return Agent.find().exec();
}

function remove(params) {
    return load(params).then(agent => agent.remove());
}

export default { load, get, create, update, list, remove, allAgents };