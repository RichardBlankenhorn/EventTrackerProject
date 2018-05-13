package com.skilldistillery.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rest.entities.Cycling;

public interface CyclingRepository extends JpaRepository<Cycling, Integer> {

}
