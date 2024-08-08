package com.example.vehiclerepair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vehiclerepair.model.User;
import com.example.vehiclerepair.model.Vehicle;
import com.example.vehiclerepair.repository.UserRepository;
import com.example.vehiclerepair.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(Long vehicleId) {
        return vehicleRepository.findById(vehicleId).orElse(null);
    }

    public Vehicle saveVehicle(Vehicle vehicle) {
        if (vehicle.getVehicleNumber() == null || vehicle.getVehicleNumber().trim().isEmpty()) {
            throw new IllegalArgumentException("Vehicle number is required");
        }
        return vehicleRepository.save(vehicle);
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        User user = vehicle.getUser();
        if (user.getUserID() == null || !userRepository.existsById(user.getUserID())) {
            user = userRepository.save(user);
        }
        vehicle.setUser(user);
        if (vehicle.getVehicleNumber() == null || vehicle.getVehicleNumber().trim().isEmpty()) {
            throw new IllegalArgumentException("Vehicle number is required");
        }
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long vehicleId) {
        vehicleRepository.deleteById(vehicleId);
    }
}
