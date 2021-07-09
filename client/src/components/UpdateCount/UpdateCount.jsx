import axios from 'axios'
import React from 'react'

const UpdateCount = (props) => {
   
    async function UpdateTotalCard() {
        const body =  { 
            name: `${props.name}`,
            total_cards: `${props.total_cards + 1}`
        }
        try {
        const response = await axios.put(`http://127.0.0.1:5000/api/categories/${props}/`, body)
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

export default UpdateCount;