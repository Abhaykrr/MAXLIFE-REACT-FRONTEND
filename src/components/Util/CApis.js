import axios from "axios";

export async function getAllPlansUtil() {
  try {
    let response = await axios.get("http://localhost:8080/maxlife/allplans");
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

  export async function getCustomerMessagesByPageUtil(customerId,currpage,pagesize) {
    try {
      const response = await axios.get(
        `http://localhost:8080/maxlife/messages/customermessagespage/${customerId}/${currpage}/${pagesize}`,{
        
          
        }
      );
      return response.data;
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
      return response;
    } catch (error) {
      throw error; 
  }
}

// export async function getAllMessagesPageUtil(currpage, pagesize) {
//   try {
//     const response = await axios.get(`http://localhost:8080/maxlife/messages/allmessagespage`,{
//       params:{
//         currpage:currpage,
//         pagesize: pagesize
//       }
//     })
//     return response;
//   } catch (error) {
//     alert(error.message);
//   }
// }
    

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

export const getAllCust = async(customerId)=>{

  try {
    let response = await axios.get('http://localhost:8080/maxlife/getaccounts', {
  params: {
    customerid: customerId,
    inputtext:"",
    status:'All',
    currpage: 0,
    pagesize: 2
  }
});


return response
  } catch (error) {
    alert(error.message)
  }

}

export const getAllAccounts = async(customerId)=>{

  try {
    const response = await axios.get('http://localhost:8080/maxlife/allaccounts', {
  params: {
    policynoprefix:"",
    status:"All",
    currpage: 0,
    pagesize: 400
  }

});


return response
  } catch (error) {
    alert(error.message)
  }

}
export const getAllUsers = async(customerId)=>{

  try {
    const response = await axios.get('http://localhost:8080/maxlife/getpagecustomer', {
  params: {
   
    currpage: 0,
    pagesize: 400
  }

});


return response
  } catch (error) {
    alert(error.message)
  }

}

export const getAllClaims = async(customerId)=>{

  try {
    const response = await axios.get('http://localhost:8080/maxlife/allclaims', {
          params: {
            inputtext:"",
            status:"All",
            currpage: 0,
            pagesize: 500
          }
        });


return response
  } catch (error) {
    alert(error.message)
  }

}

