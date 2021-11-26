const firebase_Domain='https://ab-company-a828d-default-rtdb.firebaseio.com';


export async function getAllProduct() {
  const response = await fetch(`${firebase_Domain}/Products.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Products.');
  }

  const LoadedProducts= [];

  for (const key in data) {
    const ProductObj = {
      id: key,
      ...data[key],
    };

    LoadedProducts.push(ProductObj);
  }

  return LoadedProducts;
}

export async function getSingleProduct(productId) {
    const response = await fetch(`${firebase_Domain}/Products/${productId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch product.');
    }
  
    const loadedProduct = {
      id: productId,
      ...data,
    };
  
    return loadedProduct;
  }

