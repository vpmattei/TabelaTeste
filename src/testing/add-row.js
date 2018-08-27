import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InsertDefaultValueTable from "../insert-default-value-table";

const jobs = [];
const jobTypes = [
  {
    value: "A",
    text: "TYPE_A"
  },
  {
    value: "B",
    text: "TYPE_B"
  },
  {
    value: "C",
    text: "TYPE_C"
  },
  {
    value: "D",
    text: "TYPE_D"
  }
];

const cellEditProp = {
  mode: "click",
  blurToSave: true
};

export default class addRow extends InsertDefaultValueTable {
  render() {
    return function addRows(rows) {
      for (let i = 0; i < rows; i++) {
        <BootstrapTable>
          <TableHeaderColumn dataField="id" isKey={true}>
            Job ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            editable={{ type: "textarea", defaultValue: "Default Job Name" }}
          >
            Job Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="type"
            dataFormat={this.formatType}
            editable={{
              type: "select",
              options: { values: jobTypes },
              defaultValue: "C"
            }}
          >
            Job Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="active"
            editable={{
              type: "checkbox",
              options: { values: "Y:N" },
              defaultValue: "N"
            }}
          >
            Active
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="datetime"
            editable={{ type: "datetime" }}
          >
            Date Time
          </TableHeaderColumn>
        </BootstrapTable>;
      }
    };
  }
}

render(<InsertDefaultValueTable />, document.getElementById("root"));
