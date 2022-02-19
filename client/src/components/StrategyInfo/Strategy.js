import './StrategyInfo.scss';

export default function Strategy({ name, description, type }) {





    return (
        <>

                <details className="warning">
                    <summary className="summary">
                        <div>{name}</div>
                        <div>{type}</div>

                    </summary>
                    
                    <p>{description}</p>

                </details>

                {/* <details className="info" open>
                    <summary> End-of-day trading</summary>
                    <p>The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close. </p>
                </details>

                <details className="alert">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details> */}
        </>

    );
}