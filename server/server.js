import express from "express"
import mysql from 'mysql2';
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
app.post("/products", (req, res ) => {
    const q = "INSERT INTO products(`Title`,`Img`, `Price`, `Description`) VALUES(?)";
    const values = [
        req.body.Title,
        req.body.Img,
        req.body.Price,
        req.body.Description,
    ];
    db.query(q, [values], (err, data) => {
        if (err) 
        return res.send(err);
        return res.json("Added product");
    });
});

app.delete("/products/:id", (req, res) => {
    const productId = req.params.id;
    const q = "DELETE FROM products WHERE id = ?";
    db.query(q, [productId], (err, data) => {
        if (err)
        return res.send(err);
        return res.json(data);
    });
});

app.listen(8080, () => {
    console.log('Servern är igång...');
});
