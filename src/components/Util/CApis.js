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

<<<<<<< HEAD

export async function getCustomerAllAccountsUtil (customerId,currpage,pagesize){
=======
export async function getAllCustomer(){
    try {
        let response = await axios.get('http://localhost:8080/maxlife/getallcustomer')
        return response;
    } catch (error) {
        alert(error.message)
    }
}
export async function getallEmployes(){
    try {
        let response = await axios.get('http://localhost:8080/maxlife/getallemploye')
        return response;
    } catch (error) {
        alert(error.message)
    }
}
export async function getallAgents(){
    try {
        let response = await axios.get('http://localhost:8080/maxlife/getallagent')
        return response;} catch (error) {
            alert(error.message)
        }
    }
export async function getCustomerAllAccountsUtil (customerId){
>>>>>>> a72990a2adab242c465c34ba7d83bd1adaf003ed

    try {

        let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)
        return response
        
    } catch (error) {
        alert(error.message)
    }
}