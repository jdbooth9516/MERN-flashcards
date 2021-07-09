import axios from 'axios';
import { SingleCard } from '../SingleCard/SingleCard';
import React, {useState, useEffect}from 'react';
import ReactModal from 'react-modal';
import { Fade } from '@material-ui/core';
import "./cards.css"

export default function Cards(props) {

    const [cards, setCards] = useState([]);
    const [visible, setVisible] = useState(true)
    const [showAnswer, setShowAnswer] = useState(null)
    const [fadeTrigger, setFadeTrigger] = useState(null)
    const [collectionIndex, setIndex] = useState(null)
    const [update, setUpdate] = useState(false)
    const [open, setOpen] = useState(false)
     
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`http://localhost:5000/api/flashcards/${props.categoryName}`);
            setCards(response.data)
        }
        getData();
    }, [props.categoryName, update]);

    function updateCards() { 
      setUpdate(true);

      setTimeout(() => {
        setUpdate(false);

      }, 200);
    }

    return (
      <div>
        {visible ? (
          <div className="card-container">
            {cards.map((card, index) => (
              <div className="cards"
              
                onClick={() => {
                  setVisible(false);

                  setOpen(true);
                  setIndex(index + 1);
                }}
                onMouseEnter={() => {setShowAnswer(index); setFadeTrigger(index)}}
                onMouseLeave={() => {setShowAnswer(null); setFadeTrigger(null)}}
                >
              <div
                className="card-tile"
              >
                {showAnswer !== index && (<Fade in={fadeTrigger !== index} timeout={700}><h4 className="card-title">{card.question}</h4></Fade>)}
                {showAnswer === index && (<Fade in={fadeTrigger === index} timeout={700}><p className="card-answer" style={{paddingTop: '2.5vh'}}>{card.answer}</p></Fade>
              )}
              
              </div>
              </div>
            ))}
          </div>
        ) : null}
        <div claseName="single-body">
          <ReactModal
            isOpen = {open}
            className="big-Modal"
            overlayClassName="Overlay"
          >
          <button className="del-btn singleModal-btn" onClick={() => {setOpen(false); setVisible(true)}}>X</button>
          <div className='single-card'>
          <div>
            {open == true && collectionIndex != 1 && (
            <button className='index-btn'
              onClick={() => {
                setIndex(collectionIndex - 1);
              }}
            >
              Prev
            </button>
            ) }
          </div>
          <div>
          {open ? (
            <SingleCard
              category={props.category}
              categoryName={props.category.name}
              cardIndex={collectionIndex}
              cardId={cards[collectionIndex - 1]._id}
              total={props.total}
              update={updateCards}
            />
          ) : null}
        </div>
        <div>
          {open == true && collectionIndex != cards.length &&(
          <button className='index-btn'
            onClick={() => {
              // need to make this into conditional that will loop
              setIndex(collectionIndex + 1);
            }}
          >
            Next
          </button>
          )}
          </div>
           
          </div>
        </ReactModal>
        </div>
      </div>
    );
}
