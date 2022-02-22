import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function Confirm({delete, cancel}) {


    return (
        <>
            <div className="form">
                <div className="summary">
                    Are you sure?
                </div>
                <section className="footer">
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        <div>
                            <div>
                                <Button className="edit" variant="danger" onClick={delete}>Yes</Button>
                                <Button className="edit" variant="warning" onClick={cancel}>No</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}