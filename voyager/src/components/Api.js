import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../vlogo.svg";
import Cards from "./Cards";
import {
  Button,
  Jumbotron,
  FormControl,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
const apiurl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
function Api() {
  const [state, setState] = useState({
    inputvalue: "",
    name: [],
    rating: [],
    results: [],
    user_ratings_total: [],
    place_id: [],
    address: [],
    photos: [],
    business_status: [],
  });
  const handleChange = (event) => {
    let inputValue = event.target.value;

    console.log(inputValue);
    setState((prevState) => {
      return { ...prevState, inputvalue: inputValue };
    });
  };

  const handleSubmit = (event) => {
    //maps.googleapis.com/maps/api/place/textsearch/json?query=new+york+city+point+of+interest&language=en&key=API_KEY
    console.log(state.inputvalue);
    const temp = {};
    const url =
      apiurl +
      state.inputvalue +
      "+point+of+interest&language=en&key=AIzaSyA2c2eutE8yVzMixMY8Q3f95J8nzyQUcuc";
    axios
      .get(url)
      .then((response) => response)
      .then((data) => {
        let places = data.data.results;
        console.log(places);
        setState((prevState) => {
          return {
            ...prevState,
            //name: places.name,
            //place_id: places.place_id,
            //rating: places.rating,
            //user_ratings_total: places.user_ratings_total,
            results: places,
            //address: places.formatted_address,
            //business_status: places.business_status,
          };
        });
      })
      .catch((error) => {
        alert("Please enter a valid city");
      });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <img src={logo} className="Bimg" />

        <Navbar.Brand href="#home" className="title">
          Voyager
        </Navbar.Brand>

        <Form inline>
          <FormControl
            onKeyPress={handleChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button onClick={handleSubmit} variant="outline-light">
            Search
          </Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Plan a trip</Nav.Link>
          <Nav.Link href="#features">Check Flights</Nav.Link>
        </Nav>
      </Navbar>

      {state.results.length == 0 ? null : <Cards name={state.results} />}
    </div>
  );
}

export default Api;
