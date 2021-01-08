package com.dsmaratona.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsmaratona.dsdeliver.dto.OrderDTO;
import com.dsmaratona.dsdeliver.dto.ProductDTO;
import com.dsmaratona.dsdeliver.entities.Order;
import com.dsmaratona.dsdeliver.entities.Product;
import com.dsmaratona.dsdeliver.repositories.OrderRepository;
import com.dsmaratona.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		
		List<Order> list = repository.findAll();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
