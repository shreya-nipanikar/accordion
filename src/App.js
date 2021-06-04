import React , { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './Data';
import Accordion from './Accordion';

function App() {
   
  const [questions, setQuestions] = useState(Data);

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 col-11 my-5 mx-auto myclass p-2">
        <h3 className="text-center my-4">React Interview Questions</h3>
          
            {
              questions.map((result,index) => {
                   return <Accordion key={index} id={result.id} questions={result.question} 
                   answers={result.answer}

                    />
              })
            }
          
        </div>
      </div>
    </div>
   
  );
}

export default App;
