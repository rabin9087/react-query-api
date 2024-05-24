import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const ReactQueryExample = () => {
  const [data, setData] = useState([]);

  const getData = async ({ method, url, data, ...rest }) => {
    const resp = await axios({ method, url, data, rest });
    return resp.data;
  };

  //Fetching the Data

  const newDatas = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      return await getData({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
    },
  });

  return (
    <div>
      {newDatas?.data?.map(
        ({ id, title, category, image, price, description }, index) => (
          <div key={index}>
            <h3>Title: {title}</h3>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <img src={image} width={"200px"} height={"200px"} alt={id} />
            <p>Descriptions: {description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ReactQueryExample;
