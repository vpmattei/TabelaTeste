/* eslint max-len: 0 */
import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InfiniteScroll from "react-infinite-scroll-component";

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }
}

addProducts(20);

export default class CleanSortedTable extends React.Component {
  cleanSort = () => {
    this.refs.table.cleanSort();
  };

  fetchMoreData = () => {
    this.setState({
      items: this.state.products.concat(Array.from({ length: 30 }))
    });
  };

  render() {
    return (
      <div>
        <InfiniteScroll>
          <button className="btn btn-default" onClick={this.cleanSort}>
            Clean Sort
          </button>
          <BootstrapTable ref="table" data={products}>
            <TableHeaderColumn dataField="id" isKey dataSort>
              Product ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort>
              Product Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
        </InfiniteScroll>
        {products.push({
          id: products.length,
          name: "Item name " + products.length,
          price: 2100 + products.length
        })}
      </div>
    );
  }
}
render(<CleanSortedTable />, document.getElementById("root"));
