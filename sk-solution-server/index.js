import express from 'express'
import cors from 'cors'
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 3000
import { MongoClient, ServerApiVersion,ObjectId } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.arcr8sz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.use(cors());
app.use(express.json());



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const productCollection = client.db('productDB').collection('products');
    const cartCollection = client.db('cartDB').collection('myCart');


    app.post('/products',async(req,res)=>{
        const product = req.body;
        const result = await productCollection.insertOne(product);
        res.send(result);
        
    })

    app.get('/products',async(req,res)=>{
        const query = productCollection.find();
        const result = await query.toArray();
        res.send(result);
    })

    app.get('/products/:id',async(req,res)=>{
        const id = req.params.id;
        const query = { _id : new ObjectId(id) };
        const result = await productCollection.findOne(query);
        res.send(result);
    })

    app.put('/products/:id',async(req,res)=>{
        const id = req.params.id;
        const product = req.body;
        const query = { _id : new ObjectId(id) }
        const options = { upsert : true }
        const update = {
            $set :{
                name:product.name,
                brand:product.brand,
                type:product.type,
                price:product.price,
                image:product.image,
                ratting:product.ratting,
                desc:product.desc,
            }
        }
        const result = await productCollection.updateOne(query,update,options);
        res.send(result);
    })


    //create cart route fot post,find all and find by id and delete

    app.post('/cart',async(req,res)=>{
        const cart = req.body;
        const result = await cartCollection.insertOne(cart);
        res.send(result);
    })

    app.get('/cart',async(req,res)=>{
          const query = cartCollection.find();
          const result = await query.toArray();
          res.send(result);
    })

    app.get('/cart/:id',async(req,res)=>{

      const id = req.params.id;
      const query = { _id : new ObjectId(id) }
      const result = await cartCollection.findOne(query);
      res.send(result);
    })

    app.delete('/cart/:id',async(req,res)=>{
          
          const id = req.params.id;
          const query = { _id : new ObjectId(id)};
          const result = await cartCollection.deleteOne(query);
          res.send(result);
    })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//check
app.get('/',(req,res)=>{
    res.send('connected successfully')
})

app.listen(port,()=>{
    console.log('from port',port)
})