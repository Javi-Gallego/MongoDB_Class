//importamos dependencias de librerias
import express from "express"
import "dotenv/config"
import { dbConnection } from "./database/db.js"
import router from "./routes/router.js"

const app = express()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 4001

//API ROUTES

app.get("/API/healthy", (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        }    
    )
})

app.use("/API", router)

dbConnection()
.then( () => {
    console.log("Database connected")

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})

