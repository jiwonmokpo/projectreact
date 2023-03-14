import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>9조 캡스톤</h2>
          <h2>팀장 : 서욱현</h2>
          <h2>팀원 : 박지원</h2>
          <h2>팀원 : 전학수</h2>
          <h2>팀원 : 주원빈</h2>
          <h2>팀원 : 최태민</h2>
        </a>
      </header>
    </div>
  );
}

export default App;