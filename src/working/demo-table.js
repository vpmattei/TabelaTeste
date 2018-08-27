import { connect } from "react-redux";
import { addRow } from "./insert-task";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class DemoTable extends React.Component {
  handleInsertBtnClick() {
    var fakeRow = {
      id: 10,
      name: "Product one ",
      price: 240
    };
    // insert a fake row
    const { dispatch } = this.props;
    dispatch(addRow(fakeRow));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleInsertBtnClick.bind(this)}>
          insert an row
        </button>
        <BootstrapTable ref="table" data={this.props.dataSet}>
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

export default connect(state => ({
  dataSet: state.dataSet
}))(DemoTable);
