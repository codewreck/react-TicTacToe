

 class Board extends React.Component {
   renderSquare(i){
     return <Square value={i}/>
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
       <button className="square" onClick={() => {alert(this.props.value)}}>{this.props.value}</button>
     );
   }
  }

 ReactDOM.render(<Board />, document.getElementById('app'));
