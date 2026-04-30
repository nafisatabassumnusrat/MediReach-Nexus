export const hospitals = [
  {
    id: "h1",
    name: "CityCare Hospital",
    distance: "2.1 km",
    time: "8 min",
    rating: 4.5,
    risk: "safe", // 'safe', 'moderate', 'high'
    erWaitTime: "15 mins",
    coordinates: { lat: 23.8103, lng: 90.4125 }, // Dhaka coordinates mock
  },
  {
    id: "h2",
    name: "GreenLife Medical",
    distance: "3.5 km",
    time: "12 min",
    rating: 4.2,
    risk: "moderate",
    erWaitTime: "45 mins",
    coordinates: { lat: 23.8123, lng: 90.4155 },
  },
];

export const pharmacies = [
  {
    id: "p1",
    name: "MediPlus Pharmacy",
    status: "In Stock",
    distance: "1.2 km",
  },
  {
    id: "p2",
    name: "HealthHub Pharmacy",
    status: "Low Stock",
    distance: "2.8 km",
  },
];

export const environmentData = {
  aqi: 145,
  aqiStatus: "High Air Pollution",
  temperature: "36°C",
  tempStatus: "Heatwave Alert",
  traffic: "Heavy",
};
