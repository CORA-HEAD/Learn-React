
function Todoitem1(){
  let todoname="Buy Milk";
  let tododate="4/10/23";
    return (<>
    <div class="row Af-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger Af-button">
            Delete
          </button>
        </div>
      </div>
    </>
    )
}
export default Todoitem1;
