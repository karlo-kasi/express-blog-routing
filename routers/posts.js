


const express = require("express")
const router = express.Router()

const articoli = [
    {
        id: 1,
        titolo: "Introduzione a JavaScript",
        contenuto: "Scopri le basi di JavaScript e come iniziare a programmare.",
        immagine: "/imgs/ciambellone.jpeg",
        tags: ["JavaScript", "Programmazione", "Frontend"]
    },
    {
        id: 2,
        titolo: "Guida a Node.js",
        contenuto: "Una guida dettagliata su Node.js per sviluppatori backend.",
        immagine: "/imgs/cracker_barbabietola.jpeg",
        tags: ["Node.js", "Backend", "JavaScript"]
    },
    {
        id: 3,
        titolo: "React: La libreria per UI dinamiche",
        contenuto: "Impara a creare interfacce utente interattive con React.",
        immagine: "/imgs/pane_fritto_dolce.jpeg",
        tags: ["React", "Frontend", "UI"]
    },
    {
        id: 4,
        titolo: "Python per il Machine Learning",
        contenuto: "Scopri come Python viene usato nel Machine Learning.",
        immagine: "/imgs/pasta_barbabietola.jpeg",
        tags: ["Python", "Machine Learning", "AI"]
    },
    {
        id: 5,
        titolo: "Come ottimizzare il SEO del tuo sito",
        contenuto: "Migliora la visibilità del tuo sito sui motori di ricerca.",
        immagine: "/imgs/torta_paesana.jpeg",
        tags: ["SEO", "Marketing", "Web"]
    }
];


//index
router.get("/", (req, res) => {
    res.json(articoli);
})
//show
router.get("/:id", (req, res) => {
    const oggettoSingolo = articoli.find ((element) => (element.id === parseInt(req.params.id)) ? (element) : null)
    res.json(oggettoSingolo)
})
//store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post ")
})
//update
router.put("/:id", (req, res) => {
    res.send("Modifica integrale del post " + req.params.id)
})
// modify
router.patch("/:id", (req, res) => {
    res.send("Modifica parziale del post " + req.params.id)
})
// destroy
router.delete("/:id", (req, res) => {
    res.send("Eliminazione del post " + req.params.id)
})

module.exports = router