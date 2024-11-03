import React from "react";
import { generateParcelNumber } from "../helpers/generateRandomNumber";
import { useState } from "react";



export default function Step1() {
  const [parcels, setParcels] = useState([]);

   // Function to add a new parcel
   const addParcel = () => {
    const newParcel = {
      parcelNumber: generateParcelNumber(),
      parcelType: "",
      length: "",
      width: "",
      height: "",
      weight: "",
    };
    setParcels((prevParcels) => [...prevParcels, newParcel]);
  };

  // Handle change for any field in a specific parcel
  const handleChange = (index, field, value) => {
    setParcels((prevParcels) =>
      prevParcels.map((parcel, i) =>
        i === index ? { ...parcel, [field]: value } : parcel
      )
    );
  };

  return (
    <div>
      {/* step 1 */}
      <div className="head">
        <h4>Enter Your Parcel Details Here</h4>
        <button type="button" onClick={addParcel}>Add Parcel</button>
      </div>
      <div className="inner_bulk">
      {parcels.map((parcel, index) => (

        <form key={index}>
          <div className="row">
          <div className="col-md-2">
              <div className="txtGrp">
                <label>Parcel Number </label>
               <span>{parcel.parcelNumber}</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Parcel Type</label>
                <select className="input" value={parcel.parcelType}
                    onChange={(e) => handleChange(index, "parcelType", e.target.value)}
                    required>
                  <option value="">Document</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Length </label>
                <input type="" className="input" value={parcel.length}
                    onChange={(e) => handleChange(index, "length", e.target.value)}
                    required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Width </label>
                <input type="" className="input" value={parcel.width}
                    onChange={(e) => handleChange(index, "width", e.target.value)}
                    required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Height </label>
                <input type="" className="input" value={parcel.height}
                    onChange={(e) => handleChange(index, "height", e.target.value)}
                    required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Weight </label>
                <input type="" className="input" value={parcel.weight}
                    onChange={(e) => handleChange(index, "weight", e.target.value)}
                    required />
              </div>
            </div>
          </div>
        </form>
        ))}
      </div>
    </div>
  );
}
