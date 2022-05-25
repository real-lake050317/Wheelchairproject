import SMS from "../models/SMS.js";

export const createSMS = async (req, res, next) => {
  const newSMS = new SMS(req.body);
  try {
    const savedSMS = await newSMS.save();
    res.status(200).json(savedSMS);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateSMS = async (req, res, next) => {
  try {
    const updatedSMS = await SMS.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSMS);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteSMS = async (req, res, next) => {
  try {
    await SMS.findByIdAndDelete(req.params.id);
    res.status(200).json("SMS Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSMS = async (req, res, next) => {
  try {
    const sms = await SMS.findById(req.params.id);
    res.status(200).json(sms);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSMSs = async (req, res, next) => {
  next();
  try {
    const sms = await SMS.find();
    res.status(200).json(sms);
  } catch (err) {
    res.status(500).json(err);
  }
}