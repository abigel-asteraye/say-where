import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../db"; 
import Spots from "../models/Spots";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const { name, location, description, type, rating, tags } = req.body;

      const newSpot = await Spots.create({
        name,
        description,
        location,
        type,
        rating,
        tags,
        review: [] 
      });

      res.status(201).json({ success: true, spot: newSpot });
    } catch (error: any) {
      console.error("Error creating spot:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
