const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All rooms',
  });
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

export { allRooms, createRoom };
