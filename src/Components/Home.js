import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import AsteriodDetails from "./AstroidDetails";

export default function Home(props) {
  const [data, setData] = useState([]);

  const [val, setVal] = useState("");

  const [ren, setRen] = useState(true);

  const click = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${val}?api_key=8meIpbCsqInXEax5RhufezJ7eHgEQDs9M3rs3dwF`
      )
      .then((res) => {
        setData(res.data);
        setRen(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const random = () => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
      .then((res) => {
        setData(res.data);
        const randomAstroidId = Math.floor(
          Math.random() * res.data.near_earth_objects.length
        );
        setVal(res.data.near_earth_objects[randomAstroidId].id);
        click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changes = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      {ren ? (
        <div className="Button Container">
          <TextField
            id="standard-basic"
            onChange={changes}
            value={val}
            placeholder="Enter Asteroid ID"
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
      ) : (
        <AsteriodDetails data={data} />
      )}
    </>
  );
}
