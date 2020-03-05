/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.submit = async (session, models, vars) => {
    await session.transform.acmetransferrequests.update('login', models.login);
    await session.transform.acmetransferrequests.action('login', 'submit');
};