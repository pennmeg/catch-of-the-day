import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    // console.log("Adding a Fish");
    // Updating State 1: take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2 Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // 3 set new fishes object to state
    this.setState({ fishes: fishes });
  };
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };
  addToOrder = (key) => {
    // Take a copy of State
    const order = {...this.state.order};
    // Add to order or update number in order
    order[key] = order[key] + 1 || 1;
    // call setstate to update our state object
    this.setState({ order: order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} index={key} key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
