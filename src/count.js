import { PureComponent} from "react";

class Counter extends PureComponent{   
    constructor(){
        super();
        this.state={counter:0}
    }
    componentDidMount(){
        console.log("after rend method");
        const inp=document.getElementById("input1"); 
        inp.focus()
    }
   
    increment=()=>{
        this.setState({counter:this.state.counter+1});
        
    };
    decrement=()=>{
        this.setState({counter:this.state.counter-1});
    };
    render() {
        
        return(<div><div><input type="text" id="input1"  ></input></div>
        <div><h1 >Count : {this.state.counter}</h1></div>
       <div>
        <button type="button" id="inc" onClick={this.increment}>Increment</button>
        <button id="dec" onClick={this.decrement} >Decrement</button></div>
        </div>
        

        )

        
    }
}
export default Counter;