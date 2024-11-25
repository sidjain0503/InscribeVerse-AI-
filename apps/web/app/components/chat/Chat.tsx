import { Divide, Menu, MessageCircle, Plus, Send } from "lucide-react";
import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen w-[40%] border-r-[1px] border-gray-200  shadow-md ">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;

const ChatHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white text-gray-800">
      <div className="flex items-center justify-between">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-medium">InscribeVerse-AI</h1>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const ChatMessages = () => {
  return (
    <div className="h-full w-full py-[20px] flex flex-col gap-5">
      <Assistantmessage />
      <Usermessage />
    </div>
  );
};

const Assistantmessage = () => {
  return (
    <div className="p-5 shadow-lg bg-primary rounded-r-full  w-11/12  text-gray-200">
      Hey, I am VerseAi, your content creation partner.
      Hey, I am VerseAi, your content creation partner.
      Hey, I am VerseAi, your content creation partner.
      Hey, I am VerseAi, your content creation partner.
    </div>
  );
};

const Usermessage = () => {
  return (
    <div className="p-5 rounded-l-full shadow-lg bg-gray-100 rounded-r w-11/12 float-right ml-auto text-gray-900 text-right">
      Hey, I am VerseAi, your content creation partner.
      How are you 
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="flex items-center px-[20px] justify-between gap-4 border border-gray-200 rounded-lg py-[20px] ">
      <input
        type="text"
        className="w-full border-none bg-transparent text-gray-800 ring-0 outline-0 focus:ring-0"
      />
      <Send />
    </div>
  );
};
