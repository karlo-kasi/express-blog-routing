
const express = require("express")
const app = express()
const port = 3000
const postRouter = require("./routers/posts.js")


app.use(express.json())
app.use(express.static('public'));



app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.use("/posts", postRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})