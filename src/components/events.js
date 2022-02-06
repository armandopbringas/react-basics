import '../styles/events.css';

const Events = props => {
  return (
    <>
      <li
        onClick={props.onComplete}
        className={`todo-item todo-item-p ${props.completed && 'todo-item-p--complete'}`}
      >
        {props.text}
      </li>
    </>
  );
}
 
export default Events;