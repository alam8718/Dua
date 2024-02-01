const fetchData = async (tableName) => {
  try {
    const response = await fetch(
      `http://localhost:3004/api/data?table=${tableName}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jsonData = await response.json();
    // console.log(jsonData);
    return jsonData
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default fetchData
