export const Test = (props: { name: string; age: number }) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};
