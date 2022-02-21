DROP TABLE IF EXISTS followers CASCADE;

CREATE TABLE strat_sellers (
  PRIMARY KEY (user_id, buyer_id),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);