import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
