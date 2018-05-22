package com.skilldistillery.rest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.rest.entities.Cycling;
import com.skilldistillery.rest.repositories.CyclingRepository;

@Service
public class CyclingServiceImpl implements CyclingService {

	@Autowired
	private CyclingRepository repo;

	@Override
	public List<Cycling> index() {
		return repo.findAll();
	}

	@Override
	public Cycling show(int id) {
		return repo.findById(id).get();
	}

	@Override
	public Cycling create(Cycling cycling) {
		Cycling cycle = repo.saveAndFlush(cycling);
		return cycle;
	}

	@Override
	public Cycling replace(Cycling cycling, int id) {
		Cycling managedCycle = repo.findById(id).get();
		try {
			managedCycle.setDate(cycling.getDate());
			managedCycle.setDistance(cycling.getDistance());
			managedCycle.setTime(cycling.getTime());
			repo.save(managedCycle);
			return managedCycle;
		} catch (Exception e) {
			return cycling;
		}
	}

	@Override
	public Cycling update(Cycling cycling, int id) {
		Cycling managedCycle = repo.findById(id).get();
		System.out.println("Made It Here");
		try {
			if (cycling.getDate() != null) {
				managedCycle.setDate(cycling.getDate());
			}
			if (cycling.getDistance() != 0) {
				managedCycle.setDistance(cycling.getDistance());
			}
			if (cycling.getTime() != 0) {
				managedCycle.setTime(cycling.getTime());
			}

		} catch (Exception e) {
			return cycling;
		}
		repo.save(managedCycle);
		return managedCycle;
	}

	@Override
	public boolean delete(int id) {
		try {
			Cycling cycle = repo.findById(id).get();
			repo.delete(cycle);
			return true;

		} catch (Exception e) {
			return false;
		}
	}

}
