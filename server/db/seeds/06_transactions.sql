-- unlock user's chart
INSERT INTO transactions (user_id, is_spending, description, amount, target_user, unlock_chart) 
VALUES 
(1, TRUE, 'Unlock others'' chart info', 5, 2, true);

-- unlock user's strategies
INSERT INTO transactions (user_id, is_spending, description, amount, target_user, unlock_strategies) 
VALUES 
(1, TRUE, 'Unlock others'' chart info', 5, 3, true);

-- like users' profiles
INSERT INTO transactions (user_id, is_spending, description, amount, target_user) 
VALUES
(1, TRUE, 'Like others'' profile', 1, 2),
(1, TRUE, 'Like others'' profile', 1, 3);

-- upvote strategie
INSERT INTO transactions (user_id, is_spending, description, amount, target_strategy) 
VALUES 
(1, true, 'Unlock others'' strategy info', 5, 5),
(1, true, 'Unlock others'' strategy info', 5, 6);

-- buy coins
INSERT INTO transactions (user_id, is_spending, description, amount) 
VALUES 
(1, false, 'Purchased coins', 20),
(1, false, 'Purchased coins', 10);


