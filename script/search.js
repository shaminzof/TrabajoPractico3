//Buscar por texto
const filter = async()=>{
    let filteredList;
    const text = event.target.value;
    if (text==undefined) {
        printList(employeeList);
    }
    try {
        const filtered = await axios.get(`${baseUrl}?search=${text}`);
        filteredList = filtered.data;
        printList(filteredList);
    }catch (err){
        handleError;
    }
}

const searchBar = document.querySelector(".searchBar");
searchBar.addEventListener("keyup", filter)