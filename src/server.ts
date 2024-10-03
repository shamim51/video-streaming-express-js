import express from 'express'

const app = express()

app.get('/', (req , res )=>
    console.log("hello")
)

app.listen(8000, ()=> console.log("listening on http://localhost:8000"))