const Carbon = () => <li>carbon</li>;
const Water = () => <li>water</li>;

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {bold: false};
  }

  boldSetter(bold) {
    return () => this.setState({bold: bold});
  }

  render() {
    var style = {fontWeight: this.state.bold ? 'bold' : 'normal'};
    return (
      <span style={style} onMouseEnter={this.boldSetter(true)} onMouseOut={this.boldSetter(false)}>
        {this.props.name}
      </span>
    );
  }
}

const GroceryList = () => (
  <ul>
    <li><GroceryListItem name='carbon'/></li>
    <li><GroceryListItem name='water'/></li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
