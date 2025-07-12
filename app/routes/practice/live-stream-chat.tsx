import React, { useState, useEffect } from 'react';
import LiveStreamChat from '../../components/LiveStreamChat';

// Sample messages data
const initialMessages = [
  {
    id: '1',
    user: 'System',
    content: 'Welcome to the live stream!',
    timestamp: '12:00 PM',
    type: 'system' as const,
  },
  {
    id: '2',
    user: 'JohnDoe',
    content: 'Hello everyone!',
    timestamp: '12:01 PM',
    type: 'message' as const,
  },
  {
    id: '3',
    user: 'JaneSmith',
    content: 'Great stream so far!',
    timestamp: '12:02 PM',
    type: 'message' as const,
  },
  {
    id: '4',
    user: 'Streamer',
    content: 'Thanks for joining!',
    timestamp: '12:03 PM',
    type: 'highlight' as const,
  },
];

export default function LiveStreamChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [isConnected, setIsConnected] = useState(true);

  // Simulate receiving messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newMessage = {
          id: Date.now().toString(),
          user: `User${Math.floor(Math.random() * 1000)}`,
          content: `Random message ${Math.floor(Math.random() * 1000)}`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          type: 'message' as const,
        };
        setMessages(prev => [...prev, newMessage]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      user: 'You',
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      type: 'message' as const,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          Live Stream Chat Component
        </h1>
        <p className='text-lg text-gray-600'>
          A real-time chat component for live streaming platforms with message
          types and connection status.
        </p>
      </div>

      {/* Example Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>
          Example Usage
        </h2>
        <LiveStreamChat
          channelName='My Live Stream'
          messages={messages}
          onSendMessage={handleSendMessage}
          isConnected={isConnected}
        />
      </div>

      {/* Features Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
        <ul className='space-y-2 text-gray-600'>
          <li>• Real-time message updates</li>
          <li>• Different message types (regular, system, highlighted)</li>
          <li>• Connection status indicator</li>
          <li>• Auto-scrolling to latest messages</li>
          <li>• Message timestamps</li>
          <li>• Responsive design</li>
          <li>• Dark theme optimized for streaming</li>
        </ul>
      </div>

      {/* Usage Example */}
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>How to Use</h2>
        <pre className='bg-gray-50 p-4 rounded-lg overflow-x-auto'>
          <code className='text-sm text-gray-800'>
            {`import LiveStreamChat from './components/LiveStreamChat';

function MyComponent() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  const handleSendMessage = (message) => {
    // Handle sending message
  };

  return (
    <LiveStreamChat
      channelName="My Channel"
      messages={messages}
      onSendMessage={handleSendMessage}
      isConnected={isConnected}
    />
  );
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
