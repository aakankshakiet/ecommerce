import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col } from "react-bootstrap";
import './availableProduct.scss';

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://ab-company-a828d-default-rtdb.firebaseio.com/Products.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          main_image:responseData[key].image.main_img
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const productsList = products.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        main_image={product.main_image}
      />
    
  ));

  return (
    <section className="mt-5 mb-5">
      <Container >
        <Row>
          <Col className="d-flex justify-content-center ">
            <h3>Products</h3>
          </Col>
        </Row>
        <Row>
          {productsList}
        </Row>
      </Container>
    </section>
  );
};

export default AvailableProducts;
