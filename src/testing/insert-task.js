const ADD_ROW = "task/insert-row";

export default function reducer(dataSet = [], action) {
  switch (action.type) {
    case ADD_ROW:
      // HERE, return the previous state with the new row
      return [...dataSet, action.row];
    default:
      return dataSet;
  }
}

// action
export function addRow(row) {
  return {
    type: ADD_ROW,
    row: row
  };
}
