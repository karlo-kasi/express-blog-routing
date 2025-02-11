
const express = require("express")
const app = express()
const port = 3000
const postRouter = require("./routers/posts.js")



app.use(express.static('public'));



app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.use("/posts", postRouter)

app.get("/bacheca", (req,res) => {

    const articoli = [
        {
            titolo: "Introduzione a JavaScript",
            contenuto: "Scopri le basi di JavaScript e come iniziare a programmare.",
            immagine: "/imgs/ciambellone.jpeg",
            tags: ["JavaScript", "Programmazione", "Frontend"]
        },
        {
            titolo: "Guida a Node.js",
            contenuto: "Una guida dettagliata su Node.js per sviluppatori backend.",
            immagine: "/imgs/cracker_barbabietola.jpeg",
            tags: ["Node.js", "Backend", "JavaScript"]
        },
        {
            titolo: "React: La libreria per UI dinamiche",
            contenuto: "Impara a creare interfacce utente interattive con React.",
            immagine: "/imgs/pane_fritto_dolce.jpeg",
            tags: ["React", "Frontend", "UI"]
        },
        {
            titolo: "Python per il Machine Learning",
            contenuto: "Scopri come Python viene usato nel Machine Learning.",
            immagine: "/imgs/pasta_barbabietola.jpeg",
            tags: ["Python", "Machine Learning", "AI"]
        },
        {
            titolo: "Come ottimizzare il SEO del tuo sito",
            contenuto: "Migliora la visibilità del tuo sito sui motori di ricerca.",
            immagine: "/imgs/torta_paesana.jpeg",
            tags: ["SEO", "Marketing", "Web"]
        }
    ];

    res.json(articoli);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})