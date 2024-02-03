import {createContext, useContext, useEffect, useState} from "react";
import fetchData from "./fetchData";

// data
import categoriesData from "../data/categoriesData";
import subCategoriesData from "../data/subCategoriesData";
import duaData from "../data/duaData";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [categories, setCategories] = useState(categoriesData);
  const [subCategories, setSubCategories] = useState(subCategoriesData);
  const [dua, setDua] = useState(duaData);
  const [sideBar, setSideBar] = useState(false);
  const [dropDown, setDropDown] = useState();
  const [subCategoryId, setSubCategory] = useState(1);
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterSubCategory, setFilterSubCategory] = useState([]);
  const [filterDua, setFilterDua] = useState([]);

  //fetching data form database
  // const fetchCategoryData = async () => {
  //   try {
  //     const data = await fetchData("category");
  //     setCategories(data);
  //     const filterData = data.filter((item) => item.cat_id === subCategoryId);
  //     setFilterCategory(filterData[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const fetchSubCategoryData = async () => {
  //   try {
  //     const data = await fetchData("sub_category");
  //     setSubCategories(data);
  //     const filterData = data.filter((item) => item.cat_id === subCategoryId);
  //     setFilterSubCategory(filterData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const fetchDuaData = async () => {
  //   try {
  //     const data = await fetchData("dua");
  //     setDua(data);
  //     const filterData = data.filter((item) => item.cat_id === subCategoryId);
  //     setFilterDua(filterData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategoryData();
  //   fetchSubCategoryData();
  //   fetchDuaData();
  // }, []);

  // useEffect(() => {
  //   fetchCategoryData();
  //   fetchSubCategoryData();
  //   fetchDuaData();
  // }, [subCategoryId]);

  const filterCategoriesData = () => {
    const filterCategoriesData = categories.filter(
      (item) => item.cat_id === subCategoryId
    );
    setFilterCategory(filterCategoriesData[0]);
  };
  const filterSubCategoriesData = () => {
    const filterSubCategoriesData = subCategories.filter(
      (item) => item.cat_id === subCategoryId
    );
    setFilterSubCategory(filterSubCategoriesData);
  };
  const filterDuaData = () => {
    const filterDuaData = dua.filter((item) => item.cat_id === subCategoryId);
    setFilterDua(filterDuaData);
  };

  useEffect(() => {
    filterCategoriesData();
    filterSubCategoriesData();
    filterDuaData();
  }, [subCategoryId]);

  // console.log("I am category", categories);
  // console.log("I am sub_category", subCategories);
  // console.log("I am dua", dua);
  // console.log("I am filter dua ", filterDua);
  // console.log("i am id ", subCategoryId);
  // console.log("i am filtecategory ", filterCategory);
  // console.log("i am filte sub cat ", filterSubCategory);

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
