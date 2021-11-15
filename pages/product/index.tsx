import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        {/* the replace prop replaces the current history state 
        instead of adding a new route to the history stack*/}
        {/* so pressing the back button after clicking Product 3 will bring you to the home page
        instead of back to the products page
        */}
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
};

export default ProductList;
