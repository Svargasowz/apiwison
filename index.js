import express from 'express'
import bodyParser from 'body-parser'
import usuario from './src/routes/usuario.routes.js'

const app = express()
const port=3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.set('views engine','ejs');
app.set('views','./views')

app.get("/document",(req,res)=>{
    res.render('document.ejs')
})
app.use(express.static('./public'))
app.use("/user",usuario)


app.listen(port,()=>{
    console.log(`server en el puerto ${port}`)
})