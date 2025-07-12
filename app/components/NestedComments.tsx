import React, { useState } from 'react';

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
  replies?: Comment[];
}

interface CommentProps {
  comment: Comment;
  onReply: (parentId: string, text: string) => void;
  level?: number;
}

function CommentItem({ comment, onReply, level = 0 }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className={`${level > 0 ? 'ml-8 mt-4' : 'mt-4'}`}>
      <div className='bg-white rounded-lg shadow p-4'>
        <div className='flex items-center justify-between mb-2'>
          <div className='font-medium text-gray-900'>{comment.author}</div>
          <div className='text-sm text-gray-500'>{comment.timestamp}</div>
        </div>
        <p className='text-gray-700 mb-4'>{comment.text}</p>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setIsReplying(!isReplying)}
            className='text-sm text-blue-600 hover:text-blue-800'
          >
            Reply
          </button>
        </div>

        {isReplying && (
          <form onSubmit={handleSubmitReply} className='mt-4'>
            <textarea
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={3}
              placeholder='Write your reply...'
            />
            <div className='mt-2 flex justify-end space-x-2'>
              <button
                type='button'
                onClick={() => setIsReplying(false)}
                className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
              >
                Reply
              </button>
            </div>
          </form>
        )}
      </div>

      {comment.replies?.map(reply => (
        <CommentItem
          key={reply.id}
          comment={reply}
          onReply={onReply}
          level={level + 1}
        />
      ))}
    </div>
  );
}

interface NestedCommentsProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
  onReply: (parentId: string, text: string) => void;
}

export default function NestedComments({
  comments,
  onAddComment,
  onReply,
}: NestedCommentsProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className='max-w-3xl mx-auto'>
      <form onSubmit={handleSubmitComment} className='mb-8'>
        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
          placeholder='Write a comment...'
        />
        <div className='mt-2 flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
          >
            Post Comment
          </button>
        </div>
      </form>

      <div className='space-y-4'>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} onReply={onReply} />
        ))}
      </div>
    </div>
  );
}
