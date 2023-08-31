import axios from "axios";

export async function getAllPlansUtil (){
    
    try {
        let response = await axios.get('http://localhost:8080/maxlife/allplans')
        return response
    } catch (error) {
        alert(error.message)
    }
}


export async function getAllSchemesUtil (){
    
    try {
        let response = await axios.get('http://localhost:8080/maxlife/allschemes')
        return response
    } catch (error) {
        alert(error.message)
    }
}


export async function getCustomerAllAccountsUtil (customerId,currpage,pagesize){

    try {

        let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)
        return response
        
    } catch (error) {
        alert(error.message)
    }
}