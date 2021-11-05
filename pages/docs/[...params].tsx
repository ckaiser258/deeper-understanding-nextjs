import { useRouter } from "next/router";

// Catch-all route
// http://localhost:3000/docs/feature1/concept1/example1 will all lead to this page
// HOWEVER, http://localhost:3000/docs will lead to a 404 page since this is not an OPTIONAL catch-all route
// Changing the file name to [[..params]] would make it optional, so then /docs would return the docs home page

const Doc = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  //   Logs ['feature1', 'concept1', 'example1'] when navigating to /feature1/concept1/example1

  if (params?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params?.length === 1) {
    return <h1> Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Docs Home Page</h1>;
};

export default Doc;
