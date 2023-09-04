

const addItem = (queue, task) => {
    queue.unshift(task)
    console.log(queue)

}

const deleteItem = (queue) => {
    let delItem = queue.shift()
    console.log("completed task is:", delItem)
    console.log(queue)
}

const markComplete=(queue,x)=>{
    let updatedQueue=queue.map((item)=>{
        {
            if(item.task==x){
                item.value=false
            }
            return item
        }
    })
    let remainingTask=updatedQueue.filter((item)=>{
        if(item.value===true){
            return item
        }
    })
    console.log(remainingTask)
}



const queue = [{ task: "wash", value: true }, { task: "cleaning", value: true },{task:"reading",value:true}]

const task = { task: "running", value: true }


console.log("1=>add item\n2=>delete item\n3=>marck as complete\n")

let x = 3

switch (x) {
    case 1: addItem(queue, task)
        break;
    case 2: deleteItem(queue)
        break;
    case 3: let x = "cleaning"
        markComplete(queue, x)
        break;
    default: console.log("enter a valid option")
}


