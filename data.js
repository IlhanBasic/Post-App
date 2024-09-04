const { v4: getID } = require("uuid");
let posts = [
    {
      id: getID(),
      author: "Elvir Malagic",
      title: "Moj život u Njemačkoj",
      text: "Nije lako živjeti u inostranstvu...",
      createdAt: "2024-09-01",
      likes: 34,
    },
    {
      id: getID(),
      author: "Lejla Hasanovic",
      title: "Studiranje u Kanadi",
      text: "Studiranje u Kanadi je bila jedna od najboljih odluka koje sam donijela...",
      createdAt: "2024-08-15",
      likes: 27,
    },
    {
      id: getID(),
      author: "Damir Begic",
      title: "Posao u Švedskoj",
      text: "Raditi u Švedskoj je bilo izazovno, ali sam se brzo prilagodio...",
      createdAt: "2024-07-30",
      likes: 45,
    },
    {
      id: getID(),
      author: "Sara Dzafic",
      title: "Život u Australiji",
      text: "Australija je zemlja mogućnosti, ali prilagođavanje je teško...",
      createdAt: "2024-08-22",
      likes: 52,
    },
  ];
module.exports = posts;