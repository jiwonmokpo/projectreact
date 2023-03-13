import React, { Component } from "react";
//import React from 'react';
import logo from './logo.svg';
import '.App.css';

function App() {
  let [글제목, 글제목변경] = useState(['컴퓨터 개발', 'mbti 성향 분석', '한국어']);

  return (
    <div className = "App">
      <div className = "black-nav">
        <div>컴퓨터 mbti 조사</div>
      </div>
    
    
    <div className = "list">
      <h3> { 글제목[0] } <span> </span> </h3>
    </div>

    <div className = "list">
      <h3> { 글제목[1] } <span> </span> </h3>
    </div>

    <div className = "list">
      <h3> { 글제목[2] } <span> </span> </h3>
    </div>
  </div>
  )
}

export default App;


function Button(props) {
  return <button>{props.label}</button>;
}



export class App1 extends Component {
  
  
  constructor(props) {
    super(props);

  
    
    this.state = {
      selectList : ["Select1", "Select2", "Select3", "Select4", "Select5", "Select6", "Select7", "Select8"] ,
      selectValue : "Select1" 
    };
  }

  handleChange = (s) => {
    console.log(`*****handleChange*****`);
    console.log(`선택한 값 : ${s.target.value}`);

    this.setState({
      selectValue: s.target.value
    });
  };




  render() {
    console.log(`*****render*****`);
    console.log(`this.state.selectValue : ${this.state.selectValue}`);

    return (

      <div className="App">
        동의
        <input
          id="Select1"
          value="Select1"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select1"}
          onChange={this.handleChange}
        />
        
        <input
          id="Select2"
          value="Select2"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select2"}
          onChange={this.handleChange}
        />

        <input
          id="Select3"
          value="Select3"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select3"}
          onChange={this.handleChange}
        />

        <input
          id="Select4"
          value="Select4"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select4"}
          onChange={this.handleChange}
        />
        <input
          id="Select5"
          value="Select5"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select5"}
          onChange={this.handleChange}
        />

        <input
          id="Select6"
          value="Select6"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select6"}
          onChange={this.handleChange}
        />

        <input
          id="Select7"
          value="Select7"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select7"}
          onChange={this.handleChange}
        />

        <input
          id="Select8"
          value="Select8"
          name="platform"
          type="radio"
          checked={this.state.selectValue === "Select8"}
          onChange={this.handleChange}
        />

        비동의
      </div>

        
    );
  }
}


