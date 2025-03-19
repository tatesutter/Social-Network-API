const router = require('express').Router();
const {
    getThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction
} = require('../controllers/thoughtController');

router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:id/reactions')
    .post(addReaction);

router.route('/:id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;
