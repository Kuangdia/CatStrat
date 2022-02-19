import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function WriteStrategy({ name, description, type, setName, setDescription}) {


    return (
        <>
            <details className="alert">
                <summary className="summary">
                    <form onSubmit={event => event.preventDefault()} autoComplete="off">
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Strategy Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </form>
                </summary>
                <section className="footer">
                    <div className="description">{description}</div>
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        <div>
                            <form onSubmit={event => event.preventDefault()} autoComplete="off">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter Strategy Name"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                </section>
            </details>
        </>
    );
}