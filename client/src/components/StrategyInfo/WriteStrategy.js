import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function WriteStrategy(props) {

    const { name, description, type, setName, setDescription, save, cancel, creation, setShowForm, setCreation } = props;

    const onSave = () => {
        save(name, description);
        setShowForm(false)
        setCreation(!creation)
    }

    return (
        <>
            <details open className="alert">
                <summary className="summary">
                    <form className="write-name" onSubmit={event => event.preventDefault()} autoComplete="off">
                        <input
                            name="name"
                            type="text"
                            placeholder="Strategy Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </form>
                </summary>
                <section className="footer">
                    <form className="write-description" onSubmit={event => event.preventDefault()} autoComplete="off">
                        <input
                            name="name"
                            type="text"
                            placeholder="Strategy Description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </form>
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        <div>
                            <div>
                                <Button className="edit" variant="primary" onClick={onSave}>Save</Button>
                                <Button className="edit" variant="danger" onClick={cancel}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </details>
        </>
    );
}