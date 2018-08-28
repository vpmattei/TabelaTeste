import React from "react";
import { render } from "react-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InfiniteScroll from "react-infinite-scroll-component";

const cellEditProp = {
  mode: "dbclick",
  blurToSave: true
};

export default class DemoTable extends React.Component {
  state = {
    products: []
    //products: Array.from({ length: 0 })
    //erro ocorre se mudarmos o 'length' de 'products' para algo maior que 0,
    //porem se 'setarmos' o tamanho da seguinte forma: products: [1,2,3],
    //rows vazios serão adicionados
  };

  setProductData = () => {
    const startId = this.state.products.length + 1;
    for (let i = 0; i < 100; i++) {
      const id = startId + i;
      this.state.products.push({
        id: id,
        name: "Product n°" + id,
        price: 100 + ",00 $"
      });
    }
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setProductData();
      this.setState({
        //setState é necessário por alguma razão, mesmo que não tenha nada dentro
        //products: this.state.products.concat(Array.from({ length: 20 }))
      });
    }, 1000);
  };

  number = 0;
  render() {
    while (this.number < 1) {
      this.setProductData();
      this.number++;
    }
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.products.length}
          next={this.fetchMoreData}
          hasMore
          loader={<h4>Carregando...</h4>}
        >
          <BootstrapTable data={this.state.products} cellEdit={cellEditProp}>
            <TableHeaderColumn dataField="id" isKey={true}>
              Product ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
        </InfiniteScroll>
      </div>
    );
  }
}

render(<DemoTable />, document.getElementById("root"));
