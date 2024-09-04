const { default: mongoose } = require("mongoose");
const blogPosts = require("./Posts.js");
const { v4: getID } = require("uuid");

blogPosts.insertMany([
  {
    id: getID(),
    title: "Exploring the Wonders of Germany",
    author: "Johann Schmidt",
    text: "Germany is known for its rich history, vibrant culture, and economic prowess. However, beneath the surface lies a nation grappling with modern challenges.",
    createdAt: new Date().toISOString(),
    likes: 120,
  },
  {
    id: getID(),
    title: "Switzerland: Beyond the Alps",
    author: "Friedrich Müller",
    text: "While Switzerland is renowned for its neutrality and scenic beauty, recent political shifts have caused ripples in this otherwise calm nation.",
    createdAt: new Date().toISOString(),
    likes: 58,
  },
  {
    id: getID(),
    title: "Bosnia & Herzegovina: A Land of Contrasts",
    author: "Enes Jusović",
    text: "Bosnia and Herzegovina, a country of deep historical roots and diverse cultures, is struggling to find its place in the modern world. The challenges are immense, but so are the opportunities.",
    createdAt: new Date().toISOString(),
    likes: 75,
  },
  {
    id: getID(),
    title: "Life in Norway: A Tale of Resilience",
    author: "Tarik Bekirić",
    text: "Norway's stunning landscapes and high standard of living often overshadow the struggles of everyday life. This is a story of finding balance in a land where nature reigns supreme.",
    createdAt: new Date().toISOString(),
    likes: 204,
  },
  {
    id: getID(),
    title: "Australia: The Other Side of the Coin",
    author: "Edis Šuljević",
    text: "Australia's reputation as a land of opportunity contrasts with the harsh realities faced by those who find themselves on the fringes of society.",
    createdAt: new Date().toISOString(),
    likes: 15,
  },
])
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});
