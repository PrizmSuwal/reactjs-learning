import './checkbox.css';

function Checkbox(props) {
  return (
    <div>
      <input type="checkBox" className="checkbox" />
      <span className="label">{props.name}</span>
    </div>
  );
}

export default Checkbox;
