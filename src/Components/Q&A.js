import React, { useState } from "react";
import data from "./Q&Adata";
import Singlequestion from "./questions";
import './index.css';

const Questons = ()=>{
    const [question,setquestion] = useState(data);

    return (
      <section className="Q-container">
        <h1>Question & Answer's about login</h1>
        <hr />
        <div className="items">
          {question.map((questions) => {
            return <Singlequestion key={questions.id} {...questions} />;
          })}
        </div>
      </section>
    );
}

export default Questons;