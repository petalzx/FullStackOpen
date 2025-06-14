const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Course = ({ name, parts }) => {
  const total = parts.reduce((accumulator, part) => {
    // console.log(accumulator, part);
    return accumulator + part.exercises;
  }, 0);

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p>
        <strong>total of {total} excercises</strong>
      </p>
    </div>
  );
};

export default Course