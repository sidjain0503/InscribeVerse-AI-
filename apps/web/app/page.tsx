import Chat from "./components/chat/Chat";
import Editor from "./components/editor/Editor";

const page = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Chat Section */}
      <Chat />

      {/* Right Section - Notion-style Editor */}
      <Editor />
    </div>
  );
};

export default page;
