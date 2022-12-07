CREATE DATABASE aluga_car;

DROP TABLE IF EXISTS clients;

DROP TABLE IF EXISTS cars;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  cpf CHAR(11) NOT NULL,
  car TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  created_at DATE(18) NOT NULL,
  FOREIGN KEY (car) REFERENCES cars(id)
);

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
	brand TEXT NOT NULL,
  model INT NOT NULL,
  registration_date DATE NOT NULL,
 );