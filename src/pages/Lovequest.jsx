import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { testimonials } from "../assets/assets";
import { loveQuestion } from "../data/options";
import "../styles/loveQuest.css";

const Lovequest = () => {
  return (
    <main id="loveQuest">
      <section className="questions">
        {loveQuestion.map((question, index) => {
          return (
            <div
              className="question"
              onClick={(e) => {
                question.link ? navigate(question.link) : null;
              }}
            >
              <div className="admin-profile">
                <img src={testimonials.dansarah} alt="" />
                <div className="admin">
                  <p>{"admin name"}</p>
                  <p className="admin-title">
                    {
                      'Relationship expert'
                    }
                  </p>
                </div>
              </div>
              <p className="question-name">
                {`Question: ${question.question}`}
              </p>
              <p className="answer">{question.answer}</p>
              <LikeButton count={parseInt(question.likes)} />
            </div>
          );
        })}
        <button className="Ask">Ask a question</button>
      </section>
    </main>
  );
};

const LikeButton = ({ count }) => {
  const [liked, setliked] = useState(false);
  const [likecount, setcount] = useState(count);
  return (
    <div className="like">
      <Icon
        onClick={(e) => {
          setliked(!liked);
          !liked ? setcount(likecount + 1) : setcount(likecount - 1);
        }}
        className={`likebutton ${liked ? "liked" : null}`}
        stroke="black"
        icon="mdi:cards-heart"
      />
      <p className="likecount">{likecount}</p>
    </div>
  );
};

export default Lovequest;
