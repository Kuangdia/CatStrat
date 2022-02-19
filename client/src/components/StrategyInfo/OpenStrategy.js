import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function OpenStrategy({ name, description, type }) {


    return (
        <>
            <details open className="alert">
                <summary className="summary">
                    <div style={{ paddingTop: '7px' }}>{name}</div>
                    <div><KeyboardArrowDownIcon style={{ width: '30px', height: '30px' }} /></div>

                </summary>
                <section className="footer">
                    <div className="description">{description}</div>
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        {type === 'Custom' &&
                            <div>
                                <Button className="edit" variant="warning">Edit</Button>
                                <Button className="edit" variant="danger">Delete</Button>
                            </div>
                        }
                    </div>
                </section>


            </details>
        </>

    );
}