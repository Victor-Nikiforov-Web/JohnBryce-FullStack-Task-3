const express = require('express');
const router = express.Router();
const gamesLogic = require('../business-logic/games-logic');

router.get('/games', async (request, response) => {
    try {
        const games = await gamesLogic.getAllGames();
        response.json(games);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.get('/games-by-id/:id', async (request, response) => {
    try {
        const id = +request.params.id;
        const games = await gamesLogic.getResultsOfGame(id);
        response.json(games);
    } catch (error) {
        response.status(500).send(error.message);
    }
});
router.get('/comments-by-id/:id', async (request, response) => {
    try {
        const id = +request.params.id;
        const comment = await gamesLogic.getCommentByID(id);
        response.json(comment);
    } catch (error) {
        response.status(500).send(error.message);
    }
});
router.get('/games/:category', async (request, response) => {
    try {
        const category = request.params.category;
        if (category.length === 0) {
            const games = await gamesLogic.getAllGames();
            response.json(games);
            return;
        }
        const games = await gamesLogic.getResultsOfGameByCategory(category);
        response.json(games);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.post('/comment', async (request, response) => {
    try {
        const comment = request.body;
        const addedComment = await gamesLogic.addComment(comment);
        response.status(201).json(addedComment);
    } catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
});
module.exports = router;