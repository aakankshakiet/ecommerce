import React, { useEffect } from 'react';
import useHttp from '../CustomHook/useHttp';
import { getAllProduct } from '../api';
import ProductItem from './ProductItem';
import NotFound from '../Pages/NotFound';
import './availableProduct.scss';
import { Container, Row, Col } from "react-bootstrap";

const AvailableProducts = () => {
  const { sendRequest, status, data: LoadedProducts, error } = useHttp(
    getAllProduct,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div >
        <p>Pending...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === 'completed' && (!LoadedProducts || LoadedProducts.length === 0)) {
    return <NotFound />;
  }

  const productsList = LoadedProducts.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        main_image={product.image.main_img}
      />
  ));

  return (
    <section className="mt-5 mb-5">
      <Container >
        <Row>
          <Col className="d-flex justify-content-center ">
            <h3 className="products_heading heading">Products</h3>
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
