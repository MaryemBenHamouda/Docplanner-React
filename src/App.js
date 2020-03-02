import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


const Menus=[
  { title:"A bout us", link:"https://www.google.com" },
  { title:"Career", link:"https://www.google.com"},
  { title:"Departments", link:"#",subMenu:["Marketiong & BR","Customer Success & Sales", "IT, Product, Design & US","Finance & Administration"]},
]
const Headers=["https://www.docplanner.com/img/sygnet.png","Making the healthcare experience more human"]

const footer=[{
  p:"are leaders in 10 countries:",lien:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina ; Chile",
  txt1:"This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.",
  txt2:"www.docplanner.com © 2020"
}]


function App() {
  return (
    <div >
      <nav className="App-header">
        <Navbar data={Menus} />
      </nav>
      <div className="container">
          <header className="head">
            <Header text={Headers} />
          </header>
      </div>
      <main className="mains">
          <Main />           
      </main>
      <div className="container">
        <footer >
          <Footer txt={footer} />
        </footer>    
      </div>

    </div>
    
  );
}

export default App;
