import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  FaMapMarker,
  FaSearch,
  FaHome,
  FaRupeeSign,
  FaPlusCircle,
} from "react-icons/fa";
import "./Buy.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Buy() {
  const [bestMatches, setBestMatches] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setBestMatches([]);
      return;
    }

    const apiKey = "BYCNHPSOPFVHTF3Q";
    // const apiKey='BPH5IIU0XTXJ6IR4';
    // const apiKey='EBOFYEIXN07BAHR7';
    setLoading(true);
    setError(null);

    axios
      .get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${apiKey}`
      )
      .then((response) => {
        const matches = response.data.bestMatches;
        if (matches.length === 0) {
          setError("Data not found");
        } else {
          setBestMatches(matches);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [searchInput]);
  const arr=[];
  const savedata = (key, value) => {
   arr.push(value)
    localStorage.setItem("myKey",JSON.stringify(arr));
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div style={{ height: "300vh" }}>
      <Navbar />

      <div className="Search-bar-container">
        <div className="Search-bar-main">
          <div className="Search-bar">
            <div className="Search-bar-input" id="header-last-input">
              <span>
                <FaRupeeSign />
              </span>
              <span className="input-text-header">Budget</span>
              <input
                className="unique"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onClick={handleShow}
              />
            </div>
            <div className="header-btn">
              <FaSearch />
              <Link to="/Watchlist">
                <button style={{ cursor: "pointer" }}>Search</button>
              </Link>
            </div>
          </div>
        </div>
        {show && (
          <div className="searching_box">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : bestMatches.length === 0 ? (
              <p>Data not found</p>
            ) : (
              <ul
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                {bestMatches
                  .filter((match) =>
                    match["2. name"]
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                  .map((match, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <p>{match["2. name"]}</p>{" "}
                      <p onClick={() => savedata(match["2. name"], match["2. name"])}>
                        <FaPlusCircle
                          style={{
                            color: "orangered",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        />
                      </p>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Buy;