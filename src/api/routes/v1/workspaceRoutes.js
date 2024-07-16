// External module imports
const express = require('express');
const passport = require('passport');
const workspaceController = require('../../controllers/workspaceController');
const { authorizeAccessToken } = require('../../middlewares/authentication/auth');

const router = express.Router();

// Protect all routes under workspace with JWT authentication
router.use(authorizeAccessToken);

router.get('/tasks', workspaceController.getTasks);
router.get('/tasks/count', workspaceController.getTaskCount);
router.get('/tasks/download', workspaceController.downloadTasks);
router.delete('/tasks/delete', workspaceController.deleteTask);
router.post('/request/noiseRem', workspaceController.requestNoiseRemoval);
router.post('/request/noiseGen', workspaceController.requestNoiseGeneration);
router.post('/request/errorComp', workspaceController.requestErrorComparison);

// Module exports
module.exports = router;
