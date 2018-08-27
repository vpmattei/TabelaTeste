import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InfiniteScroll from "react-infinite-scroll-component";

export default class DemoTable extends React.Component {
  state = {
    products: Array.from({ length: 0 })
  };

  fetchMoreData = () => {
    this.setState({
      //items: this.state.products.concat(Array.from({ length: 20 }))
    });
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.products.length}
          next={this.fetchMoreData}
          hasMore
          loader={<h4>Carregando...</h4>}
        >
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
            name: "Product n°" + this.state.products.length,
            price: 100 + ",00 $"
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<DemoTable />, document.getElementById("root"));
