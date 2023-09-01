import axios from "axios";

export async function getAllPlansUtil() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/allplans");
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getAllSchemesUtil() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/allschemes");
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getCustomerAllAccountsUtil(customerId, currpage, pagesize) {
  try {
    let response = await axios.get(
      `http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`
    );
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getAllCustomer() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/getallcustomer");
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getallEmployes() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/getallemploye");
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getallAgents() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/getallagent");
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getpageEmployee(pageno) {
  try {
    let response = await axios.get(`http://localhost:8080/maxlife/getemploye/${pageno}/8`);
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getpageAgents(pageno) {
  try {
    let response = await axios.get(`http://localhost:8080/maxlife/getagent/${pageno}/8`);
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getPageCustomer(pageno) {
  try {
    let response = await axios.get(`http://localhost:8080/maxlife/getpagecustomer/${pageno}/8`);
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export async function getCustomerMessagesUtil(customerId) {
    try {
      const response = await axios.get(
        `http://localhost:8080/maxlife/messages/messages/${customerId}`
      );
      return response;
    } catch (error) {
      alert(error.message); 
    }
  }

export async function addMessageUtil(customerId, message) {
    try {
      let response = await axios.post(
        `http://localhost:8080/maxlife/messages/addmessage/${customerId}`,
        { question: message }
      );
      return response;
    } catch (error) {
      alert(error.message); 
    }
  }

  export async function fetchAllMessagesUtil() {
    try {
      const response = await axios.get('http://localhost:8080/maxlife/messages/allmessages');
      return response.data;
    } catch (error) {
      throw error; 
  }
}

export async function saveAdminResponseUtil(messageId, adminResponse) {
  try {
    const response = await axios.post(`http://localhost:8080/maxlife/messages/adminresponse/${messageId}`, adminResponse, {
      headers: {
        'Content-Type': 'text/plain', 
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}


<<<<<<< HEAD
=======
export async function getAllSchemesUtil (){
    
    try {
        let response = await axios.get('http://localhost:8080/maxlife/allschemes')
        return response
    } catch (error) {
        alert(error.message)
    }
}


// export async function getCustomerAllAccountsUtil (customerId,currpage,pagesize){
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
// export async function getCustomerAllAccountsUtil (customerId){

//     try {

//         let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)
//         return response
        
//     } catch (error) {
//         alert(error.message)
//     }
// }

export async function getpageEmployee (pageno){

    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getemploye/${pageno}/8`)
        return response;
        
    } catch (error) {
        alert(error.message)
    }
}

export async function getpageAgents (pageno){

    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getagent/${pageno}/8`)
        return response
        
    } catch (error) {
        alert(error.message)
    }
}
export async function getPageCustomer(pageno){
    try {
        
        let response = await axios.get(`http://localhost:8080/maxlife/getpagecustomer/${pageno}/8`)
        return response;
    } catch (error) {
        alert(error.message)
    }
}
>>>>>>> 0cb85da7028e40351516addaa153d67205332acd
