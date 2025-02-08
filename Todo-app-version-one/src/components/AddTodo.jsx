export default function AddTodo(){
    return (<div class="row Af-row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success Af-button">
            Add
          </button>
        </div>
      </div>

    )
}