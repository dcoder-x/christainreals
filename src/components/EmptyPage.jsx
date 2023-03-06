import { Icon } from "@iconify/react";
import React from "react";
import Lottie from "lottie-react";

const EmptyPage = ({
  icon,
  actionIcon,
  actionBtn,
  message,
  lottie,
  title,
  actionLink,
  actionLinkText,
  actionIconLink,
}) => {
    console.log('here somewhere')
  return (
    <div className=" w-full h-screen flex flex-col items-center">
      <h1>{title}</h1>
      <Icon icon={icon} className=" w-1/4" />
      <Lottie className=" w-1/3" animationData={lottie} loop={true} width={50} />
      <h3>{message}</h3>
      <h4>
        <a className=" text-red-600" href={actionLink}>{actionLinkText}</a>
        
      </h4>
      <div>{actionBtn}</div>
      <div className=" fixed right-4 bottom-12">
        <a href={actionIconLink}>
          <Icon width={50} icon={actionIcon} className=" text-red-600 " />
        </a>
      </div>
    </div>
  );
};

export default EmptyPage;
