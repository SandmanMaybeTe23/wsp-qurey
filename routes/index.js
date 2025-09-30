import { time } from "console"
import express from "express"
const router = express.Router()
import fs from "fs"
import { title } from "process"



router.get("/", (req, res) => {

    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })

})


router.get("/about", (req, res) => {

    res.render("about.njk", {
        title: "Om oss",
        message: "Detta är ett skolarbete av Billy."
    })

})

router.get("/greetings", (req, res) => {

    console.log(req.query)
    res.send(`Hejsan ${req.query.name}, ${req.query.message}`)

})



router.get("/move", (req, res) => {
    const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))
    res.json(movies[1]["title"])
   
})

export default router