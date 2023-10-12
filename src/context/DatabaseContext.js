import React, { useState, createContext } from "react";
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
  function generateRandomClassInfo() {
    const classes = [
      "Kids 1",
      "Kids 2",
      "Kids 3",
      "Kids 4",
      "Kids 5",
      "Tweens 1",
      "Tweens 2",
      "Tweens 3",
      "Tweens 4",
      "Teens 1",
      "Teens 2",
      "Teens 3",
      "Teens 4",
      "Teens 5",
      "Book 1",
      "Book 2",
      "Book 3",
      "Book 4",
      "Keep Talking 1",
      "Keep Talking 2",
      "Keep Talking 3",
      "Advanced 1",
      "Advanced 2",
      "Advanced 3",
    ];
    const time = [
      "8-10 AM",
      "10-12 PM",
      "12-2 PM",
      "2-4 PM",
      "4-6 PM",
      "6-8 PM",
      "8-10 PM",
    ];
    const code = `${Math.round(Math.random() * 9)}${Math.round(
      Math.random() * 9
    )}-${Math.round(Math.random() * 9)}${Math.round(Math.random() * 9)}`;
    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    for (let index = 0; index < 4; index++) {
      const sDay = Math.round(Math.random() * 27) + 1;
      const sMonth = Math.round(Math.random() * 12) + 1;
      const sYear = Math.round(Math.random() * (2023 - 2020)) + 2020;
      console.log(`
    {id: ${index},
    name: '${classes[Math.floor(Math.random() * classes.length)]}',
    code: '${code}',
    time: '${day[Math.floor(Math.random() * day.length)]}, ${
        time[Math.floor(Math.random() * time.length)]
      }',
    numb_students: ${Math.round(Math.random() * 7) + 3},
    enrolled_students_ids: [],
    lesson: ${Math.round(Math.random() * 27) + 1},
    date_start: '${sDay}/${sMonth}/${sYear}',
    date_end:'${sDay}/${sMonth}/${sYear + 1}',
    status: CLASS_STATUS.ACTIVE,
    teacher: 1},`);
    }
  }
  // generateRandomClassInfo();

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
