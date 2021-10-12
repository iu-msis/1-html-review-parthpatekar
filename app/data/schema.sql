CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(500) NOT NULL,
    authors varchar(500),
    yearPublished int,
    publisher varchar(500),
    pageCount int,
    msrp float
);

INSERT INTO books(`title`, `authors`, `yearPublished`, `publisher`, `pageCount`, `msrp`) VALUES (
	'Janson\'s Basic History of Western Art (9th Edition)',
    'Penelope J.E. Davies, Frima Fox Hofrichter, Joseph F. Jacobs, Ann S. Roberts, David L. Simon',
    2013,
    'Pearson',
    688,
    64
),
(
	'Art Since 1900: Volume 1: 1900 to 1944; Volume 2: 1945 to the Present Third Edition',
    'Hal Foster, Rosalind Krauss, Yve-Alain Bois, Benjamin H. D. Buchloh, David Joselit',
    2016,
    'Thames & Hudson',
    896,
    165
),
(
	'The Lives of the Artists (Oxford World\'s Classics)',
    'Giorgio Vasari',
    2008,
    'Oxford University Press',
    616,
    12
),
(
	'Classical Art: From Greece to Rome (Oxford History of Art) 1st Edition',
    'Mary Beard, John Henderson',
    2001,
    'Oxford University Press',
    304,
    25
),
(
	'History of Modern Art Volume I 7th Edition',
    'H. Arnason, Elizabeth Mansfield',
    2012,
    'Pearson',
    440,
    100
);

-- SELECT * FROM books;



-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';