INSERT INTO strategies (strategy_name, description, custom) 
VALUES 
('News trading', 'A news trading strategy​​ involves trading based on news and market expectations, both before and following news releases. Trading on news announcements can require a skilled mind-set as news can travel very quickly on digital media. Traders will need to assess the news immediately after it’s released and make a quick judgement on how to trade it.', false),
('End-of-day trading', 'The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close.', false),
('Trend trading', 'This strategy describes when a trader uses technical analysis to define a trend, and only enters trades in the direction of the pre-determined trend.', false);

INSERT INTO strategies (strategy_name, description, custom, active, upvotes, downvotes) 
VALUES 
('Custom trading', 'I made this custom trading strategy that uses psychic powers.', true, true, 10, 4);