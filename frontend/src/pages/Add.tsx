import { useState } from "react";
import { addFleetAsset } from "../helpers/api-communicator";

export default function Add() {
  const [assetFormData, setAssetFormData] = useState({
    make: "",
    model: "",
    model_year: "",
    asset_type: "",
    vin: "",
    exterior_color: "",
    interior_color: "",
    purchase_mileage: "",
  });

  const handleAssetFormChange = (e) => {
    const { name, value } = e.target;
    setAssetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center bg-slate-300 w-[35rem] h-[40rem] border border-white rounded-2xl shadow-lg">
          <h1 className="mb-8 text-3xl font-bold">Add Fleet Asset</h1>
          <form className="flex flex-col justify-center gap-5 w-full h-full p-5">
            <fieldset className="flex flex-col gap-5 p-4">
              <legend className="font-semibold">Required Items</legend>
              <div className="flex justify-between">
                <label htmlFor="make">Make*</label>
                <input
                  id="make"
                  name="make"
                  value={assetFormData.make}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="model">Model*</label>
                <input
                  id="model"
                  name="model"
                  value={assetFormData.model}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="model_year">Model Year*</label>
                <input
                  id="model_year"
                  name="model_year"
                  value={assetFormData.model_year}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="type">Asset Type*</label>
                <select
                  id="asset_type"
                  name="asset_type"
                  value={assetFormData.asset_type}
                  required
                  className="w-[180px]"
                  onChange={handleAssetFormChange}
                >
                  <option value="Coupe">Coupe</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Truck">Truck</option>
                  <option value="Motorcycle">Motorcycle</option>
                  <option value="Van">Van</option>
                  <option value="Bus">Bus</option>
                  <option value="SUV">SUV</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </fieldset>
            <div className="w-full flex justify-center">
              <div className="w-1/3 h-[2px] bg-white" />
            </div>
            <fieldset className="flex flex-col gap-5 p-4">
              <legend className="font-semibold">Optional Items</legend>
              <div className="flex justify-between">
                <label htmlFor="vin">VIN Number</label>
                <input
                  id="vin"
                  name="vin"
                  value={assetFormData.vin}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="exterior_color">Exterior Color</label>
                <input
                  id="exterior_color"
                  name="exterior_color"
                  value={assetFormData.exterior_color}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="interior_color">Interior Color</label>
                <input
                  id="interior_color"
                  name="interior_color"
                  value={assetFormData.interior_color}
                  type="text"
                  required
                  onChange={handleAssetFormChange}
                />
              </div>
              <div className="flex gap-5 justify-between">
                <label htmlFor="purchase_mileage">Purchase Mileage</label>
                <input
                  id="purchase_mileage"
                  name="purchase_mileage"
                  value={assetFormData.purchase_mileage}
                  type="text"
                  onChange={handleAssetFormChange}
                />
              </div>
            </fieldset>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="border-2 bg-white rounded-full w-1/2 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  addFleetAsset(assetFormData);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
