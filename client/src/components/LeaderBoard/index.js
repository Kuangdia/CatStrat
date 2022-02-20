import React, { useEffect, useState } from 'react';
import Axios from "axios";
import ToggleButton from './ToggleButton';
import Top3List from './Top3List';
import LoserList from './LoserList';
/*
3 divs
  1) toggle bar
  2) top 3
  3) losers
3 components
  1) toggle bar
  2) top container
  3) loser lists
  4) container
*/

export default function LeaderBoard() {

  const [winStratData, setWinStratData] = useState([]);
  const [loserStratData, setLoserStratData] = useState([]);

  useEffect(() => {
    
    Axios.get("/leaderBoard")
      .then((res) => {
        let index = 1;
        const returnedData = res.data;
        console.log("leaderboardData", returnedData);

        const cleanedData = returnedData.map(stratObj => {
          return {
            order: index++,
            strategyName: stratObj.strategy_name,
            upvotes: stratObj.upvotes,
            userName: stratObj.username
          }
        });
        
        const top3WinStratData = cleanedData.slice(0, 3);
        const loseStratData = cleanedData.slice(3);

        setWinStratData([...top3WinStratData]);
        setLoserStratData([...loseStratData]);
      })
  }, []);

  const buttonOnClick = () => {
    alert("button clicked!");
  }
  return (
    <div className='ld'>

      <div className="ld__item ld__head">
        <ToggleButton 
          buttonName="Top Strategies"
          buttonOnClick={ buttonOnClick } 
        />
        <ToggleButton 
          buttonName="Top Coins Owner"
          buttonOnClick={ buttonOnClick }
        />
      </div>

      <div className="ld__item ld__top-winner">
        <Top3List winStratData={ winStratData } />
      </div>

      <div className="ld__item ld__loser">
        <LoserList loserStratData={ loserStratData } />
      </div>

    </div>
  );
}