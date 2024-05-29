import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosHelper, getAData, postAData } from "../constant";
import PropTypes from "prop-types";
const initialState = {
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};
4;

const ModalComponent = ({ setShowModal }) => {
  ModalComponent.propTypes = {
    setShowModal: PropTypes.bool,
  };
  const [form, setForm] = useState(initialState);

  const { mutate, status } = useMutation({
    mutationFn:
      //   (newPost) =>
      //   fetch("https://fakestoreapi.com/products", {
      //     method: "POST",
      //     body: JSON.stringify(newPost),
      //     headers: { "Content-type": "application/json; charset = UTF-8" },
      //   }),

      async (newPost) => {
        console.log(newPost);
        return await axiosHelper(postAData(newPost));
      },
  });

  const categoryType = [
    { cat: "men's clothing", value: "men's clothing" },
    { cat: "women's clothing", value: "women's clothing" },
    { cat: "jewelery", value: "jewelery" },
    { cat: "electronics", value: "electronics" },
  ];
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    mutate(form);
    if (status === "success") {
      return setShowModal(false);
    }
  };
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" absolute  flex z-50 justify-center items-center w-full max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl text-center uppercase font-semibold text-gray-900 dark:text-white">
              Create New Post
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handelOnSubmit}>
              <div>
                <label
                  htmlFor="title"
                  className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handelOnChange}
                  className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your product title"
                  required
                />
              </div>
              <div className="block">
                <label
                  htmlFor="category"
                  className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={handelOnChange}
                  className="block w-full px-2 py-1 rounded-md"
                  name={"category"}
                >
                  <option value="">--Select a category--</option>
                  {categoryType.map(({ cat, value }, index) => (
                    <option className="py-1" key={index} value={value}>
                      --{cat}--
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="decimal"
                  name="price"
                  onChange={handelOnChange}
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Price of product"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  alt="image"
                  onChange={handelOnChange}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your product Image"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="textarea"
                  rows={5}
                  name="description"
                  onChange={handelOnChange}
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your product description"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create a Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
