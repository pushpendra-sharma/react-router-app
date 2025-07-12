import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  type: 'message' | 'system' | 'highlight';
}

interface LiveStreamChatProps {
  channelName: string;
  onSendMessage: (message: string) => void;
  messages: Message[];
  isConnected: boolean;
}

export default function LiveStreamChat({
  channelName,
  onSendMessage,
  messages,
  isConnected,
}: LiveStreamChatProps) {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className='flex flex-col h-[600px] bg-gray-900 rounded-lg overflow-hidden'>
      {/* Chat Header */}
      <div className='bg-gray-800 px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <h3 className='text-white font-medium'>{channelName}</h3>
        </div>
        <div className='text-sm text-gray-400'>{messages.length} messages</div>
      </div>

      {/* Messages Container */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.type === 'system'
                ? 'text-gray-400 text-sm'
                : msg.type === 'highlight'
                ? 'bg-blue-900/30 p-2 rounded'
                : ''
            }`}
          >
            {msg.type === 'message' && (
              <div className='flex items-baseline space-x-2'>
                <span className='text-blue-400 font-medium'>{msg.user}</span>
                <span className='text-gray-500 text-sm'>{msg.timestamp}</span>
              </div>
            )}
            <p
              className={`${
                msg.type === 'message' ? 'text-gray-200' : 'text-gray-400'
              }`}
            >
              {msg.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className='p-4 bg-gray-800'>
        <div className='flex space-x-2'>
          <input
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder='Type a message...'
            className='flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            disabled={!isConnected}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
