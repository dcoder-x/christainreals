import { Icon } from "@iconify/react";
import React, { useMemo, useRef } from "react";
import { useState } from "react";
import { icons } from "../assets/assets";
import "../styles/personalchats.scss";
import InputEmoji from "react-input-emoji";
import { useEffect } from "react";

const Call = ({ show, onclose }) => {
  return (
    <main id="call" style={{ display: show ? "flex" : "none" }}>
      <div className="call-holder">
        <div className="call-modal">
          <div className="reciever">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="name">Ayomikun</div>
          </div>
          <p className="call-status">Calling...</p>
          <div className="call-bar">
            <div className="video">
              <Icon icon="ic:round-video-call" color="#D9D9D9" />
            </div>
            <div className="speaker">
              <Icon icon="fluent:speaker-2-48-filled" color="#D9D9D9" />
            </div>
            <div className="voice" onClick={onclose}>
              <Icon icon="fluent:call-32-filled" color="#DC1417" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const PersonalChats = () => {
  const [show, setshow] = useState(false);
  const [text, setText] = useState("");
  const chatsRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [chats, setChats] = useState([]);
  const [fileContent, setFileContent] = useState();
  const [fileType, setFileType] = useState();
  const [file, setFile] = useState();
  const inputFile = useRef(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileType = file.type;

      if (fileType.startsWith("image/")) {
        setFileContent(event.target.result);
        setFileType("image");
      } else if (fileType === "application/pdf") {
        setFileContent(event.target.result);
        setFileType("pdf");
      } else {
        setFileContent("");
        setFileType("");
        alert("Unsupported file type");
      }
    };

    reader.readAsDataURL(file);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  function handleOnEnter(text) {
    setText(text);
    setChats([
      ...chats,
      {
        time: new Date().toLocaleTimeString(),
        message: fileContent
          ? { text, file: { content: fileContent, type: fileType } }
          : { text },
      },
    ]);
    setText("");
    setFileContent('')
    setFileType('')
  }

  return (
    <main id="personalchats">
      <div className="header">
        <div className="back-btn">
          <Icon icon="ion:arrow-back" />
        </div>
        <div
          className="call"
          onClick={(e) => {
            setshow(true);
          }}
        >
          <div className="video">
            <Icon icon="ic:round-video-call" />
          </div>
          <div className="voice">
            <Icon icon="fluent:call-16-regular" />
          </div>
        </div>
      </div>
      <div className="chat-body">
        <div className="reciever">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="name">Ayomikun Faluyi</div>
          <div className="location">Omisanjana, Ado-Ekiti</div>
        </div>
        <div className="time">10:50 Am</div>
        <div className="chats" ref={chatsRef}>
          <div className="chat sent">
            Hey! i wanna catch a drink at La’ Papis, do you wanna come?
          </div>
          <div className="chat recieved">Yeah sure, meet in 1o mins</div>
          {chats.map((chat) => {
            console.log(chat);
            return (
              <div className="chat sent">
                <p
                  className="time"
                  style={{ color: "black", fontSize: "10px" }}
                >
                  {chat.time}
                </p>

                {chat.message.file && chat.message.file.type === "image" && (
                  <img src={chat.message.file.content} />
                )}
                {chat.message.file && chat.message.file.type === "pdf" && (
                  <iframe
                    src={chat.message.file.content}
                    width="100%"
                    height="600px"
                  />
                )}
                <p className="text-message">{` ${chat.message.text} `}</p>
              </div>
            );
          })}
        </div>
        <form className="chat-input">
          <div className="files">
            <input hidden type="file" onChange={handleChange} ref={inputFile} />
            <img
              onClick={() => inputFile.current.click()}
              src={icons.AddFile}
              alt=""
            />
          </div>
          {/* <Icon icon={"fluent:emoji-add-16-regular"} width={30} /> */}
          <div className=" w-4/5">
            <InputEmoji
              // ref={inputRef}
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Type a message"
            />
          </div>

          <Icon
            onClick={(e) => {
              handleOnEnter(text);
            }}
            icon="material-symbols:send-outline"
            width={30}
          />
        </form>
      </div>
      <Call
        show={show}
        onclose={(e) => {
          setshow(false);
        }}
      />
      <div ref={messagesEndRef} />
    </main>
  );
};

export default PersonalChats;
