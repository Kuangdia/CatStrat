import './StrategyInfo.scss';

export default function Strategy({ data }) {

    // Organize and manipulate data





    return (
        <>
            <div class="card">
                <h1>Strategies Explained</h1>

                <details class="warning">
                    <summary>News Trading</summary>
                    <p>A news trading strategy​​ involves trading based on news and market expectations, both before and following news releases. Trading on news announcements can require a skilled mind-set as news can travel very quickly on digital media. Traders will need to assess the news immediately after it’s released and make a quick judgement on how to trade it.</p>

                </details>

                <details class="info" open>
                    <summary> End-of-day trading</summary>
                    <p>The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close. </p>
                </details>

                <details class="alert">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>
            </div>
        </>

    );
}