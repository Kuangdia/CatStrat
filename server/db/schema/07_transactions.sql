DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  is_spending BOOLEAN NOT NULL DEFAULT TRUE,
  description VARCHAR(300),
  amount INTEGER NOT NULL,
  target_user INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL,
  unlock_chart BOOLEAN NOT NULL DEFAULT false,
  unlock_strategies BOOLEAN NOT NULL DEFAULT false,
  target_strategy INTEGER REFERENCES strategies(id) ON DELETE CASCADE DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);