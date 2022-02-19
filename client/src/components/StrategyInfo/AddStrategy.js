import './StrategyInfo.scss';
import Button from 'react-bootstrap/Button';


export default function AddStrategy(props) {

    return (
        <>

            <details className="alert">
                <summary className="summary">
                    Hello
                </summary>
                <section className="footer">
                    <div className="buttons">
                            <div>
                                <Button className="edit" variant="warning">Edit</Button>{' '}
                                <Button className="edit" variant="danger">Delete</Button>{' '}
                            </div>
                    </div>
                </section>
            </details>

        </>
    );
}