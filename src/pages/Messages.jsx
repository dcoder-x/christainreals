import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { images } from "../assets/assets";
import "../styles/message.css";
import jwt from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import EmptyPage from "../components/EmptyPage";
import searchlottie from '../assets/lottie/searching.json'
import notFound from '../assets/lottie/notFound.json'
import notFound1 from '../assets/lottie/notFound1.json'

import Lottie from "lottie-react";


const Messages = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState()
  useEffect(() => {
    async function getChats() {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token);

        // Decode the token
        const decoded = await jwt(token);
        const { id } = decoded;
        console.log(id);
        const response = await axios.get(`https://christianreals-backend.onrender.com/chats/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        if (response.data) {
            setChats(response.data.data)
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // return(
        //   <EmptyPage actionLink={'../dashboard'} actionIconLink={'../dashboard'} actionLinkText={'Start a conversation'} title={'No chat found'} lottie={notFound} actionIcon={'mdi:message-plus'} message={'You have not started a conversation with anyone.'} />
        //   )
      }
    }

    getChats();
  }, []);
  if (isLoading) {
    return (
      <div role="status" className=" w-full flex-col h-screen flex items-center justify-center">
        
        <Lottie animationData={searchlottie} loop={true} />
        <span class="text-lg text-red-600 m-8">Fetching messages ...</span>
      </div>
    );
  } else {
    if (chats) {
        return (
            <main id="messages">
              <section className="messageholder">
                <div
                  className="message"
                  onClick={(e) => {
                    navigate("../personalChats",{state:{id,avatar}});
                  }}
                >
                  <div className="message-content">
                    <div className="img">
                      <img src={images.videoPoster} alt="" />
                    </div>
                    <div className="message-body">
                      <div className="title">Anderson</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                        consequuntur rerum, minus fugit eius velit cum.
                      </div>
                    </div>
                  </div>
                  <div className="time">11:00 am</div>
                </div>
              </section>
            </main>
          );
    }
    else{
        return(
        <EmptyPage actionLink={'../dashboard'} actionIconLink={'../dashboard'} actionLinkText={'Start a conversation'} title={'No chat found'} lottie={notFound} actionIcon={'mdi:message-plus'} message={'You have not started a conversation with anyone.'} />
        )
    }

  }
};

export default Messages;
