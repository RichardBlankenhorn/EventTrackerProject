package com.skilldistillery.rest.services;

import java.util.List;

import com.skilldistillery.rest.entities.Cycling;

public interface CyclingService {
	
	public List<Cycling> index();
	public Cycling show(int id);
	public Cycling create(Cycling cycling);
	public Cycling replace(Cycling cycling, int id);
	public Cycling update(Cycling cycling, int id);
	public boolean delete(int id);

}
