import './App.css';
import Home from './Pages/home/index'
import ProjectDetails from './Pages/projectdetails/index'
import FAQs from './Pages/FAQs/index'
import AccountDetails from './Pages/acountdetails/index'
import Projects from './Pages/projects/index'
import LastRequestPage from './Pages/requestlast/index'
import Requests from './Pages/requests/index'
import SideBarNav from './common/components/sidebar/index'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
 <Router>
<SideBarNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projectdetails' element={<ProjectDetails/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/accountdetails' element={<AccountDetails/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/lastrequestpage' element={<LastRequestPage/>}/>
        <Route path='/request' element={<Requests/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
