import './StrategyInfo.scss';
import Strategy from './Strategy';
import AddStrategy from './AddStrategy';

export default function StrategyInfo({ data }) {


  const parsedStrategies = data.map((i) =>
    <Strategy
      key={i.id}
      name={i.strategy_name}
      description={i.description}
      type={i.custom === true ? 'Custom' : 'Standard'}
    />
  );



  return (
    <section className="full-container">
      <div className="strategies">
        <h1>Strategies Explained</h1>
        <ul>{parsedStrategies}</ul>
        <ul><AddStrategy /></ul>
      </div>
    </section>
  );
}