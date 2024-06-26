export function HelloWorldComp(props) {
  return <div>Hello, {props.name}!</div>;
}

export function HelloNameComp(props) {
  return (
    <div>
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}

export function ImageComponent(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}
