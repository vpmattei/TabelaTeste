import React from "react";
import { render } from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
import InfiniteScroll from "react-infinite-scroll-component";

const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];

export default class Table extends React.Component {
  state = {
    products: []
  };

  fetchMoreData = () => {
    const startId = this.state.products.length + 1;
    for (let i = 0; i < 10; i++) {
      const id = startId + i;
      this.state.products.push({
        id: id,
        name: "Tabela nº" + id,
        price: 2100 + i + " R$"
      });
    }
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

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.products.length}
        next={this.fetchMoreData()}
        hasMore
        loader={<h4>Carregando...</h4>}
      >
        <BootstrapTable
          keyField="id"
          data={this.state.products}
          columns={columns}
          striped
          hover
          cellEdit={cellEditFactory({ mode: "dbclick" })}
        />
      </InfiniteScroll>
    );
  }
}

render(<Table />, document.getElementById("root"));
