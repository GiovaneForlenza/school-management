import React, { useState, createContext } from "react";

export const DatabaseContext = createContext();

export const DatabaseContextProvider = (props) => {
  const LOCAL_STORAGE_KEYS = { staff: "staff" };
  const SCHOOL_POSITION = { teacher: "Teacher", coordinator: "Coordinator" };
  const CLASS_STATUS = {
    active: "Active",
    finished: "Finished",
    canceled: "Canceled",
  };

  // TODO(Gionave): diversify the classes and codes, each code HAS to be unique to work as an ID
  const staff = [
    {
      id: 1,
      name: "Gionave",
      position: SCHOOL_POSITION.teacher,
      classes: [
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Antares",
      position: SCHOOL_POSITION.teacher,
      classes: [
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 2,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 2,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 2,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 2,
        },
        {
          name: "ADV 1",
          code: "09-05",
          time: "Thursday, 7-9 PM",
          numb_students: 4,
          lesson: 10,
          date_start: "23/05/2023",
          date_end: "31/10/2023",
          status: CLASS_STATUS.active,
          teacher: 2,
        },
      ],
    },
  ];

  // TODO(Gionave): Populate a list of students to make them take classes
  const students = [{}];


  function createStaffDB() {
    localStorage.setItem(LOCAL_STORAGE_KEYS.staff, JSON.stringify(staff));
  }

  function getDataFromKey(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  const getClassesDataFromStaffId = (id) => {
    const staffData = getDataFromKey(LOCAL_STORAGE_KEYS.staff);
    // console.log(staffData);
    let data;
    staffData.map((staff) => {
      if (staff.id === id) {
        data = staff.classes;
      }
    });
    return data;
  };

  return (
    <DatabaseContext.Provider
      value={{
        SCHOOL_POSITION,
        staff,
        LOCAL_STORAGE_KEYS,
        CLASS_STATUS,
        createStaffDB,
        getDataFromKey,
        getClassesDataFromStaffId,
      }}
    >
      {props.children}
    </DatabaseContext.Provider>
  );
};
