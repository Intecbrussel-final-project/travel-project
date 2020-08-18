import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";
const apiurl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
class Hompepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "welcome",
      results: "",
    };
  }

  handleChange = (event) => {
    let inputValue = event.target.value;

    console.log(inputValue);
    this.setState({
      input: inputValue,
    });
  };
  handleSubmit = () => {
    //maps.googleapis.com/maps/api/place/textsearch/json?query=new+york+city+point+of+interest&language=en&key=API_KEY

    const url =
      apiurl +
      this.state.input +
      "+point+of+interest&language=en&key=AIzaSyA2c2eutE8yVzMixMY8Q3f95J8nzyQUcuc";
    axios
      .get(url)
      .then((response) => response)
      .then((data) => {
        let places = data.data.results;

        this.setState({
          results: places,
        });
        console.log(this.state.results);
        //places.forEach((place) => {
        //  this.setState((prev) => {
        //    return { ...prev, results: place };
        //  });
        //});
      });
  };
  render() {
    const place = this.state.results;
    return (
      <div>
        <h1>Welcome to Voyager</h1>
        <input
          type="text"
          onKeyPress={this.handleChange}
          placeholder="Enter your search"
        />
        {console.log(place)}
        <br />
        <hr />
        <Button variant="secondary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        <p></p>
      </div>
    );
  }
}

export default Hompepage;
