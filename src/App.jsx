import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TERipple } from "tw-elements-react";
import { Link } from "react-router-dom";
import { axiosHelper, getAData, getData, postAData } from "./constant";
import { useState } from "react";
import SigleQueryExample from "./reactQuery/SigleQueryExample";

function App() {
  const [newData, setData] = useState({});
  const [singleData, setSingleData] = useState(false);

  const queryClient = useQueryClient;
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await axiosHelper(getData);
    },
  });

  const { mutate, isError, isPending, ...rest } = useMutation({
    mutationFn:
      // (newPost) =>
      //   fetch("https://fakestoreapi.com/products", {
      //     method: "POST",
      //     body: JSON.stringify(newPost),
      //     headers: { "Content-type": "application/json; charset = UTF-8" },
      //   }),

      // async (newPost) => {
      //   console.log(postAData(newPost));
      //   return await axiosHelper(postAData(newPost));
      // },

      async ({ id }) => {
        console.log(getAData(id));
        return await axiosHelper(getAData(id));
      },
    onSuccess: () => {
      queryClient.invalidateQuries({ queryKey: ["posts"] });
    },
  });

  if (error || isError) return <div>{error.message}!</div>;

  // if (status === "success") {
  //   return setSingleData(true);
  //   // setData(rest?.data);
  // }

  if (isPending || isLoading) return <div>The data is pending</div>;

  return (
    <div className="">
      <div className="py-4 flex justify-end me-2">
        {isPending && <p>DATA IS BEING ADDED...</p>}
        {/* <Link to={"/createPost"}> */}
        <button
          onClick={() =>
            mutate({
              title: "test product",
              price: 13.5,
              description: "lorem ipsum set",
              image: "https://i.pravatar.cc",
              category: "electronic",
            })
          }
          className="p-2 bg-blue-500 text-yellow-300 rounded-md"
        >
          Creat a post
        </button>
        {/* </Link> */}
      </div>
      {(singleData && <SigleQueryExample data={rest?.data} />) || (
        <>
          {data?.map(
            ({ id, title, category, image, price, description }, index) => (
              <div
                key={id}
                className="flex justify-center items-center mt-2 gap-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <Link
                  to={"/prouctId"}
                  className="flex justify-center items-center sm:w-72 p-4 border-2 shadow-md"
                >
                  <img
                    className="rounded-t-lg"
                    width={"200px"}
                    height={"200px"}
                    src={image}
                    alt=""
                  />
                </Link>
                <div className="w-2/3 p-4">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Title: {title}
                  </h5>

                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Category: {category}
                  </p>
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
                  <button
                    type="button"
                    className="inline-block rounded ms-2 bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => mutate({ id: index + 1 })}
                  >
                    Open
                  </button>
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default App;
