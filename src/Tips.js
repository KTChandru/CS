    import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Tips.css'; // Import custom CSS for styling

    const CAR_BRANDS = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Volkswagen',
    'Audi', 'Hyundai', 'Kia', 'Subaru', 'Mazda', 'Jeep', 'Lexus', 'Dodge', 'Ram', 'Tesla',
    'Volvo', 'Jaguar', 'Porsche', 'Land Rover', 'Fiat', 'Mini', 'Buick', 'GMC'
    ];

    const BIKE_BRANDS = [
    'Harley-Davidson', 'Ducati', 'BMW', 'Yamaha', 'Honda', 'Kawasaki', 'Suzuki', 'Triumph',
    'KTM', 'Aprilia', 'Moto Guzzi', 'Royal Enfield', 'Bajaj', 'Hero', 'TVS', 'Mahindra',
    'Indian', 'Victory', 'Norton', 'Husqvarna', 'MV Agusta', 'Benelli'
    ];

    const fetchYouTubeVideos = async (query) => {
    const API_KEY = 'AIzaSyDM-WiieymuKfXivzijnhmD9hDAN2FK0lk';

    try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
        part: 'snippet',
        q: `Useful tips for ${query}`,
        maxResults: 20,
        type: 'video',
        videoDuration: 'medium', // Excludes shorts
        key: API_KEY,
        },
    });
    return response.data.items;
    } catch (error) {
    console.error('Error fetching YouTube videos', error);
    return [];
    }
    };

    const Tips = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('Car');
    const [selectedBrand, setSelectedBrand] = useState(CAR_BRANDS[0]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
    const fetchVideos = async () => {
        const videoResults = await fetchYouTubeVideos(selectedBrand);
        setVideos(videoResults);
    };

    fetchVideos();
    }, [selectedBrand]);

    const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
    setSelectedBrand(event.target.value === 'Car' ? CAR_BRANDS[0] : BIKE_BRANDS[0]);
    };

    const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    };

    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const videoResults = await fetchYouTubeVideos(searchQuery);
    setVideos(videoResults);
    };

    return (
    <div className="tips-container">
        <h1 className="header">Useful Tips and Tricks</h1>
        <div className="selectors">
        <div className="selector">
            <label htmlFor="vehicle">Choose Type of Vehicle:</label>
            <select id="vehicle" value={selectedVehicle} onChange={handleVehicleChange}>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            </select>
        </div>
        <div className="selector">
            <label htmlFor="brand">Choose Brand:</label>
            <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
            {(selectedVehicle === 'Car' ? CAR_BRANDS : BIKE_BRANDS).map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
            ))}
            </select>
        </div>
        </div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
            type="text"
            placeholder="Search for tips..."
            value={searchQuery}
            onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
        </form>
        <div className="video-grid">
        {videos.map((video) => (
            <div key={video.id.videoId} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <h3>{video.snippet.title}</h3>
            </a>
            </div>
        ))}
        </div>
    </div>
    );
    };

    export default Tips;
