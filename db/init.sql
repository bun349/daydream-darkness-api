-- Active: 1773420604143@@127.0.0.1@3306
-- Table 1: Characters (Agen Biro)
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    squad VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'Active'
);

-- Table 2: Darkness (Entitas / Ghost Stories)
CREATE TABLE darkness (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    danger_class VARCHAR(10) NOT NULL, -- Nanti isinya 'S', 'A', 'B', dsb.
    description TEXT
);

-- Table 3: Incident Log (Relasi Many-to-Many antara Character dan Darkness)
CREATE TABLE incident_log (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters(id) ON DELETE CASCADE,
    darkness_id INT REFERENCES darkness(id) ON DELETE CASCADE,
    incident_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    outcome TEXT NOT NULL
);

-- (Opsional) Insert Data Awal supaya pas dites aplikasinya sudah ada isinya
INSERT INTO characters (name, squad, status) VALUES ('Kwak Jaekwang', 'B Squad', 'Active');
INSERT INTO darkness (title, danger_class, description) VALUES ('And They All Lived Unhappily Ever After', 'A', 'Fairy-tale ghost story.');
INSERT INTO incident_log (character_id, darkness_id, outcome) VALUES (1, 1, 'Contamination of J3 and probably deaths of the rest of his team.');