import { useEffect, useState } from "react";
import axios from "axios";



function Home() {  

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>This is the Home page.</p>
<h1>Top Products</h1>
{products.map((p, i) => (
  <div key={i}>
    <h3>{p.name}</h3>
    <p>Price: ${p.price}</p>
  </div>
))}

      <h2>Products:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;