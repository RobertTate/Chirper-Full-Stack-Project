import { Router } from 'express';
// import chirpStore from '../chirpstore';
import db from '../db';

let router = Router();



router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        db.GetChirp(id)
            .then((result) => {
                // console.log(result)
                res.send(result)
            }).catch((err) => {
                console.log(err);
            })
    } else {
        db.GetChirps()
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
            })
    }
});




router.post('/', (req, res) => {
    console.log('Posting some stuff');
    db.CreateChirp(req.body);
    res.send(req.body);
});




router.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log(req.body);
    db.UpdateChirp(id, req.body.text);
    res.sendStatus(200);
});




router.delete('/:id', (req, res) => {
    let id = req.params.id;
    db.DeleteChirp(id)
    res.sendStatus(200);
});




export default router;