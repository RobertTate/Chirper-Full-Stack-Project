import { Router } from 'express';
// import chirpStore from '../chirpstore';
import db from '../db';

let router = Router();

router.post('/', (req, res) => {
    console.log('Posting a Mention');
    console.log(req.body);
    db.CreateMention(req.body.userid, req.body.chirpid)
    .then(() => {
        console.log('success');
    }).catch((err) => console.log(err));
    
});


router.get('/:id?', (req, res) => {
    console.log("Retreiving Chirps with Mentions");
    let id = req.params.id;
    db.GetMentions(id)
    .then(() => {
        console.log('success');
    }).catch((err) => console.log(err));
})


export default router;