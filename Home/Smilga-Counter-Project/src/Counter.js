import React from "react";
import {connect} from "react-redux"
import {decrease,increase,reset,modalOpen} from './actions'


function Counter({name,count,increase,decrease,reset, modalOpen}) {
  
  
  // const [count,setCount] = React.useState(34)
  return <div className="container">
    <h1>counter</h1>
    <h2>{name}</h2>
    <p className="counter">{count}</p>
    <div className="buttons">
      <button type="button" className="btn" onClick={decrease}>decrease</button>
      <button type="button" className="btn" onClick={()=> {
        reset()
        modalOpen('susan','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, molestias maiores beatae unde debitis autem rem nobis sapiente totam ratione.')
      }}>reset</button>
      <button type="button" className="btn" onClick={increase}>increase</button>
    {/* <button type="button" className="btn" onClick={() => props.dispatch({type:INCREASE})}>increase</button> */}
    </div>
  </div>
}
function mapStateToProps({countState:{count,name}}){
  
  return {count:count, name:name}
}


// function mapDispatchToProps(dispatch,ownProps){
//   console.log(ownProps);
  
//   return {
//     increase:()=> dispatch(increase()),
//     decrease:()=> dispatch(decrease()),
//     reset:()=> {
//       dispatch(reset())
//       dispatch(modalOpen('susan','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, molestias maiores beatae unde debitis autem rem nobis sapiente totam ratione.'))
//     }
//   }

// }

export default connect(mapStateToProps,{
  increase,
  reset,
  decrease,
  modalOpen
})(Counter);

