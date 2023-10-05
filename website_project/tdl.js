const ITEMS_CONTAINER = document.getElementById("items");
const ITEMS_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems(){
    const value = localStorage.getItem("todo") || "[]";

    return JSON.parse(value);
}

function setItems(items){
    const itemsJson = JSON.stringfly(items);

    localStorage.setItem("todo", itemsJson);
}

function addItem(){
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();
}

function updateItem(item, key, value){
    item[key] = value;

    setItems(item);
    refreshList();
}

function refreshList(){
    //TODO SORT ITEMS

    ITEMS_CONTAINER.innerHTML = "";

    for(const item of item){
        const itemElement = ITEMS_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.description;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked)
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});

refreshList;