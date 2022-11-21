const timeAgo = require("node-time-ago");
const html = require("html-template-tag");
//bringing in the Users model here is an attempt to be able to access Users as authors, but you can't do an await call inside the map inside the HTML below, this will be much easier to get done with REACT!!
const { Users } = require('../sqlDb')

module.exports = (posts) => 
html`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map( post => html`
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by Who knows!)</small>
          </p>
          <small class="news-info">
            ${post.upvotes ? post.upvotes : 0} upvotes | ${timeAgo(post.date)}
          </small>
        </div>`
      )}
    </div>
  </body>
  </html>`;