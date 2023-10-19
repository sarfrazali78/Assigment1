import React, { useState } from "react";
import { FaDeleteLeft} from "react-icons/fa6";

const Card = () => {

  const storedData2 = localStorage.getItem("myKey");
 
  const [storedData, setStoredData] = useState(storedData2 ? JSON.parse(storedData2):[]);


  const removeItem = (index) => {
    const updatedData = [...storedData];
    updatedData.splice(index,1 );
   
    localStorage.setItem("myKey", updatedData);
   
    setStoredData(updatedData);
  };

 

  return (
    <div>
      {storedData.map((item, index) => (
        <div className="watchlist-list" key={index}>
          <div>
            <span>{item}</span>
          </div>
          <div className="watchlist-delte-con">
            <span>$2000</span>
            <span>
              <FaDeleteLeft
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(index)}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card