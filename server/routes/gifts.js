import express from "express";
import GiftsController from "../controllers/gifts.js";

const router = express.Router();

//get all gifts
router.get("/", GiftsController.getGifts);
//get the gift pertaining to the ID
router.get("/:giftId", GiftsController.getGiftById);
//create a gift
router.post("/", GiftsController.createGift);
//delete the gift pertaining to this ID
router.delete("/:id", GiftsController.deleteGift);
//update the gift pertaining to this ID
router.patch("/:id", GiftsController.updateGift);

export default router;
