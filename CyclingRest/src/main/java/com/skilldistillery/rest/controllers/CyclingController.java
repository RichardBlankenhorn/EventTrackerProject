package com.skilldistillery.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.rest.entities.Cycling;
import com.skilldistillery.rest.services.CyclingService;

@CrossOrigin({"*", "http://localhost:4200"})
@RestController
@RequestMapping("api")
public class CyclingController {
	
	@Autowired
	private CyclingService service;
	
	@RequestMapping(path = "/")
	public String home() {
		return "index.html";
	}
	
	@RequestMapping(path = "rides", method = RequestMethod.GET)
	public List<Cycling> index() {
		return service.index();
	}
	
	@RequestMapping(path = "rides/{id}", method = RequestMethod.GET)
	public Cycling show(@PathVariable int id) {
		return service.show(id);
	}
	
	@RequestMapping(path = "rides", method = RequestMethod.POST)
	public Cycling create(@RequestBody Cycling cycle) {
		Cycling newCycle = service.create(cycle);
		return newCycle;
	}
	
	@RequestMapping(path = "rides/{id}", method = RequestMethod.PUT)
	public Cycling replace(@RequestBody Cycling cycle, @PathVariable int id) {
		return service.replace(cycle, id);
	}
	
	@RequestMapping(path = "rides/{id}", method = RequestMethod.PATCH)
	public Cycling update(@RequestBody Cycling cycle, @PathVariable int id) {
		return service.update(cycle, id);
	}
	
	@RequestMapping(path = "rides/{id}", method = RequestMethod.DELETE)
	public boolean delete(@PathVariable int id) {
		return service.delete(id);
	}

}
