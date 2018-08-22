import React from "react";
import { render } from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
import InfiniteScroll from "react-infinite-scroll-component";

const products = [];
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

const cellEdit = {
  mode: "click"
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: "Tabela1 nº" + id,
      price: 2100 + i + " R$"
    });
  }
}

addProducts(5);

export default class Table extends React.Component {
  //=====================TESTE========================
  teste = valor => {
    const startId = products.length;
    for (let i = 0; i < valor; i++) {
      const id = startId + i;
      products.push({
        id: id,
        name: "Tabela2 nº" + id,
        price: 2100 + i + " R$"
      });
    }
  };
  //=====================TESTE========================
  render() {
    return (
      <InfiniteScroll
        dataLength={products.length}
        next={this.teste(20)}
        hasMore={true}
        loader={<h4>Carregando...</h4>}
      >
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          striped
          hover
          condensed
          cellEdit={cellEditFactory({ mode: "click" })}
        />
      </InfiniteScroll>
    );
  }
}

render(<Table />, document.getElementById("root"));
