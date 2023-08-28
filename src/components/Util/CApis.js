import axios from "axios";

export async function getAllPlansUtil (){
    
    try {
        let response = await axios.get('http://localhost:8080/maxlife/allplans')
        return response
    } catch (error) {
        alert(error.message)
    }
}