import axios from "axios";
import * as actionType from "../Constants/ProductTypes";
import { toast, ToastContainer } from "react-toastify";

const url = "https://hair-product-api-buuh.vercel.app";

export const getAllProduct = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/admin/products/${id}`, {
      headers,
    });
    dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const addNewProduct = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // console.log(newData);

    const formData = new FormData();

    formData.append("product_title", newData.product_title);
    formData.append("product_qty", newData.product_qty);
    formData.append("product_tagline", newData.product_tagline);
    formData.append("product_description", newData.product_description);
    newData.product_color_tags.map((data, index) => {
      formData.append(
        `product_color_tags[${index}][name]`,
        newData.product_color_tags[index].name
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
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const formData = new FormData();

    formData.append("product_title", newData.product_title);
    formData.append("product_qty", newData.product_qty);
    formData.append("product_tagline", newData.product_tagline);
    formData.append("product_description", newData.product_description);
    newData.product_color_tags.map((data, index) => {
      formData.append(
        `product_color_tags[${index}][name]`,
        newData.product_color_tags[index].name
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
    formData.append("product_price", newData.product_price);
    formData.append("product_discount", newData.product_discount);

    newData?.preImages?.map((file, index) => {
      formData.append(`preImages${[index]}`, file);
    });
    newData?.product_image?.forEach((file, index) => {
      formData.append(`product_image`, file.name);
    });
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
    const token = localStorage.getItem("token");
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
