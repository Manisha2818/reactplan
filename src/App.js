import React, { Component } from 'react'
import './App.css';
import Plan from './Plan'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    items: [],
    text: ""
  }

  handleChange = e =>{
    this.setState({text: e.target.value})
  }

  handleAdd = e => {
    if (this.state.text !==""){
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text:"" });
    }
  }

  handleDelete = id => {
    console.log("Deleted" , id);
    const olditems = [...this.state.items]
    console.log("olditems",olditems)
    const items = olditems.filter((element, i) => {
      return i !==id
    })
    this.setState({items:items});
  }
  render () {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control"placeholder="Write Plan Here " value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {/* <Plan /> */}
                  {/* {console.log(this.state.items)} */}

                  {
                    this.state.items.map((value , i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })
                  }

                </ul>
              </div>

            </div>

          </div>
          
        </div>

      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//      <h1>Today's Plan</h1>
//     </div>
//   );
// }

// export default App;
