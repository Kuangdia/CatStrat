SELECT transactions.*, username, strategy_name  
FROM transactions LEFT JOIN users 
ON target_user = users.id
LEFT JOIN strategies
ON target_strategy = strategies.id
WHERE user_id = 1 ORDER BY id desc;

-- AND target_user IS NOT NULL 
-- CASE WHEN username IS NOT NULL THEN username ELSE 'default' END AS username