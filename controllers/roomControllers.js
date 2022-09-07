import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

const Room = require('../models/roomModel');

// Get all rooms   =>   /api/rooms

const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  let rooms = await apiFeatures.query;

  let filteredRoomsCount = rooms.length;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// Create new room => /api/rooms

const createRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(201).json(room);
});

// Get room details   =>   /api/rooms/:id

const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
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
});

// Update room   =>   /api/rooms/:id

const updateRoom = catchAsyncErrors(async (req, res, next) => {
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
});

const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(400).json({
      success: false,
      error: 'Room not found with this ID',
    });
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: 'Room is deleted.',
  });
});

export {
  allRooms,
  createRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
