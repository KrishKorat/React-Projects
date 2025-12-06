import { useEffect, useRef, useState } from "react";
import './LoadMoreData.css';


export default function LoadMoreData() {

  const firstRender = useRef(true);
  
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);


  async function FetchProduct() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count *20
      }`
      );

      const result = await response.json();


      if(result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    }
    catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {

    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    FetchProduct();
  }, [count]);

  useEffect(() => {
    if( products && products.length === 100) {
      setDisabledButton(true);
    }
  }, [products]);


  if(loading) {
    return <div>Loading data! plase wait.</div>
  }
  
  return(
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map(item => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null
        }
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
      {
        disabledButton ? <p>You have reached to 100 roducts.</p> : null
      }
    </div>
  );
}