// import { Layout, Product, Search, Sort } from '../../components'
// // ^ this import comes from src/components/index.js (will be used in the function below)

// const Products = () => {
//   return (
//     <div>
//       <h2>This will be the products page</h2>
//     </div>
//   )
// }

// export default Products;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// import { Layout, Product, Search, Sort } from '../../components'
import { Layout, Product, Search } from "../../components";
// import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import { getProducts } from "../../services/products";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  // const [applySort, setApplySort] = useState(false)
  // const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  // const handleSort = (type) => {
  //   if (type !== '' && type !== undefined) {
  //     setSortType(type)
  //   }
  //   switch (type) {
  //     case 'name-ascending':
  //       setSearchResult(AZ(searchResult))
  //       break
  //     case 'name-descending':
  //       setSearchResult(ZA(searchResult))
  //       break
  //     case 'price-ascending':
  //       setSearchResult(lowestFirst(searchResult))
  //       break
  //     case 'price-descending':
  //       setSearchResult(highestFirst(searchResult))
  //       break
  //     default:
  //       break
  //   }
  // }

  // if (applySort) {
  //   handleSort(sortType)
  //   setApplySort(false)
  // }

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    //setApplySort(true)
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>

      
      {/* <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
      
      <div className="products-wrapper">

      <div className="search-wrapper">
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      </div>
      



      <div className="products">
        {searchResult.map((product, index) => {
          return (
            <Product
              _id={product._id}
               name={product.name}
               imgURL={product.imgURL}
               price={product.price}
              // key={index}
            />
          );
        })}
      </div>
      </div>

      <Link className="addProduct" to="/add-product">
        {" "}
        Add Product
      </Link>
    </Layout>
  );
};

export default Products;
