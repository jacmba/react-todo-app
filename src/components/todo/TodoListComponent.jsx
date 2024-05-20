const TodoListComponent = () => {

  const todos = [
    {id: 1, description: 'Learn AWS'},
    {id: 2, description: 'Learn FullStack'},
    {id: 3, description: 'Learn DevOps'},
  ]

  return (
    <div className="TodoListComponent">
      <h1>Things to do</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key="{todo.id}">
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoListComponent