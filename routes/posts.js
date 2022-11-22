const express = require('express');
const router = express.Router();
// const  db    = require('../db');
const postList = require('../views/postList');
const postDetails = require('../views/postDetails');
const addPost = require('../views/addPost');
const { db, Posts, Users } = require('../sqlDb');

router.get('/', async (req, res, next) => { //http://localhost:1337/posts
    try{
        // const data = await db.query('SELECT * FROM posts');
        const data = await Posts.findAll()
        console.log('DATA', data)
        res.send(postList(data))
    } catch(err){
        next(err);
    }
})

router.get("/add", (req, res) => {
    res.send(addPost());
  });

router.get('/:id', async (req, res, next) => {
    try{
        //const data = await db.query(`SELECT * FROM posts WHERE id = $1`, [req.params.id]);
        const data = await Posts.findAll({
            where: {
                id: req.params.id
            }
        })
        console.log('DETAILS', data)
        const post = data[0];
        res.send(postDetails(post.dataValues));
    } catch(err){
        next(err);
    }
})



router.post('/', async (req, res, next) => {
    try{
    console.log('REQ', req.body)
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    let author;
    // let author = await db.query('SELECT * FROM users WHERE name = $1', [name]);
    const authorData = await Users.findAll({
        where: {
            name: name,
        }
    })

    if(authorData.length) {
        // console.log('AUTH DATA', authorData);
         author = authorData[0].dataValues;
    } else {
        // console.log('AUTH DATA', authorData);
        author = await Users.create({name: name})
        console.log('new auth', author)
    }
    console.log('AUTHOR', author)

    const newPost = await Posts.create({userid: author.id, title, content});

    res.redirect(`/posts/${newPost.id}`);
    } catch(err){
        next(err);
    }
})

module.exports = router;