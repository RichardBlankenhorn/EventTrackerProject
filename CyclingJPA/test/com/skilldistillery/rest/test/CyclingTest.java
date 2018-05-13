package com.skilldistillery.rest.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.rest.entities.Cycling;

class CyclingTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	private Cycling cycling;
	
	@BeforeEach
	void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Cycling");
		em = emf.createEntityManager();
		cycling = em.find(Cycling.class, 1);
	}
	
	@AfterEach
	void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	public void test_cycling_entity_mapping() {
		assertEquals(1, cycling.getId());
		assertEquals(20, cycling.getDistance());
	}

}
