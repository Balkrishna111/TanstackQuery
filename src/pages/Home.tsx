import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["home"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/products").then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='container mx-6'>
      {data.map((item) => (
        <>
          <span>{item.id}</span>
          <br />
        </>
      ))}
    </div>
  );
};

export default Home;
