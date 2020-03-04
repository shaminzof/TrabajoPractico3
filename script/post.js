//Acá va el post
const openAddModal = document.querySelector("#addBttn");
openAddModal.addEventListener("click", () => {
    openModal("add-employee");
});


const fullnameid = document.querySelector("#add-name");
const emailid = document.querySelector("#add-email");
const addressid = document.querySelector("#add-address");
const phoneid = document.querySelector("#add-phone");

const createEmployee = async () => {
  
  let user= {
      fullname: fullnameid.value,
      email: emailid.value,
      address:  addressid.value,
      phone: phoneid.value
    }
    
    try {
      const res = await axios.post(baseUrl, user);
      getEmployees();
      fullnameid.value="";
      emailid.value="";  
      addressid.value="";
      phoneid.value="";
    } catch (err) {
        handleError(err);
    }
  
};

const submitBttn = document.querySelector("#submitAdd");
submitBttn.addEventListener("click", async()=>{

  await createEmployee();  
  let card = submitBttn.parentElement.parentElement;
  closeModal(card);
});
