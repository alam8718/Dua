import {createContext, useContext, useEffect, useState} from "react";
import fetchData from "./fetchData";
export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [dua, setDua] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState();
  // const [categoryId, setCategoryId] = useState(1);
  const [subCategoryId, setSubCategory] = useState(1);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterSubCategory, setFilterSubCategory] = useState([]);
  const [filterDua, setFilterDua] = useState([]);

  //fetching data form database
  const fetchCategoryData = async () => {
    try {
      const data = await fetchData("category");
      setCategories(data);
      const filterData = data.filter((item) => item.cat_id === subCategoryId);
      setFilterCategory(filterData[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSubCategoryData = async () => {
    try {
      const data = await fetchData("sub_category");
      setSubCategories(data);
      const filterData = data.filter((item) => item.cat_id === subCategoryId);
      setFilterSubCategory(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDuaData = async () => {
    try {
      const data = await fetchData("dua");
      setDua(data);
      const filterData = data.filter((item) => item.cat_id === subCategoryId);
      setFilterDua(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchSubCategoryData();
    fetchDuaData();
  }, []);

  useEffect(() => {
    fetchDuaData();
    fetchCategoryData();
    fetchSubCategoryData();
  }, [subCategoryId]);

  console.log("I am category", categories);
  console.log("I am sub_category", subCategories);
  console.log("I am dua", dua);
  console.log("I am filter dua ", filterDua);
  console.log("i am id ", subCategoryId);
  console.log("i am filtecategory ", filterCategory);
  console.log("i am filte sub cat ", filterSubCategory);

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
        setSubCategory,
        filterDua,
        filterCategory,
        filterSubCategory,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
