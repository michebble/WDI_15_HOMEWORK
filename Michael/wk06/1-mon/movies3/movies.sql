--     Column    |          Type          | Collation | Nullable |              Default
-- --------------+------------------------+-----------+----------+------------------------------------
--  id           | integer                |           | not null | nextval('movies_id_seq'::regclass)
--  title        | character varying(200) |           |          |
--  poster       | character varying(400) |           |          |
--  imdb_id      | character varying(200) |           |          |
--  plot         | character varying(600) |           |          |
--  release_year | character varying(200) |           |          |
--  runtime      | character varying(200) |           |          |
-- Indexes:
--     "movies_pkey" PRIMARY KEY, btree (id)

INSERT INTO movies(title, poster, imdb_id, plot, release_year, runtime) VALUES ('Jaws', 'https://ia.media-imdb.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', 'tt0073195', 'A local sheriff, a marine biologist and an old seafarer team up to hunt down a great white shark wrecking havoc in a beach resort.', '1975', '124 min');

