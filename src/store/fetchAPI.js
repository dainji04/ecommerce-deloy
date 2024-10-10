import { ref } from "vue";

export default function () {
  const listItems = ref([]);
  const lengthList = ref(null);
  const error = ref(null);

  const fetchData = async (nameList) => {
    const URL = `http://localhost:3000/${nameList}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Something went wrong!!");

      listItems.value = await response.json();
      lengthList.value = listItems.value.length;
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };

  const postData = async (nameList, data) => {
    const URL = `http://localhost:3000/${nameList}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(URL, options).then((res) => {
      return res.json();
    });
  };

  function addToCart(item, name) {
    const nameList = "user-products";
    const data = {
      img: item.img,
      name: item.name,
      price: item.price,
      quantity: 1,
      subtotal: "",
      nameList: name,
    };
    postData(nameList, data);
    console.log("added To Cart");
  }
  function addToWishList(item, name) {
    const nameList = "wish-list";

    const data = {
      img: item.img,
      name: item.name,
      price: item.price,
      quantity: 1,
      subtotal: "",
      nameList: name,
    };
    postData(nameList, data);
    console.log("added To WishList");
  }

  // not yet complete
  const editData = async (nameList, data) => {
    const URL = `http://localhost:3000/${nameList}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(URL, options)
      .then((res) => {
        return res.json();
      })
      .then(() => console.log("putted"));
  };
  // not yet complete
  const deleteData = async (nameList, id) => {
    const URL = `http://localhost:3000/${nameList}/${id}`;
    console.log(URL);
    try {
      const res = await fetch(URL, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("delete is failed");
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    listItems,
    lengthList,
    error,
    fetchData,
    postData,
    addToCart,
    addToWishList,
    deleteData,
  };
}
