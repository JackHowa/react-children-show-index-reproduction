const Container = (props) => {
  // this should only render once on initial load
  console.log("running");

  // children is an array of react elements
  const { showIndexElement } = props;

  console.log(props.children[showIndexElement], 'shown element')

  return (
    <div>
      <h1>Title</h1>
      {props.children[showIndexElement]}
    </div>
  );
};

export default Container;
