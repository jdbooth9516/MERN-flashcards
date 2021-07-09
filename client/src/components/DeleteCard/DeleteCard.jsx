import axios from 'axios';
import React from 'react'
import DeleteCount from '../DeleteCount/DeleteCount'


export const DeleteCard = (cat, cardId, category) => {
    function confirmation () {
        const reply = window.confirm("Confirm Delete")
        if (reply) { 
            handleDelete(cat, cardId, category)
        }
    }

    function handleDelete(cat, cardId, category) {
        async function deleteCard(cat,cardId) { 
            try { 
                const response = await axios.delete(`http://127.0.0.1:8000/cards_category/${cat}/${cardId}/`)
                DeleteCount(category)
                window.location.reload()
            }   catch (error) {
                alert(error)
            }
        }
        deleteCard(cat,cardId)
    }

    confirmation()

    return (
        <div>
            
        </div>
    )
}
