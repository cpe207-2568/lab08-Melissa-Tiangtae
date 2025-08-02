import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Sidebar} from "./components/Sidebar"
import {TaskInput} from "./components/TaskInput";
import { TaskCards } from "./components/Task";
import { type TaskCardProps } from "./libs/types";



function App() {

  const Taskcards: TaskCardProps[] = [
{id: 1,title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: true},
{id: 2,title: "Write code",description: "Finish project for class",isDone: true},
{id: 3,title: "Deploy app",description: "Push project to GitHub Pages",isDone: true},];



  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      {/* <header className="text-white bg-primary p-2 w-100">
        <h4>Note App</h4>
      </header> */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        {/* <aside
          className="d-flex flex-column p-3"
          style={{
            width: "200px",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-between",
          }}
        > */}
          {/* เมนูด้านบน */}
          {/* <nav className="nav flex-column gap-2">
            <h5>เมนู</h5>
            <a className="nav-link active" href="#">
              หน้าแรก
            </a>
            <a className="nav-link" href="#">
              รายการ
            </a>
            <a className="nav-link" href="#">
              เกี่ยวกับ
            </a>
          </nav> */}

          {/* แสดงชื่อผู้ใช้ด้านล่าง */}
          {/* <div className="fw-bold text-muted">
            <p>chanadda : admin</p>
          </div>
        </aside> */}
        <Sidebar userName = "Melissa" type ="admin"></Sidebar>

        
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className = "col-12 m-2 p-0">
            
            <TaskInput></TaskInput>
            {/* Card รายการ */}

              <TaskCards {...Taskcards[0]} />
              <TaskCards {...Taskcards[1]} />
              <TaskCards {...Taskcards[2]} />
         
              {/* <Task  id={1} 
              title="Read a book" 
              description="Vite + React + Bootstrap + TS" 
              isDone={true} ></Task>

             

            <Task id={2}  title="Write Code" 
              description="Finish project for class" 
              isDone={true} ></Task>
            
          
            
            <Task 
              id={3} // CARD TEE 3  
              title="Deploy app"
              description="Push project to GitHub Pages"
              isDone={true} 
            ></Task> */}
              </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      {/* <footer className="text-secondary text-center p-2 bg-light mt-auto">
        Copyright © 2026 chanadda thanyaratthanon 67062039
      </footer> */}

      <Footer year="2026" fullName ="Melissa Tiangtae" studentId="670610724"></Footer>
    </div>
  );
}

export default App;
