package com.dsmaratona.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsmaratona.dsdeliver.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {

}
