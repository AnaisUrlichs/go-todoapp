import React, { useEffect } from "react";
import "./App.css";
// import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


// function Todo({ todo, index, markTodo, removeTodo }) {
//   return (
//     <div
//       className="todo"
      
//     >
//       <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
//       <div>
//         <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
//         <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
//       </div>
//     </div>
//   );
// }

// function FormTodo({ addTodo }) {
//   const [value, setValue] = React.useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}> 
//     <Form.Group>
//       <Form.Label><b>Add Todo</b></Form.Label>
//       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
//     </Form.Group>
//     <Button variant="primary mb-3" type="submit">
//       Submit
//     </Button>
//   </Form>
//   );
// }

function App() {

  const [todos, setTodos] = React.useState(
    {list: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'localhost:8000/todo',
      );
 
      setTodos(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <ul>
      {todos.list.map(item => (
        <li key={item.Id}>
          <a>{item.Description}</a>
        </li>
      ))}
    </ul>
  );

  // const addTodo = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // };

  // const markTodo = id => {
  //   const newTodos = [...todos];
  //   newTodos[id].isDone = true;
  //   setTodos(newTodos);
  // };

  // const removeTodo = id => {
  //   const newTodos = [...todos];
  //   newTodos.splice(id, 1);
  //   setTodos(newTodos);
  // };

  // return (
  //   <div className="app">
  //     <div className="container">
  //       <h1 className="text-center mb-4">Todo List</h1>
  //       <FormTodo addTodo={addTodo} />
  //       <div>
  //         {todos.map(item => (
  //           <Card>
  //             <Card.Body>
  //               <Todo
  //               key={item.Id}
  //               id={item.Id}
  //               todo={item.Description}
  //               markTodo={markTodo}
  //               removeTodo={removeTodo}
  //               />
  //             </Card.Body>
  //           </Card>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;