package com.skilldistillery.rest.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cycling {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private double time;
	
	private Date date;
	
	private double distance;
	
	public Cycling() {
		
	}

	public Cycling(int id, double time, Date date, double distance) {
		super();
		this.id = id;
		this.time = time;
		this.date = date;
		this.distance = distance;
	}

	public double getTime() {
		return time;
	}

	public void setTime(double time) {
		this.time = time;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Cycling [id=" + id + ", time=" + time + ", date=" + date + ", distance=" + distance + "]";
	}
	
	

}
