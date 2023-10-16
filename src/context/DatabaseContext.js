import React, {  createContext } from "react";
import { students } from "../database/Students";
import { classes } from "../database/Classes";
import { staff } from "../database/Staff";

export const DatabaseContext = createContext();
const LOCAL_STORAGE_KEYS = {
  STAFF: "staff",
  STUDENTS: "students",
  CLASSES: "classes",
};

export const DatabaseContextProvider = (props) => {
  

  function createInitialDBs() {
    localStorage.setItem(LOCAL_STORAGE_KEYS.STAFF, JSON.stringify(staff));
    localStorage.setItem(LOCAL_STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    localStorage.setItem(LOCAL_STORAGE_KEYS.CLASSES, JSON.stringify(classes));
  }

  function getDataFromKey(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  const getClassesDataFromStaffId = (id) => {
    const classesData = getDataFromKey(LOCAL_STORAGE_KEYS.CLASSES);

    const data = classesData.filter((classData) => classData.teacher === id);
    return data;
  };


  return (
    <DatabaseContext.Provider
      value={{
        LOCAL_STORAGE_KEYS,
        createInitialDBs,
        getDataFromKey,
        getClassesDataFromStaffId,
      }}
    >
      {props.children}
    </DatabaseContext.Provider>
  );
};
