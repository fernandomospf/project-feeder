import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Context from "../../Context/Login";
import { QuestionCard } from "../../Style";

function QuestionModal() {
  const { isModal, setIsModal } = useContext(Context);

  return (
    <QuestionCard>
      <AiFillCloseCircle
        className="icon-close"
        onClick={() => setIsModal(!isModal)}
      />
      <h3>Bem-vindo(a) ao Feeder!</h3>
      <article>
        Projeto desenvolvido por,{" "}
        <a
          href="https://www.linkedin.com/in/eduardo-tatsuo-miyazaki/"
          target="_blank"
          rel="noreferrer"
        >
          Eduardo Tatsuo
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/fernando-mos/"
          target="_blank"
          rel="noreferrer"
        >
          Fernando Mós
        </a>{" "}
        e{" "}
        <a
          href="https://www.linkedin.com/in/in-pedrolima"
          target="_blank"
          rel="noreferrer"
        >
          Pedro Lima
        </a>
        , com a ideia de ser um "alimentador" de projetos para o portifólio,
        visto que identificamos a necessidade de criar algo para automatizar e
        simplificar o processo. Esperamos que aproveitem!
        <h5>Happy Hacking!</h5>
      </article>
    </QuestionCard>
  );
}

export default QuestionModal;
