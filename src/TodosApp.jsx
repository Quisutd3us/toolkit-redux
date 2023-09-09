import {useGetTodosQuery, useGetTodoQuery} from "./api/index.js";
import {useState} from "react";

export const TodosApp = () => {
  const {data: todos = [], isLoading} = useGetTodosQuery();
  const [idTodo = 1, setIdTodo] = useState(1)
  const {data: todo = {}} = useGetTodoQuery(idTodo);

  const onPreviousClick =(e) =>{
    e.preventDefault();
    if(todo.id === 1) return;
    setIdTodo(todo.id - 1);
  };

  const onNextTodo =(e)=>{
    e.preventDefault();
    if(todo.id >100) return;
    setIdTodo(todo.id + 1);
  };

  return (
      <>
        <div className="row">
          <div className="col-12">
            <h2 className={'my-5'}>Todos App</h2>
            <hr/>
            <span>IsLoading : {(isLoading ? 'TRUE' : 'FALSE')}</span>
            <hr/>
          </div>
          <div className="col-xs-12 col-md-7 ">
            <div className="card p-3">
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Completed</th>
                </tr>
                </thead>
                <tbody>

                {
                  todos.map(todo => (
                      <tr key={todo.id}>
                        <th scope="row">{todo.id}</th>
                        <td>{todo.title}</td>
                        <td
                            className={` text-center ${!todo.completed ? 'text-bg-success' : 'text-bg-danger'}`}>{todo.completed ? 'False' : 'True'}</td>
                      </tr>
                  ))
                }

                </tbody>
              </table>
            </div>
          </div>

          {/*Search by id*/}
          <div className="col-xs-12 col-md-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Search by Id</h5>
                <form
                    className={'d-flex flex-column gap-4'}>
                  <div className="form-group">
                    <input
                        onChange={(e) => setIdTodo(+e.target.value)}
                        value={idTodo}
                        type={"number"}
                        className="form-control"
                        id="todoId"
                        placeholder="Enter Todo Id"/>
                  </div>
                </form>
              </div>
              <div className="card-body">
                <h5 className={`card-title p-2 rounded text-center ${(!todo.completed) ? 'text-bg-success' : 'text-bg-danger'}`}>{todo.title}</h5>
              </div>
              <div className="row">
                <div className="col d-flex flex-row justify-content-center gap-2 p-4">
                  <button
                      className="btn btn btn-outline-dark btn-lg"
                      onClick={onPreviousClick}>{'<<'}
                  </button>
                  <button
                      className="btn btn btn-outline-dark btn-lg"
                      onClick={onNextTodo}>{'>>'}
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </>
  );
};