interface Props {
  name: string;
  age: number;
}

const Trial = ({ name, age }: Props) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};

export default Trial;
