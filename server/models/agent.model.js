import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Agent Schema
 */
const AgentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
AgentSchema.method({});

/**
 * Statics
 */
AgentSchema.statics = {
    /**
     * Get agent
     * @param {ObjectId} id - The objectId of agent.
     * @returns {Promise<Agent, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((agent) => {
                if (agent) {
                    return agent;
                }
                const err = new APIError('No such agent exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
    },

    /**
     * List agents in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of agents to be skipped.
     * @param {number} limit - Limit number of agents to be returned.
     * @returns {Promise<Agent[]>}
     */
    list() {
        return this.find()
            // .sort({ createdAt: -1 })
            // .skip(+skip)
            //.limit(40)
            .exec();
    }
};

/**
 * @typedef Agent
 */
export default mongoose.model('Agent', AgentSchema, 'Agents');