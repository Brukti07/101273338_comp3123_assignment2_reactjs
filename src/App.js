import './App.css';
import ListEmployee from './Pages/ListEmployee';
import CreateEmployee from './Pages/CreateEmployee';
// import AddEmployee from './AddEmployee';
import {BrowserRouter as Router, Route, Switch}from'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <div className="container">

        <div className="container">
          <Switch> http://localhost:3000/add-employee
              <Route path = "/" exact component={ListEmployee}></Route>
              {/* <Route path = "/AddEmployee" component={AddEmployee}></Route> */}
              <Route path = "/add-employee" component={CreateEmployee}></Route>
              {/* <ListEmployee/> */}
          {/* <AddEmployee/> */}
            
          </Switch>
          
          </div>
    </div>
      </Router>
  </div>
  );
}

export default App;
