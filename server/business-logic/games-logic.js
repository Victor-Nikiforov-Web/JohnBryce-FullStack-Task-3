const dal = require('../data-access/dal');

async function getAllGames() {
    const sql = `SELECT * FROM results`;
    const games = await dal.executeAsync(sql);
    return games;
}

async function getResultsOfGame(id) {
    const sql = `SELECT * from results
    WHERE id = ${id}`;
    const games = dal.executeAsync(sql);
    return games;
}

async function getResultsOfGameByCategory(category) {
    const sql = `SELECT * from results
    WHERE category = '${category}'`;
    const games = dal.executeAsync(sql);
    return games;
}
async function getCommentByID(id) {
    const sql = `SELECT * from comments
    WHERE gameID = '${id}'`;
    const games = dal.executeAsync(sql);
    return games;
}
async function addComment(comment) {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const nowTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const sql = `INSERT INTO comments(gameID ,time ,comment)
    VALUES (${comment.gameID},'${nowTime}','${comment.comment}')`;
    const info = await dal.executeAsync(sql);
    comment.id = info.insertID;
    return comment;
}

module.exports = {
    getAllGames,
    getResultsOfGame,
    getResultsOfGameByCategory,
    getCommentByID,
    addComment
}