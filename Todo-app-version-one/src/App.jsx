import AppName from './components/AppName';
function App() {
  return (<div className="todo-container text-center"> 
      <AppName></AppName>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
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
