import './Summary.scss';
import { Paper } from '@material-ui/core';

export default function Statistic(props) {

    return (
        <Paper elevation={2} className="stats__total-earnings" style={{ borderRadius: '30px' }}>
           <img src={props.image} className="stats__image"></img>
            <div className="stats__data"> {props.data} </div>
        </Paper>
    );
}