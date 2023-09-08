import {useGetTodosQuery} from "./api/index.js";

export const TodosApp = () => {
  const {data: todos = [], isLoading} = useGetTodosQuery();
  return (
      <div style={{padding: '10rem'}}>
        <h2>Todos App</h2>
        <hr/>
        <span>IsLoading {(isLoading ? 'TRUE' : 'FALSE')}</span>
        <ul>
          {
            todos.map(todo => (
                <li key={todo.id} >
                  {todo.title}
                  <strong>{
                    todo.completed
                        ? <span style={{color:'indianred'}} >{`   (PENDING)  ` } </span>
                        : <span style={{color:'darkolivegreen'}}> (OK) </span>
                  }
                  </strong>
                </li>
            ))
          }
        </ul>
      </div>
  );
};