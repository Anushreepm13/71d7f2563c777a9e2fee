import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import RandomAstroid from "./RandomAstroid";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  const [data, setData] = useState([]);
  let History = useHistory();
  console.log(History);
  console.log("button  render");

  const [val, setVal] = useState("");

  const click = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${val}?api_key=8meIpbCsqInXEax5RhufezJ7eHgEQDs9M3rs3dwF`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log("data", data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(History);

  const random = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=8meIpbCsqInXEax5RhufezJ7eHgEQDs9M3rs3dwF`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log("data", data);
      })
      .catch((e) => {
        console.log(e);
      });
    History.push("/RandomAstroid");
  };

  const changes = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="Button container">
      <TextField
        id="standard-basic"
        onChange={changes}
        value={val}
        label="Enter Asteroid ID"
      />
      <br />
      <br />
      <Button
        onClick={click}
        disabled={val.length > 0 ? false : true}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Submit
      </Button>
      <br />
      <br />
      <Button
        onClick={random}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Random Asteriod
      </Button>
    </div>
  );
}
