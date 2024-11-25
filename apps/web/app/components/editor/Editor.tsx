import React from "react";
import {
  Send,
  Menu,
  Plus,
  MoreVertical,
  Type,
  Image,
  Code,
  ListOrdered,
  CheckSquare,
} from "lucide-react";

const Editor = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Editor Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Type className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Image className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Code className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ListOrdered className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <CheckSquare className="h-5 w-5" />
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 p-4">
        <div className="prose max-w-none">
          <div className="mb-4">
            <input
              type="text"
              className="w-full text-4xl font-bold border-none focus:outline-none"
              placeholder="Untitled"
            />
          </div>
          <div
            className="min-h-[200px] w-full border-none focus:outline-none"
            contentEditable
            suppressContentEditableWarning
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
