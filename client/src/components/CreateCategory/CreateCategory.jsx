import axios from "axios";
import React, { useState } from "react";
import useForm from "../../useForm";
import ReactModal from "react-modal";
import "./CreateCategory.css";

export const CreateCategory = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    createCat(values);
  });
  console.log(values);
  const [open, setOpen] = useState(false);

  function createCat(values) {
    async function addCatToDatabase(values) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/categories/",
          values
        );
      } catch (error) {
        alert(error);
        return;
      }
      window.location.reload();
      alert(`New category has been created`);
    }
    addCatToDatabase(values);
  }

  return (
    <div>
      <button className="CC-btn" onClick={() => setOpen(true)}>
        {" "}
        Create Category
      </button>
      <ReactModal isOpen={open} className="Modal" overlayClassName="Overlay">
        <div className="CC-container">
          <button
            className="del-btn CCModal-btn"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <h3 className='CC-title'>Create New Category</h3>
          <form className="CC-form" onSubmit={handleSubmit}>
            <label>
              Category:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                required={true}
              />
            </label>
            <button className="CC-submit" type="submit">Create Category</button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
};
