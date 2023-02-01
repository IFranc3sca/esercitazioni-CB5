import { useRouter } from "next/router";

const Pages = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);

  return <h1>Pagina dinamica Pages: {id}</h1>;
};

export default Pages;
