const express = require("express");
const morgan = require("morgan");
const app = express();

//url parser
app.use(express.urlencoded({ extended: false}))
//json parser
// app.use(express.json())

//routing
const routes = require('./routes/posts');
app.use('/posts', routes)

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));



//const baseQuery = "SELECT posts.*, users.name, counting.upvotes FROM posts INNER JOIN users ON users.id = posts.userId LEFT JOIN (SELECT postId, COUNT(*) as upvotes FROM upvotes GROUP BY postId) AS counting ON posts.id = counting.postId\n";

app.get('/', (req, res) => { //http://localhost:1337/posts
  // res.send('sample string')
  res.redirect('/posts');
})
// app.get("/", async (req, res, next) => {
//   try {
//     const data = await client.query(baseQuery);
//     res.send(postList(data.rows));
//   } catch (error) { next(error) }
// });

// app.get("/posts/:id", async (req, res, next) => {
//   try {
//     const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
//     const post = data.rows[0];
//     res.send(postDetails(post));
//   } catch (error) { next(error) }
// });

const PORT = 1337;

app.listen(PORT, () => {  //http://localhost:1337/
  console.log(`App listening in port ${PORT}`);
});
