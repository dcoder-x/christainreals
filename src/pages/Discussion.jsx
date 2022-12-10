import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { discQuestion } from "../data/options";
import "../styles/discussion.css";
import { icons, images, testimonials } from "../assets/assets";

const Discussion = () => {
  return (
    <main id="discussion">
      <section className="questions">
        {discQuestion.map((question, index) => {
          return (
            <>
              <div
                className="question"
                onClick={(e) => {
                  question.link ? navigate(question.link) : null;
                }}
              >
                {/* <Icon icon="fluent-mdl2:pinned-solid" className="pin" /> */}
                <div className="admin-profile">
                  <img src={testimonials.rachelcraig} alt="" />
                  <div className="admin-title">
                    <p>{"admin name"}</p>
                    <p className="time">{"Dec 30 2020"}</p>
                  </div>
                </div>
                <p className="question-name">
                  {`Question: ${question.question}`}
                </p>
                <p className="answer">{question.answer}</p>
                <div className="comment-input">
                  <div className="chat-input">
                    <input
                      type="text"
                      placeholder="write a comment..."
                      className="text"
                    />
                    <Icon icon="material-symbols:send-outline" width={30} />
                  </div>
                  <LikeButton count={parseInt(question.likes)} />
                </div>
              </div>
              {question.comments.map((comment, i) => {
                return (
                  <>
                    <div className="comment">
                      <img src={testimonials.rachelcraig} alt="" />
                      <div className="question">
                        <p className="question-name">{` ${comment.comment}`}</p>
                      </div>
                    </div>
                    {comment.replies.map((reply, i) => {
                      return (
                        <>
                          <div className="comment">
                            <img src={testimonials.rachelcraig} alt="" />
                            <div className="question">
                              <p className="question-name">
                                {` ${reply.reply}`}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </section>
    </main>
  );
};

export const LikeButton = ({ count }) => {
  const [liked, setliked] = useState(false);
  if (count) {
  const [likecount, setcount] = useState(count);
  }
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
      <p className="likecount">{count?likecount:null}</p>
    </div>
  );
};

export default Discussion;
