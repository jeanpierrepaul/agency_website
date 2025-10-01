import CountUp from 'react-countup';
import './counter.css';

const counterData = [
  {
    number: 5,
    text: 'Contrats signés',
    suffix: '+',
  },
  {
    number: 2,
    text: 'Clients satisfaits & permanents',
    suffix: '+',
  },
  {
    number: 100,
    text: 'Clients accompagnés',
    suffix: '%',
  },
];

export const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((i, idx) => (
            <div key={idx} className="counter__item">
              <h3 className="counter__number">
                <CountUp
                  end={i.number}
                  suffix={i.suffix}
                  separator=""
                  enableScrollSpy={true}
                />
              </h3>
              <h4 className="counter__title">{i.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
