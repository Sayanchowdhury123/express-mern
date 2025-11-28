const output = document.querySelector("#output");
const input = document.querySelector("input");
const btn = document.querySelector("#btn");

const EditTodo = async (id) => {
  try {
    let inputval = prompt("enter task");
    if (!inputval || inputval.trim() === "") {
      console.log("input was empty.");
      return;
    }
    const data = {
      newTitle: inputval.trim(),
    };

    console.log(data);

    await fetch(`http://localhost:9001/editTodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    fetchTodos();
  } catch (error) {
    console.log(error);
  }
};

const toggleTodo = async (id) => {
  try {
  

    await fetch(`http://localhost:9001/toggleComplete/${id}`, {
      method: "PATCH",
    });

    fetchTodos();
  } catch (error) {
    console.log(error);
  }
};

const fetchTodos = async () => {
  output.innerHTML = "";
  try {
    const data = await fetch("http://localhost:9001/getTodo");
    const res = await data.json();
    console.log(res.data);

    res.data.forEach((t, i) => {
      const p = document.createElement("div");
      p.addEventListener("click",() => {
        toggleTodo(t._id)
      })
        if(t.complete){
        p.style.textDecoration = "line-through"
      }else{
           p.style.textDecoration = ""
      }
      const delBtn = document.createElement("button");
      delBtn.setAttribute("class", "delBtn");
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", () => {
        delTodo(t._id);
      });
      const editBtn = document.createElement("button");
      editBtn.setAttribute("class", "editBtn");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        EditTodo(t._id);
      });
      p.textContent = t.title;
      p.append(delBtn, editBtn);
      output.append(p);
    });
  } catch (error) {
    console.log(error);
  }
};

const delTodo = async (id) => {
  try {
    const data = await fetch(`http://localhost:9001/deleteTodo/${id}`, {
      method: "DELETE",
    });
    console.log("todo deleted");
    fetchTodos();
  } catch (error) {
    console.log(error);
  }
};

fetchTodos();

const aTodo = async () => {
  const data = {
    title: input.value,
  };
  console.log(data);

  await fetch("http://localhost:9001/addTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  input.value = "";
  fetchTodos();
};

btn.addEventListener("click", aTodo);
