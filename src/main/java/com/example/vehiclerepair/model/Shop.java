package com.example.vehiclerepair.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ShopID")
    private Long shopID;

    @Column(name = "Name", nullable = false, length = 100)
    private String name;

    @Column(name = "Address", nullable = false, length = 255)
    private String address;

    @Column(name = "City", nullable = false, length = 100)
    private String city;

    @Column(name = "Pincode", nullable = false, length = 10)
    private String pincode;

    @Column(name = "Phone", nullable = false, length = 15)
    private String phone;

    // Getters and setters
    public Long getShopID() {
        return shopID;
    }

    public void setShopID(Long shopID) {
        this.shopID = shopID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
