import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Day04/App';
import reportWebVitals from './reportWebVitals';
import store from './Day04/Redux/Store'; // Untuk Day 04
import { Provider } from 'react-redux';

// Versi React
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
