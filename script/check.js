

const mainCheck = document.querySelector("#check-all");

const checkAll =() => {
    let allCheckbox = document.querySelectorAll(".checkbox");

    if (mainCheck.checked){
        for (let check of allCheckbox) {
            check.checked = true;
        }
    } else {            
        for (let check of allCheckbox) {
            check.checked = false;
        }
    }
}

mainCheck.addEventListener("change",checkAll);