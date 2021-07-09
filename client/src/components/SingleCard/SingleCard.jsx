import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateCard from "../UpdateCard/UpdateCard";
import { DeleteCard } from "../DeleteCard/DeleteCard";
import { Fade } from "@material-ui/core";
import "./Singlecard.css";

export const SingleCard = (props) => {
  const [card, setCard] = useState({});
  const [questionVisible, setQuestionVisible] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false)

  useEffect(() => {
    async function getCard() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/flashcards/${props.categoryName}/${props.cardId}`
        );
        setCard(response.data);
        console.log(card)
        setQuestionVisible(true)
      } catch (error) {
        alert(error);
        return;
      }
    }
    getCard();
  }, []);
  console.log(card)
  return (
    <div>
    <div
      className="card-body"
      onClick={() => {
        setQuestionVisible(!questionVisible);
        setAnswerVisible(!answerVisible);
      }}
    >
      {questionVisible ? (
        <Fade in={questionVisible} timeout={700}>
          <div className="card">
            <h3>{card[0].question}</h3>
          </div>
        </Fade>
      ) : null}
      {answerVisible ? (
        <Fade in={answerVisible} timeout={700}>
          <div className="card">
            <h3>{card[0].answer}</h3>
          </div>
        </Fade>
      ) : null}
      <div className="card-options">
        <div className="index">
          <p>
            {props.cardIndex}/{props.total}
          </p>
        </div>
        <div>
          <UpdateCard
            categoryName={props.categoryName}
            cardId={props.cardId}
            questionVisible={setQuestionVisible}
            update={props.update}
          />
        </div>
        <div>
          <button
            className="delete-btn"
            onClick={() => DeleteCard(props.categoryName, props.cardId, props.category)}
          >
            DEL
          </button>
        </div>
      </div>
    </div>
    </div> 
  );
};
