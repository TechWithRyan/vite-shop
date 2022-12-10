const express = require('express');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extend: true
}));

app.get('/', (req, res) => {
    res.json({message: 'My server is running...'});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});
