const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests from any origin
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// In-memory "database"
let tripCounter = 0;
const trips = [];

// Helper to generate a unique trip ID
const generateTripId = () => {
    const prefix = "DDHYD";
    tripCounter++;
    const paddedCount = String(tripCounter).padStart(3, '0');
    return `${prefix}${paddedCount}`;
};

// API Endpoints
app.post('/api/trips', (req, res) => {
    const newTrip = {
        tripId: generateTripId(),
        ...req.body,
        status: 'created',
        createdAt: new Date()
    };
    trips.push(newTrip);
    res.status(201).json(newTrip);
});

app.get('/api/trips', (req, res) => {
    res.json(trips);
});

app.get('/api/trips/:id', (req, res) => {
    const trip = trips.find(t => t.tripId === req.params.id);
    if (trip) {
        res.json(trip);
    } else {
        res.status(404).send('Trip not found');
    }
});

app.put('/api/trips/:id', (req, res) => {
    const tripIndex = trips.findIndex(t => t.tripId === req.params.id);
    if (tripIndex !== -1) {
        const updatedTrip = { ...trips[tripIndex], ...req.body };
        trips[tripIndex] = updatedTrip;
        res.json(updatedTrip);
    } else {
        res.status(404).send('Trip not found');
    }
});

// A simple root endpoint to confirm the server is running
app.get('/', (req, res) => {
    res.send('Trip Management API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
