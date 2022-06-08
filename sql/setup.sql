-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;

CREATE table cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    cat_name VARCHAR NOT NULL,
    lives INT NOT NULL,
    is_sidekick BOOLEAN NOT NULL,
    birth_year INT NOT NULL,
    cat_type VARCHAR NOT NULL   
);
INSERT INTO cats (cat_name, lives, is_sidekick, birth_year, cat_type) VALUES
('Felix', 3, false, 1892, 'Tuxedo'),
('Garfield', 7, false, 1978, 'Orange Tabby'),    
('Duchess', 9, false, 1970, 'Angora'),
('Stimpy', 1, true, 1990, 'Manx'),
('Sylvester', 1, true, 1945, 'Tuxedo'),
('Tigger', 8, false, 1928, 'Tiger'),
('Hello Kitty', 9, false, 1974, 'Angora'),       
('Hobbes', 6, true, 1985, 'Tiger');