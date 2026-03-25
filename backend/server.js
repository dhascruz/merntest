const express = require('express');
const cors = require('cors');



const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use("/api/products",(req,res ) => {
    res.json([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 5.99 },
    ]);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});