const express = require("express");
const app = express();
const path = require("path");
const { v4: getID } = require("uuid");
const blogPosts = require("./Posts.js");
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
let posts = require("./data.js");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Post")
  .then((res) => {
    console.log("Mongodb working...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/posts", async (req, res) => {
  // const _posts = await blogPosts.find({});
  res.render("posts/index", { posts });
});

app.post("/posts", async (req, res) => {
  const { author, title, text } = req.body;
  if (req.body != null && title != "" && author != "" && text != "") {
    posts.push({
      id: getID(),
      author,
      title,
      text,
      createdAt: new Date().toLocaleDateString(),
      likes: 0,
    });
    // const _posts = await blogPosts.updateOne({
    //   id: getID(),
    //   author,
    //   title,
    //   text,
    //   createdAt: new Date().toLocaleDateString(),
    //   likes: 0,
    // });
    res.redirect("/posts");
  } else {
    res.redirect("/posts/error");
  }
});

app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  // const _post = await blogPosts.findById(id);
  const post = posts.find((post) => post.id === id);
  console.log("id:", id);
  console.log("post:", post);
  if (post) {
    res.render("posts/show", { ...post });
  } else {
    res.render("posts/error");
  }
});
app.get("/posts/:id/edit", async (req, res) => {
  const { id } = req.params;
  // const _post = await blogPosts.findById(id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.render("posts/edit", { ...post });
  } else {
    res.render("posts/error");
  }
});

app.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { text, title } = req.body;
  // const _post = await blogPosts.findByIdAndUpdate(id, { text, title });
  const post = posts.find((post) => post.id === id);
  const newText = text;
  const newTitle = title;
  if (post) {
    post.text = text;
    post.title = newTitle;
    res.redirect("/posts");
  } else {
    res.render("posts/error");
  }
});
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  // const _post = await blogPosts.findByIdAndDelete(id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    posts = posts.filter((post) => post.id !== id);
    res.redirect("/posts");
  } else {
    res.render("posts/error");
  }
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(3000, (req, res) => {
  console.log("Listening on 3000...");
});
