function Employee (props) {
  return (
    <>
    <h3>Here is {props.name}</h3>
    {props.role ? <p>{props.role}</p> : <p>No role</p>}
    </>
  );
}


export default Employee;