import Agent from '../models/agent.model';


function load(params) {
    return Agent.get(params.id);
}

function get(req, res) {
    return res.json(req.agent);
}

function create(params) {
    const agent = new Agent({
        title: params.data.title,
        content: params.data.content
    });
    return agent.save();
}

function update(params) {
    return load(params).then(agent => {
        const tmp = agent;
        agent.title = params.data.title;
        agent.content = params.data.content;
        return agent.save()
    });
}

function list(params) {
    const { limit = 50, skip = 0 } = params;
    return Agent.list({ limit, skip })
}

function remove(params) {
    return load(params).then(agent => agent.remove());
}

export default { load, get, create, update, list, remove };