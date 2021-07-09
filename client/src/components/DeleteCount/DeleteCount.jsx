import axios from 'axios'
import React from 'react'

const DeleteCount = (props) => {
   
    async function UpdateTotalCard() {
        const body =  { 
            id: `${props.id}`,
            name: `${props.name}`,
            total_cards: `${props.total_cards - 1}`
        }
        try {
        const response = await axios.put(`http://127.0.0.1:8000/category/${props.id}/`, body)
        console.log(response.data);  
        } catch (error) { 
            alert(error) 
        }
    }

    UpdateTotalCard()

    return (
        <div>
            
        </div>
    )
}

export default DeleteCount;