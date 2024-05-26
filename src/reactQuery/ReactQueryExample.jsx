import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { TERipple } from "tw-elements-react";

const ReactQueryExample = () => {
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
    <div className="">
      {newDatas?.data?.map(
        ({ id, title, category, image, price, description }, index) => (
          <div
            key={id}
            className="flex justify-center items-center mt-2 gap-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <a
              href="#!"
              className="flex justify-center items-center sm:w-72 p-4 border-2 shadow-md"
            >
              <img
                className="rounded-t-lg"
                width={"200px"}
                height={"200px"}
                src={image}
                alt=""
              />
            </a>
            <div className="w-2/3 p-4">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Title: {title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {description}
              </p>
              <p className="text-white text-3xl font-bold mb-2">${price}</p>
              <TERipple>
                <button
                  type="button"
                  className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Buy
                </button>
              </TERipple>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ReactQueryExample;
