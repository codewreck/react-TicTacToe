class Board extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      squares: Array(9).fill('X')
    }
  }
  // handleDeleteX() {
  //   this.setState(() => {
  //     return {
  //       squares: Array(9).fill('0')
  //     }
  //   })
  // }
  handleClick(i) {
    const squares = this.state.squares;
    squares[i] = '0';
    this.setState(() => {
      return {
        squares: squares
      }
    })
  }
  renderSquare(i){
    return <Square
      value={this.state.squares[i]}
      handleClick={() => this.handleClick(i)}
      // handleDeleteX={this.handleDeleteX}
    />;
  }
  render(){
    return (
     <div>
      <div>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div>
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div>
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
    )
  }
}

class Square extends React.Component {

  render(){
    return (
      <button className="square" onClick={() => this.props.handleClick()}>{this.props.value}</button>
    );
  }
 }

ReactDOM.render(<Board />, document.getElementById('app'));
