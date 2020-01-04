import database from './database';

export async function registerUser(user) {
    let response = {};
    try {
        response = await database.post('api/register', {
            user
        })
    } catch (err) {
        console.log(err);
    }
    console.log(response.data);
}
