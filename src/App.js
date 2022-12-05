import './App.css';
import ListEmployee from './Pages/ListEmployee';
import CreateEmployee from './Pages/CreateEmployee';
import {BrowserRouter as Router, Route, Switch}from'react-router-dom'
import UpdateEmployee from './Pages/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
      <div className="container">

        <div className="container">
          <Switch> http://localhost:3000/add-employee
              <Route path = "/" exact component={ListEmployee}></Route>
              <Route path = "/employee" exact component={ListEmployee}></Route>
              <Route path = "/add-employee" component={CreateEmployee}></Route>
              <Route path = "/update-employee/:id" component={UpdateEmployee}></Route>
                          
          </Switch>
          
          </div>
    </div>
      </Router>
  </div>
  );
}

export default App;
