import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class DemoTable extends React.Component {
  state = {
    products: Array.from({ length: 0 })
  };

  handleInsertBtnClick(e) {
    var fakeRow = {
      id: 10,
      name: "Product one ",
      price: 240
    };
    // insert a fake row
    var result = this.refs.table.handleAddRow(fakeRow);
    if (result) {
      //some error happen, ex: doesn't assign row key or row key duplicated
      console.log(result);
    }
  }

  handleDropBtnClick(e) {
    //Drop row key 2 & 3
    this.refs.table.handleDropRow([2, 3]);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleInsertBtnClick.bind(this)}>
          insert an row
        </button>
        <button onClick={this.handleDropBtnClick.bind(this)}>
          Drop Product ID 2 and 3
        </button>
        <BootstrapTable ref="table" data={this.state.products}>
          <TableHeaderColumn dataField="id" isKey={true}>
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
render(<DemoTable />, document.getElementById("root"));
