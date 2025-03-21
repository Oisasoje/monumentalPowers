import './App.css';
import Employee from './components/Employees';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true



  return (
    <div className="App">
       { showEmployee ?

    <>
    <input type="text" onChange={(e) => {
      console.log(e.target.value);
      setRole(e.target.value);
    }}/>
<Employee name="Akoji" role="Intern"/>
<Employee name="Abby" role={role}/>
<Employee name="John"/>
</>
: <p>Cannot view employees</p>
       }

    </div>
  );
}

export default App;
