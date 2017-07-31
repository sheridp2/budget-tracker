import './style/main.scss';

//npm modules
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// app modules
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

// let renderIf = (test, component) => (test ? component : undefined);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 400,
      expenses: [],
    };
    this.getApp = this.getApp.bind(this);
  }
  //hooks
  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  //render
  render() {
    return (
      <main className="app">
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              component={() => <DashboardContainer app={this.getApp()} />} />
            <Route exact path="/about" component={AboutContainer} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
