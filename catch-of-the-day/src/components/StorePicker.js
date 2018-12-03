import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };
  goToStore = (event) => {
    // Stop form from submitting
    event.preventDefault();
    // Get text from input
    console.log(this.myInput.value.value);
    // Change page to /store/store-name
    this.props.history.push(`/store/fish-store`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={"fish-store"}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
