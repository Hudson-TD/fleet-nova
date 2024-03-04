import { Request, Response } from "express";
import { User } from "../models/User.js";
import { Vehicle } from "../models/Vehicle.js";

export async function getUserFleet(req: Request, res: Response) {
  const id = req.user;
  try {
    const user = await User.findById(id).populate({
      path: "fleet",
    });

    if (!user) {
      res.status(404).send({
        status: "Not Found",
        message: "No matches found for the provided fleet ID.",
      });
    }

    res.status(200).send(user.fleet);
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Something went wrong fetching fleet data.",
    });
  }
}

export async function addFleetAsset(req: Request, res: Response) {
  const id = req.user;
  const {
    make,
    model,
    model_year,
    asset_type,
    vin,
    exterior_color,
    interior_color,
    purchase_mileage,
  } = req.body;
  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(404).send({
        status: "Not Found",
        message: "No matches found for the provided fleet ID.",
      });
    }

    const newAsset = new Vehicle({
      make,
      model,
      model_year,
      asset_type,
      vin,
      exterior_color,
      interior_color,
      purchase_mileage,
    });

    // Save the new asset data
    await newAsset.save();
    // Update user fleet with new asset
    user.fleet.push(newAsset);
    // Save user to persist addition
    await user.save();

    res.status(201).send({
      status: "Success",
      message: "Fleet asset added successfully.",
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Something went wrong adding fleet asset.",
    });
  }
}
