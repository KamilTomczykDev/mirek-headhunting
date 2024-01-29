import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "./contactsSlice";
import SpinnerMini from "../../ui/SpinnerMini";

function AddNoteForm({ id, fullName }) {
  const [note, setNote] = useState("");
  const { isLoading } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(id, note);
    dispatch(updateContact({ id, newData: { note: note } }));
  }
  console.log(id);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-white">
      <label>Editing: {fullName} </label>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="bg-main-800 p-1"
      />
      <button
        onClick={(e) => e.stopPropagation()}
        className="bg-secondary-400 hover:bg-secondary-200 text-main-950 p-2 font-semibold disabled:opacity-60"
      >
        {isLoading ? <SpinnerMini /> : "Add note"}
      </button>
    </form>
  );
}

export default AddNoteForm;
