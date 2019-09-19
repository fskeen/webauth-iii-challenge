const db = require('../../data/dbConfig');

module.exports = {
    createAccount,
    findBy,
    getProtectedResource,
    getTeam
}

function findAccount(id) {
    return db('accounts')
        .where('id', id)
        .first();
}

function createAccount(account) {
    return db('accounts')
        .insert(account)
        .then(ids => findAccount(ids[0]))
}

function findBy (username) {
    return db('accounts').where(username);
}

function getProtectedResource () {
    return db('accounts').select('username')
}
function getTeam (department) {
    return db('accounts')
        .where('department', department)
}