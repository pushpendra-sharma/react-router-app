import React, { useState } from 'react';
import NestedComments from '../../components/NestedComments';

// Sample comments data
const initialComments = [
  {
    id: '1',
    text: 'This is a great article! I learned a lot about React components.',
    author: 'John Doe',
    timestamp: '2 hours ago',
    replies: [
      {
        id: '1-1',
        text: 'Thanks for the feedback!',
        author: 'Article Author',
        timestamp: '1 hour ago',
      },
      {
        id: '1-2',
        text: 'I agree with you, the examples were very helpful.',
        author: 'Jane Smith',
        timestamp: '30 minutes ago',
      },
    ],
  },
  {
    id: '2',
    text: 'I have a question about the implementation. How do you handle nested state?',
    author: 'Alice Johnson',
    timestamp: '3 hours ago',
    replies: [
      {
        id: '2-1',
        text: 'We use React Context for managing nested state. Would you like me to explain more?',
        author: 'Article Author',
        timestamp: '2 hours ago',
        replies: [
          {
            id: '2-1-1',
            text: 'Yes, please! That would be very helpful.',
            author: 'Alice Johnson',
            timestamp: '1 hour ago',
          },
        ],
      },
    ],
  },
];

export default function NestedCommentsPage() {
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (text: string) => {
    const newComment = {
      id: Date.now().toString(),
      text,
      author: 'Current User',
      timestamp: 'Just now',
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleReply = (parentId: string, text: string) => {
    const addReply = (
      comments: typeof initialComments
    ): typeof initialComments => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []),
              {
                id: Date.now().toString(),
                text,
                author: 'Current User',
                timestamp: 'Just now',
              },
            ],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReply(comment.replies),
          };
        }
        return comment;
      });
    };

    setComments(addReply(comments));
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          Nested Comments Component
        </h1>
        <p className='text-lg text-gray-600'>
          A hierarchical comment system that supports unlimited nesting levels
          and real-time updates.
        </p>
      </div>

      {/* Example Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>
          Example Usage
        </h2>
        <NestedComments
          comments={comments}
          onAddComment={handleAddComment}
          onReply={handleReply}
        />
      </div>

      {/* Features Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
        <ul className='space-y-2 text-gray-600'>
          <li>• Unlimited nesting levels for comments</li>
          <li>• Real-time comment addition and replies</li>
          <li>• Clean and intuitive user interface</li>
          <li>• Responsive design for all screen sizes</li>
          <li>• Timestamp display for all comments</li>
          <li>• Collapsible reply forms</li>
        </ul>
      </div>

      {/* Usage Example */}
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>How to Use</h2>
        <pre className='bg-gray-50 p-4 rounded-lg overflow-x-auto'>
          <code className='text-sm text-gray-800'>
            {`import NestedComments from './components/NestedComments';

function MyComponent() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (text) => {
    // Add new comment logic
  };

  const handleReply = (parentId, text) => {
    // Add reply logic
  };

  return (
    <NestedComments
      comments={comments}
      onAddComment={handleAddComment}
      onReply={handleReply}
    />
  );
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
