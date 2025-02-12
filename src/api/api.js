export const fetchAllProducts = () => {
  return fetch("http://localhost:5001/productos").then((response) =>
    response.json()
  );
};

export const fetchProductById = (id) => {
  return fetch(`http://localhost:5001/productos/${id}`).then((response) =>
    response.json()
  );
};
