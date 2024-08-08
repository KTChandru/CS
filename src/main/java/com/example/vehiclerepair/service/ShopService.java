package com.example.vehiclerepair.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vehiclerepair.model.Shop;
import com.example.vehiclerepair.repository.ShopRepository;

@Service
public class ShopService {

    @Autowired
    private ShopRepository shopRepository;

    public List<Shop> getAllShops() {
        return shopRepository.findAll();
    }

    public Optional<Shop> getShopById(Long id) {
        return shopRepository.findById(id);
    }

    public Shop createOrUpdateShop(Shop shop) {
        return shopRepository.save(shop);
    }

    public void deleteShop(Long id) {
        shopRepository.deleteById(id);
    }
}
