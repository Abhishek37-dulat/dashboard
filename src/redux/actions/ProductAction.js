import axios from "axios";
import * as actionType from "../Constants/ProductTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllProduct = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/admin/products`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/admin/products/${id}`, {
      headers,
    });
    localStorage.removeItem("SingleProduct");
    localStorage.setItem("SingleProduct", JSON.stringify(data.data.data));
    dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const addNewProduct = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("newData: ", newData);

    const formData = new FormData();

    formData.append("product_title", newData.product_title);
    formData.append("product_qty", newData.product_qty);
    formData.append("product_tagline", newData.product_tagline);
    formData.append("product_description", newData.product_description);
    formData.append("product_length", newData.product_length);
    formData.append("product_breadth", newData.product_breadth);
    formData.append("product_height", newData.product_height);
    formData.append("product_weight", newData.product_weight);
    formData.append("product_gender", newData.product_gender);
    formData.append("product_video", newData.product_video);
    formData.append("product_density", newData.product_density);
    newData.product_color_tags.map((data, index) => {
      formData.append(
        `product_color_tags[${index}][name]`,
        newData.product_color_tags[index].name
      );
    });
    newData.product_steps.map((data, index) => {
      formData.append(
        `product_steps[${index}][title]`,
        newData.product_steps[index].title
      );

      formData.append(
        `product_steps[${index}][description]`,
        newData.product_steps[index].description
      );
      formData.append(
        `product_steps[${index}][link]`,
        newData.product_steps[index].link
      );
    });
    newData.product_size_tags.map((data, index) => {
      formData.append(
        `product_size_tags[${index}][size]`,
        newData.product_size_tags[index].size
      );
      formData.append(
        `product_size_tags[${index}][type]`,
        newData.product_size_tags[index].type
      );
    });
    console.log("sending final data");
    formData.append(
      `product_categories[name]`,
      newData.product_categories.name
    );

    newData.product_categories.subCategories.map((data, index) => {
      formData.append(
        `product_categories[subCategories][${index}][name]`,
        data.name
      );
    });
    console.log("resiving final data");
    formData.append("product_price", newData.product_price);
    formData.append("product_discount", newData.product_discount);

    newData.product_image.forEach((file, index) => {
      formData.append(`product_image`, file.name);
    });
    console.log(formData);

    const data = await axios.post(`${url}/product/admin/products`, formData, {
      headers,
    });
    console.log(data);
    dispatch({ type: actionType.POST_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_POST_PRODUCT, error: error });
  }
};

export const updateNewProduct = (id, newData) => async (dispatch) => {
  console.log("Baaa");
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log("BBBBBBBBB", newData);
    const formData = new FormData();

    formData.append("product_title", newData.product_title);
    formData.append("product_qty", Number(newData.product_qty));
    formData.append("product_tagline", newData.product_tagline);
    formData.append("product_description", newData.product_description);
    formData.append("product_length", newData.product_length);
    formData.append("product_breadth", newData.product_breadth);
    formData.append("product_height", newData.product_height);
    formData.append("product_weight", newData.product_weight);
    formData.append("product_gender", newData.product_gender);
    formData.append("product_video", newData.product_video);
    formData.append("product_density", newData.product_density);
    console.log("formData5:");
    console.log(formData.values);
    newData.product_color_tags.map((data, index) => {
      formData.append(
        `product_color_tags[${index}][name]`,
        newData.product_color_tags[index].name
      );
    });

    console.log("formData6:");
    console.log(newData);
    newData.product_steps.map((data, index) => {
      formData.append(
        `product_steps[${index}][title]`,
        newData.product_steps[index].title
      );

      formData.append(
        `product_steps[${index}][description]`,
        newData.product_steps[index].description
      );
      formData.append(
        `product_steps[${index}][link]`,
        newData.product_steps[index].link
      );
    });
    console.log("formData7:");
    console.log(formData.values);

    newData.product_size_tags.map((data, index) => {
      formData.append(
        `product_size_tags[${index}][size]`,
        newData.product_size_tags[index].size
      );

      formData.append(
        `product_size_tags[${index}][type]`,
        newData.product_size_tags[index].type
      );
    });
    formData.append(
      `product_categories[name]`,
      newData.product_categories.name
    );

    newData?.product_categories?.subCategories?.map((data, index) => {
      formData.append(
        `product_categories[subCategories][${index}][name]`,
        data.name
      );
    });
    console.log("formData8:");
    console.log(formData.values);
    formData.append("product_price", newData.product_price);
    formData.append("product_discount", newData.product_discount);

    newData?.preImages?.forEach((file, index) => {
      formData.append(`preImages[${index}]`, file);
    });

    newData?.product_image?.forEach((file, index) => {
      formData.append(`product_image`, file.name);
    });
    console.log("formData9:");
    console.log(formData.values);
    const data = await axios.put(
      `${url}/product/admin/products/${id}`,
      formData,
      {
        headers,
      }
    );
    console.log(data);
    dispatch({ type: actionType.PUT_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_PUT_PRODUCT, error: error });
  }
};

export const deleteExistingProduct = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(
      `${url}/product/admin/products/${newData}`,
      {
        headers,
      }
    );

    dispatch({ type: actionType.DELETE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_PRODUCT, error: error });
  }
};
