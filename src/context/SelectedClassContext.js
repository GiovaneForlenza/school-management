import { React, useclassState, createContext, useReducer } from "react";
export const SelectedClassContext = createContext();

const INITIAL_classState = {
  id: null,
  name: null,
  code: null,
  time: null,
  numb_students: null,
  enrolled_students_ids: null,
  lesson: null,
  date_start: null,
  date_end: null,
  status: null,
  teacher: null,
};

export const SELECTED_CLASS_REDUCER_ACTIONS = {
  UPDATE_CLASS: "UPDATE_CLASS",
};

function selectedClassReducer(classState, action) {
  switch (action.type) {
    case SELECTED_CLASS_REDUCER_ACTIONS.UPDATE_CLASS:
      return {
        id: action.payload.id,
        name: action.payload.name,
        code: action.payload.code,
        time: action.payload.time,
        numb_students: action.payload.numb_students,
        enrolled_students_ids: action.payload.enrolled_students_ids,
        lesson: action.payload.lesson,
        date_start: action.payload.date_start,
        date_end: action.payload.date_end,
        status: action.payload.status,
        teacher: action.payload.teacher,
      };
    default:
      return classState;
  }
}

export const SelectedClassContextProvider = (props) => {
  const [classState, dispatch] = useReducer(selectedClassReducer, INITIAL_classState);
  return (
    <SelectedClassContext.Provider value={{ classState, dispatch }}>
      {props.children}
    </SelectedClassContext.Provider>
  );
};
