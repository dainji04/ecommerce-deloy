import { ref } from "vue";

export default function () {
  const listItems = ref([]);
  const lengthList = ref(null);
  const error = ref(null);
  const fetchData = async (nameList) => {
    const URL = `https://database-fake-api.vercel.app/${nameList}`;
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
  return { listItems, lengthList, error, fetchData };
}
