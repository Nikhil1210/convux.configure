import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import agentCtrl from '../controllers/agent.controller';

const router = express.Router();

router.get('/helloagent', function(req, res) {
    res.json({ message: 'New hello from inside agent.route.js file' });
})
router.route('/')
    /** GET /api/agents - Get list of agents */
    .get((req, res) => res.json(agentCtrl.list()))
    /** POST /api/agents - Create new agent */
    .post((req, res) => res.json(agentCtrl.create(req)));

router.route('/:agentId')
    /** GET /api/agent/:agentId - Get agent */
    .get(agentCtrl.get)

/** PUT /api/agents/:agentId - Update agent */
.put(validate(paramValidation.updateAgent), agentCtrl.update)

/** DELETE /api/agents/:agentId - Delete agent */
.delete(agentCtrl.remove);

/** Load agent when API with agentId route parameter is hit */
router.param('agentId', agentCtrl.load);

export default router;