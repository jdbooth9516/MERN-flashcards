import React, { useState } from 'react'
import ReactModal from 'react-modal'
import useForm from '../../useForm'
import axios from 'axios';
import "./UpdateCard.css";
import "../CreateCard/CreateCard.css"


const UpdateCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(() => {
        updateInfo(values)
    });

    const [open, setOpen] = useState(false);

    function updateInfo(values) { 
        async function updateCardInDatabase(values) { 
            try { 
                const response = await axios.put(`http://127.0.0.1:8000/cards_category/${props.categoryId}/${props.cardId}/`, values);
            } catch (error) { 
                alert(error)
                return
            }
            alert(` card has updated`)
        }
        updateCardInDatabase(values);
        props.questionVisible(true)
        props.update()
    }

    return (
      <div>
        <button className="edit-card-btn"onClick={() => setOpen(true)}>Edit Card</button>
        <ReactModal
          isOpen={open}
          className="Modal"
          overlayClassName="Overlay"
        >
        <div className="form-container">
          <button className="del-btn editModal-btn" onClick={() => setOpen(false)}>X</button>
          <h3 className="edit-card-title">Edit Card Form</h3>
          <form className='edit-form-body' onSubmit={handleSubmit}>
            <label style={{display: 'none'}}>
              Category:
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={values.category = props.categoryId}
                required={true}
              />
            </label>
            <label>
              Question:
              <input
                type="text"
                name="question"
                onChange={handleChange}
                value={values.question}
                required={true}
                className="edit-form"
              />
            </label>
          
            <label>
              Answer:
              <input
                type="text"
                name="answer"
                onChange={handleChange}
                value={values.answer}
                required={true}
                className="edit-form"
              />
            </label>
  
            <button className='edit-form-btn' type="submit">Update Card</button>
          </form>
        </div>
        </ReactModal>
      </div>
    );
}

export default UpdateCard
