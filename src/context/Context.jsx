import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [tableName, setTableName] = useState("category");
  const [fetchedData, setFetchedData] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  //fetching data form database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3004/api/data?table=${tableName}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        // console.log(jsonData);
        setFetchedData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(fetchedData);
  console.log(dropDown);

  return (
    <AppContext.Provider
      value={{
        fetchedData,
        setTableName,
        sideBar,
        setSideBar,
        setDropDown,
        dropDown,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
