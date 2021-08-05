import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import firebase from "./util/Fire";

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  //add a task

  const addTask = useCallback(async ({ text, dayTime, reminder }) => {
    //define an id number
    const id = Math.floor(Math.random() * 1000) + 1;
    try {
      //send data to firebase database
      firebase.database().ref(`tasks/${id}`).set({
        id: id,
        text: text,
        dayTime: dayTime,
        reminder: reminder,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //fetch tasks
  useEffect(() => {
    firebase
      .database()
      .ref("tasks")
      .on("value", (tasks) => {
        let taskList = [];
        tasks.forEach((task) => {
          let newTask = {
            id: task.val().id,
            text: task.val().text,
            dayTime: task.val().dayTime,
            reminder: task.val().reminder,
          };
          taskList.push(newTask);
        });
        setTasks(taskList);
      });
  }, []);

  //delete task
  const delTask = (id) => {
    firebase.database().ref(`tasks`).child(id).remove();
  };

  //set a reminder
  const toggleReminder = useCallback(async (task) => {
    try {
      //read the reminder value in the database then update
      const path = firebase.database().ref(`tasks`).child(task);
      let data;
      path.on("value", (snapshot) => {
        data = snapshot.val();
      });
      path.update({ reminder: !data.reminder });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <Header
          onToggle={() => setToggleForm(!toggleForm)}
          formState={toggleForm}
        />

        {toggleForm && <AddTask onAdd={addTask} />}

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={delTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Task recorded!"
              )}
            </>
          )}
        />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
