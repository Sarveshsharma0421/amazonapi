let express = require ('express');
let {dbConnect, getData} = require ('./controller/dbController')
let app = express();
let port = 9110;
let cors = require ('cors');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require ('./swagger.json');
let package = require('./package.json')

swaggerDocument.info.version = package.version;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());

 app.get('/health', (req, res) =>{
    res.send('Hii From Express')
 });

 app.get('/category', async (req, res) =>{
   let query = {}
   let collection = "category"
   let output = await getData(collection,query)
   res.send(output)
 })

 app.get('/product', async(req, res) =>{
  let query = {}
  let collection = "product";
  let output = await getData(collection,query)
  res.send(output)
 })



 app.get('/productdetail', async(req, res) =>{
  let query = {}
  let collection = "productdetail"
  let output = await getData(collection,query)
  res.send(output)
 })

app.listen(port, () =>{
    try {
        // code that might throw an error
      } catch (err) {
         dbConnect()
        if (err) throw err;
      }
    console.log(`Server is running on port ${port}`)
})





