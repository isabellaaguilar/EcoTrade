//imports
const express=require('express')
const app = express()
const port = 3001

//static files
app.use(express.static('layers'))
app.use('/layers',express.static(__dirname + 'layers/background'))
app.use('/layers',express.static(__dirname + 'layers/Bottom Lid'))
app.use('/layers',express.static(__dirname + 'layers/Eye color'))
app.use('/layers',express.static(__dirname + 'layers/Eyeball'))
app.use('/layers',express.static(__dirname + 'layers/Iris'))
app.use('/layers',express.static(__dirname + 'layers/Shine'))
app.use('/layers',express.static(__dirname + 'layers/Top lid'))

app.use('/',require('../routes/ruta'))

app.use((req,res,next)=>{
  res.status(404).render("404",{
    titulo: "404",
    description:"titulo del sitio web"
  })
})
app.set('view engine', 'html');
//listen on port
app.listen(port,() => console.info(`Lisntening on port ${port}`)) 