import mysql from 'mysql';

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirpr',
        user: 'chirprapp',
        password: 'password'
    }
);



let getChirps = () => {
    // connection.connect();

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM CHIRPS', (err, results, fields) => {
            if (err) {
                // connection.end();
                reject(err);
            }
            // console.log('hitting getChirps');
            let chirps = results.map((item) => {
                return ({
                    text: item.text,
                    id: item.id,
                    location: item.location
                });
            });
            resolve(chirps);
            // connection.end();
        });
    });
};

let getChirp = (id) => {
    // connection.connect();

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM CHIRPS WHERE id = ${id}`, (err, results, fields) => {
            if (err) {
                // connection.end();
                reject(err);
            }
            // console.log('hitting getChirp');

            resolve(results[0]);
            // connection.end();
        });
    });
};


let createChirp = (chirp) => {

    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO chirps(userid, text, location)
            values("1", "${chirp.chirptext}", "${chirp.locationtext}");`
            , (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
    });
};


let deleteChirp = (id) => {

    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM CHIRPS WHERE id = ${id}`, (err, results, fields) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });

};

let updateChirp = (id, chirp) => {

    return new Promise((resolve, reject) => {
        connection.query(`
            UPDATE CHIRPS
            SET text = "${chirp}"
            WHERE id = ${id};`
            , (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
    });

};

let createMention = (userid, chirpid) => {

    return new Promise((resolve, reject) => {
        connection.query(`
        INSERT INTO mentions(userid, chirpid)
        values(${userid}, ${chirpid});
        `, (err, results, fields) => {
            if(err) {
                reject(err);
            }
            resolve('success');
        });
    });

};


let getMentions = (userid) => {

    return new Promise((resolve, reject) => {
        console.log(userid);
        connection.query(`
        CALL spUserMentions(${userid});
        `, (err, results, fields) => {
            if(err) {
                reject(err);
            }
            console.log(results[0])
            resolve(results);
        });
    });
};


module.exports = {
    CreateMention: createMention,
    GetMentions: getMentions,
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};