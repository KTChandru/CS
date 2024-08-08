package com.example.vehiclerepair.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vehiclerepair.dto.AuthRequest;
import com.example.vehiclerepair.model.User;
import com.example.vehiclerepair.service.JwtService;
import com.example.vehiclerepair.service.UserService;

@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin as needed
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        logger.info("SignUp request received with user: {}", user.getEmail());

        try {
            userService.registerUser(user);
            return new ResponseEntity<>("User signed up successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception
            logger.error("Sign Up Failed: {}", e.getMessage());
            return new ResponseEntity<>("Sign Up Failed: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())); // Use
                                                                                                                 // email
                                                                                                                 // instead
                                                                                                                 // of
                                                                                                                 // username
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getEmail()); // Use email instead of username
                return new ResponseEntity<>(token, HttpStatus.OK);
            } else {
                throw new UsernameNotFoundException("Invalid user request!");
            }
        } catch (Exception e) {
            // Log the exception
            logger.error("Authentication Failed: {}", e.getMessage());
            return new ResponseEntity<>("Authentication Failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }

}
