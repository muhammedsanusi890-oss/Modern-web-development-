import express from "express";
import { supabase } from "../config/supabase.js";

const router = express.Router();


// GET all items
router.get("/", async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("items")
      .select("*");

    if (error) throw error;

    console.log("Success : 200", data);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


// GET one item
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


// CREATE item
router.post("/", async (req, res, next) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      error: "Request body must be a JSON object. Set Content-Type to application/json."
    });
  }

  const { name, description, quantity } = req.body;

  if (!name || !description || quantity === undefined) {
    return res.status(400).json({
      error: "Missing required fields: name, description, quantity"
    });
  }

  try {
    const { data, error } = await supabase
      .from("items")
      .insert([
        {
          name,
          description,
          quantity
        }
      ])
      .select();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});


// UPDATE item
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;

  try {
    const { data, error } = await supabase
      .from("items")
      .update({
        name,
        description,
        quantity
      })
      .eq("id", id)
      .select();

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


// DELETE item
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const { error } = await supabase
      .from("items")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.status(200).json({
      message: "Item deleted successfully"
    });
  } catch (error) {
    next(error);
  }
});

export default router;
