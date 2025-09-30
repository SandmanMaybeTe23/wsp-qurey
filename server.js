import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()


import indexRouter from "./routes/index.js"

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.use("/",indexRouter)


// Skriv en ny route, till about sidan
// skapa about sidan, som en njk templat
// på about sidan, ska det finnas en länk till er github, 
// en bild och en text om att detta är ett skolarbete

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
