import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import agentCtrl from '../controllers/agent.controller';

const router = express.Router();

router.route('/')
    /** GET /api/agents - Get list of agents */
    .get((req, res) => agentCtrl.list(req, res))
    /** POST /api/agents - Create new agent */
    .post((req, res) => {
        return res.json(agentCtrl.create(req));
    });

router.route('/:agentId')
    /** GET /api/agent/:agentId - Get agent */
    .get(agentCtrl.get)
    /** PUT /api/agents/:agentId - Update agent */
    .put((req, res) =>
        // return res.json({ idpun: req.params.agentId, ab: 'as', title: req.body.title, content: req.body.content });
        agentCtrl.update(req, res)
    )

/** DELETE /api/agents/:agentId - Delete agent */
.delete((req, res) => agentCtrl.remove(req, res));

/** Load agent when API with agentId route parameter is hit */
router.param('agentId', agentCtrl.load);

export default router;