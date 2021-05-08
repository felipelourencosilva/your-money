import "./App.css";

import Menu from "./components/Menu/Menu";
import Home from "./Pages/Home/Home";
import Organize from "./Pages/Organize/Organize"
import Balances from "./Pages/Organize/Balances";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [balances, setBalances] = useState([
      {
        id: 1,
        amount: 10,
        description: 'teste2',
      },
      {
        id: 2,
        amount: -10,
        description: 'teste3',
      },
  ]);

  const positiveBalances = balances.filter(balance => balance.amount > 0)

  const negativeBalances = balances.filter(balance => balance.amount < 0)
  
  const handleAddBalance = (amount, description) => {
    const newBalance = [
      ...balances,
      {
        id: uuidv4(),
        amount: amount,
        description: description,
      }
    ]
    setBalances(newBalance)
  }

  const handleDeleteBalance = (balanceId) => {
    const newBalance = balances.filter(balance => balance.id !== balanceId);
    setBalances(newBalance)
  }

  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route 
            path="/organize" 
            exact
            render={() => (
              <div className="organize-app">
                <Organize handleAddBalance={handleAddBalance} />
                <Balances positiveBalances={positiveBalances} negativeBalances={negativeBalances} handleDeleteBalance={handleDeleteBalance} />
              </div>
            )}
          
          />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
