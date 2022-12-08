CREATE DATABASE aluga_car;

DROP TABLE IF EXISTS clients;

DROP TABLE IF EXISTS cars;

CREATE TABLE
    clients (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        cpf CHAR(11) NOT NULL,
        car INT NOT NULL,
        date_of_birth DATE NOT NULL,
        created_at TIMESTAMPTZ NOT NULL,
        FOREIGN KEY (car) REFERENCES cars (id)
    );

CREATE TABLE
    cars (
        id SERIAL PRIMARY KEY,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        registration_date TIMESTAMPTZ NOT NULL
    );