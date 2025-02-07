import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
function App() {
  return (<div className="todo-container text-center"> 
      <AppName></AppName>
      <AddTodo />
      <div class="row">
        <div class="col-6">Buy Milk</div>
        <div class="col-4">4/10/23</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          Go TO College
        </div>
        <div class="col-4">
          4/10/23
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
        </div>
           </div>);
      }

export default App;
