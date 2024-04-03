const playlist = document.getElementById("playlist");

const config = {
  urlCover: "upload/cover/",
  urlSound: "upload/music/",
};

const lecteur = document.querySelector("#lecteur");

const Music = [
  {
    id: 1,
    cover: "Tonus - La Bite à Dudule.jpg",
    sound: "LaBiteaDudule.mp3",
    title: "La bite a Dudule",
    category: "Variète francaise",
  },
  {
    id: 2,
    cover: "Angèle - Saiyan.jpg",
    sound: "Angele-Saiyan[IA](prod. Lnkhey).mp3",
    title: "Saiyan IA Angèle",
    category: "Remix",
  },
  {
    id: 3,
    cover: "Boblennon - La chanson du Pyro-Barbare.jpg",
    sound: "LachansonduPyro-BarbareparBobLennon[FantaBobGames].mp3",
    title: "Le Pyro-Barbare",
    category: "Remix",
  },
];

Music.forEach((music) => {
  playlist.innerHTML += `<li id=${music.id}><h2>${music.title}</h2> <img src="${config.urlCover}${music.cover}" alt ="${music.title}" ><div><small>${music.category}</small></div></li>`;
});

const allLi = document.querySelectorAll("li");

allLi.forEach((li) => {
  li.addEventListener("click", function (elem) {
    const id = parseInt(li.id);
    const searchById = Music.find((element) => element.id === id);
    alert(`Tu écoute le titre : "${searchById.title}`);
    lecteur.src = `${config.urlSound}${searchById.sound}`;
    lecteur.play();
  });
});

{
  /* <li id="music1">
            <h2>Titre</h2>
            <img src="...">
            <div><small>Category</small></div>
        </li> */
}
