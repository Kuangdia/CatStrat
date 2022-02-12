DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  money_bracket INTEGER NOT NULL,
  avatar_url VARCHAR(255) DEFAULT 'https://i.pinimg.com/originals/5c/72/cf/5c72cf8cf5184e9f9e8a1bf22ff039f5.png',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);