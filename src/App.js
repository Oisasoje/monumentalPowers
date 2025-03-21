import './App.css';
import Employee from './components/Employees';

function App() {
  const showEmployee = true



  return (
    <div className="App">
       { showEmployee ?

    <>
<Employee />
<Employee />
</>
: <p>Cannot view employees</p>
       }

    </div>
  );
}

export default App;
