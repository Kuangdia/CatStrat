import './StrategyInfo.scss';
import Button from 'react-bootstrap/Button';


export default function AddStrategy(props) {

    return (
        <div >
            <details className="alert">
                <summary className="add-strat">
                    <img
                        className="add"
                        src="add2.png"
                        alt="Add"
                        onClick={props.onClick}
                    />
                </summary>
                <section className="footer">
                    hello
                </section>
            </details>
        </div>
    );
}