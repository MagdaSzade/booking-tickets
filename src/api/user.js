import database from './database';

export async function registerUser(user) {
    let response = {};
    try {
        response = await database.put('api/register', {user})
    } catch (err) {
        console.log(err);
    }
    console.log(response);
} 