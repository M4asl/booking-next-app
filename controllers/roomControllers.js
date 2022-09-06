const Room = require('../models/roomModel');

// Get all rooms   =>   /api/rooms

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// Create new room => /api/rooms

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// Get room details   =>   /api/rooms/:id

const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(400).json({
        success: false,
        error: 'Room not found with this ID',
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

// Update room   =>   /api/rooms/:id

const updateRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(400).json({
        success: false,
        error: 'Room not found with this ID',
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: true,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

export { allRooms, createRoom, getSingleRoom, updateRoom };
