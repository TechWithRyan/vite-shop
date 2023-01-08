import express from "express"
import mysql from "mysql"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '1291@Mysql',
    database: 'database'
})



app.get('/', (req, res) => {
    res.json({message: 'My server is running...'});
});

app.post('/products', (req, res) => {

    const q = "INSERT INTO products(`Title`, `Description`)VALUES(?)";
    const values = [req.body.title, req.body.description];

    db.query(q, [values],(err, data) => {
        if (err) 
          return res.json(err);

        return res.json("Vi har lagt in en produkt"); 
    })

})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) 
        {
          return res.json(err);
        }
        return res.json(data);
      });
    });

//Add products to database HTTP request to DB. Endpoint. 
add.post("/products", (req, res ) => {
    const q = "INSERT INTO products(`Title`, `Description`, `Img`, `Price`) VALUES(?)";
    const values = [
        req.body.Title,
        req.body.Description,
        req.body.Img,
        req.body.Price,
    ];
    db.query(q, [values], (err, data) => {
        if (err) 
        return res.send(err);
        return res.json("Added product");
    });
});



app.listen(8080, () => {
    console.log('Servern är igång...');
});
