import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  //   query.productId because that's the name of the folder
  //   router.query.productId will return whatever number is after /product
  // ex. if the url is /product/1, router.query.productId will return 1
  //   this can also be any string (so /hello would return 'hello')
  //   /sweater would NOT return this page as next is smart enough to check that there is a sweater file that exists here
  const productId = router.query.productId;
  return <h1>Details about product {productId}</h1>;
};

export default ProductDetail;
