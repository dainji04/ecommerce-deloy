import { ref } from "vue";

export default function () {
  const listItems = ref([]);
  const lengthList = ref(null);
  const error = ref(null);
  const URL = `https://database-fake-api.vercel.app/`;
  // const URL = `http://localhost:3000/`;
  const fetchData = async (nameList) => {
    try {
      const response = await fetch(URL + nameList);
      if (!response.ok) throw new Error("Something went wrong!!");

      listItems.value = await response.json();
      lengthList.value = listItems.value.length;
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };

  const postData = async (nameList, data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(URL + nameList, options).then((res) => {
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
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(URL + nameList, options)
      .then((res) => {
        return res.json();
      })
      .then(() => console.log("putted"));
  };
  // not yet complete
  const deleteData = async (nameList, id) => {
    let newURL = `${URL}${nameList}/${id}`;
    console.log(newURL);
    try {
      const res = await fetch(newURL, {
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
