import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListComponent from './components/ListComponent';
import CreateComponent from './components/CreateComponent';
import ViewComponent from './components/ViewComponent'


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/add-phone/:id" component={CreateComponent}></Route>
                        <Route path="/" exact component={ListComponent}></Route>
                        <Route path="/phone" exact component={ListComponent}></Route>
                        <Route path="/view-phone/:id" exact component={ViewComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>

    );
}

export default App;
