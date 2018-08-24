import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InfiniteScroll from "react-infinite-scroll-component";
import cellEditFactory from "react-bootstrap-table2-editor";

export default class DemoTable extends React.Component {
  state = {
    products: Array.from({ length: 0 })
  };

  fetchMoreData = () => {
    this.setState({
      //items: this.state.products.concat(Array.from({ length: 20 }))
    });
  };

  test = () => {
    const startId = this.state.products.length;
    for (let i = 0; i < 20; i++) {
      const id = startId + i;
      this.state.products.push({
        id: id,
        name: "Tabela nº" + id,
        price: 2100 + i + " R$"
      });
    }
  };

  test;

  handleInsertBtnClick(e) {
    var newRow = {
      id: this.state.products.length,
      name: "Product one ",
      price: 240
    };
    this.state.products.push({
      id: this.state.products.length,
      name: "Product one ",
      price: 240
    });
    // insert a fake row
    var result = this.refs.table.handleAddRow(this.state.products);
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
        <InfiniteScroll
          dataLength={this.state.products.length}
          next={this.fetchMoreData}
          hasMore
          loader={<h4>Carregando...</h4>}
        >
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
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
          {this.state.products.push({
            id: this.state.products.length,
            name: "Product " + this.state.products.length,
            price: 100
          })}
          {console.log("products.length: " + this.state.products.length)}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<DemoTable />, document.getElementById("root"));
