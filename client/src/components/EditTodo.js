import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description)
    // console.log(todo);

    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            // console.log(response);
            window.location ="/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <Fragment>
            {/* <!-- Trigger the modal with a button --> */}
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>

{/* <!-- Modal --> */}
<div id={`id${todo.todo_id}`} className="modal fade" role="dialog">
  <div className="modal-dialog">

    {/* <!-- Modal content--> */}
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
      </div>
      <div className="modal-body">
        <form >
        <input type="text" className="form-control" value={description} onChange={(event)=> setDescription(event.target.value)}/>

        </form>
      </div>
      <div className="modal-footer">
        
      <button className="btn btn-success" onClick={ event => updateDescription(event) } >Save</button>
      <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Cancel</button>
      </div>
    </div>

  </div>
</div>
        </Fragment>
    );
}

export default EditTodo;