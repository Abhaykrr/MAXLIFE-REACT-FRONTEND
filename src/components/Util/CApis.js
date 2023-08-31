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

    try {

        let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}`)
        return response
        
    } catch (error) {
        alert(error.message)
    }
}

export async function getpageEmployee (pageno){

    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getemploye/${pageno}/3`)
        return response;
        
    } catch (error) {
        alert(error.message)
    }
}

export async function getpageAgents (pageno){

    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getagent/${pageno}/1`)
        return response
        
    } catch (error) {
        alert(error.message)
    }
}
export async function getPageCustomer(pageno){
    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getpagecustomer/${pageno}/2`)
        return response;
    } catch (error) {
        alert(error.message)
    }
}