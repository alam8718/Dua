import {createContext, useContext, useEffect, useState} from "react";
import fetchData from "./fetchData";
export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [dua, setDua] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const [dropDown, setDropDown] = useState(false);

  //fetching data form database
  const fetchCategoryData = async () => {
    try {
      const data = await fetchData("category");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSubCategoryData = async () => {
    try {
      const data = await fetchData("sub_category");
      setSubCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDuaData = async () => {
    try {
      const data = await fetchData("dua");
      setDua(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchSubCategoryData();
    fetchDuaData();
  }, []);
  console.log("I am category", categories);
  console.log("I am sub_category", subCategories);
  console.log("I am dua", dua);

  return (
    <AppContext.Provider
      value={{
        categories,
        subCategories,
        dua,
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
