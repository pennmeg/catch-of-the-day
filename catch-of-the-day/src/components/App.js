import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  };
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  };
  componentWillUmount() {
    base.removeBinding(this.ref);
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
  updateFish = (key, updatedFish) => {
    // take copy of current fish/State
    const fishes = {...this.state.fishes};
    // update that state
    fishes[key] = updatedFish;
    // set to State
    this.setState({ fishes });
  };
  deleteFish = (key) => {
    // copy of state
    const fishes = {...this.state.fishes};
    // update (remove)
    fishes[key] = null;
    this.setState({ fishes });
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
  removeFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} index={key} key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
        <Inventory addFish={this.addFish} updateFish={this.updateFish} deleteFish={this.deleteFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
      </div>
    )
  }
}

export default App;
