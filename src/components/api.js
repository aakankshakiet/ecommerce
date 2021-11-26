
export async function getSingleProduct(productId) {
    const response = await fetch(`https://ab-company-a828d-default-rtdb.firebaseio.com/Products/${productId}.json`);
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

