package com.sambit.sampharixErp.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import java.util.function.Function;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    // =========================
    // Generate Token
    // =========================
    public String generateToken(String email) {

        Map<String, Object> claims = new HashMap<>();

        return createToken(claims, email);
    }

    private String createToken(
            Map<String, Object> claims,
            String subject
    ) {

        return Jwts.builder()

                .setClaims(claims)

                .setSubject(subject)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + jwtExpiration
                        )
                )

                .signWith(
                        getSignKey(),
                        SignatureAlgorithm.HS256
                )

                .compact();
    }

    // =========================
    // Extract Username
    // =========================
    public String extractUsername(String token) {

        return extractClaim(
                token,
                Claims::getSubject
        );
    }

    // =========================
    // Extract Expiration
    // =========================
    public Date extractExpiration(String token) {

        return extractClaim(
                token,
                Claims::getExpiration
        );
    }

    // =========================
    // Extract Claim
    // =========================
    public <T> T extractClaim(
            String token,
            Function<Claims, T> claimsResolver
    ) {

        final Claims claims =
                extractAllClaims(token);

        return claimsResolver.apply(claims);
    }

    // =========================
    // Extract All Claims
    // =========================
    private Claims extractAllClaims(String token) {

        return Jwts.parserBuilder()

                .setSigningKey(getSignKey())

                .build()

                .parseClaimsJws(token)

                .getBody();
    }

    // =========================
    // Check Token Valid
    // =========================
    public boolean isTokenValid(
            String token,
            UserDetails userDetails
    ) {

        final String username =
                extractUsername(token);

        return username.equals(userDetails.getUsername())
                && !isTokenExpired(token);
    }

    // =========================
    // Check Expired
    // =========================
    private boolean isTokenExpired(String token) {

        return extractExpiration(token)
                .before(new Date());
    }

    // =========================
    // Secret Key
    // =========================
    private Key getSignKey() {

        return Keys.hmacShaKeyFor(
                secretKey.getBytes()
        );
    }
}