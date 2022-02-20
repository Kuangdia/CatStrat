-- get top 6 strategies
--logic error! need has another col in strategies table
--show creator 
  --cause others can buy custom strat


SELECT strategies.*, users.username, users.avatar_url FROM users_strategies
JOIN strategies ON strategies.id = strategy_id
JOIN users ON user_id = users.id
WHERE custom = true
ORDER BY upvotes DESC;

