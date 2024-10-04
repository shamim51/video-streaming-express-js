import express from 'express'
import cors from 'cors'
import {v4 as uuidv4} from 'uuid'

const app = express()

app.get('/', (req , res:any ) =>{
    console.log("hello")
    res.json({
        hello: "hello world"
    })
}
)

app.listen(8000, ()=> console.log("listening on http://localhost:8000"))