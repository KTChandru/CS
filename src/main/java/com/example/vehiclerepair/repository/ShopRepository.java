package com.example.vehiclerepair.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vehiclerepair.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {
}
