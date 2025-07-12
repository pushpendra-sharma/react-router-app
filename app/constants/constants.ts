export const PRACTICE_FEATURES = [
  {
    id: 'accordion',
    label: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    path: '/practice/accordion',
    difficulty: 'Easy',
    estimatedTime: '30 mins',
  },
  {
    id: 'tabs',
    label: 'Tabs',
    description:
      'A set of layered sections of content, known as tab panels, that are displayed one at a time.',
    path: '/practice/tabs',
    difficulty: 'Easy',
    estimatedTime: '30 mins',
  },
  {
    id: 'modal',
    label: 'Modal',
    description: 'A dialog that appears on top of the main content of a page.',
    path: '/practice/modal',
    difficulty: 'Medium',
    estimatedTime: '45 mins',
  },
  {
    id: 'autocomplete',
    label: 'Autocomplete',
    description: 'A text input that shows suggestions as you type.',
    path: '/practice/autocomplete',
    difficulty: 'Medium',
    estimatedTime: '1 hour',
  },
  {
    id: 'star-rating',
    label: 'Star Rating',
    description: 'An interactive component for rating items using stars.',
    path: '/practice/star-rating',
    difficulty: 'Easy',
    estimatedTime: '30 mins',
  },
  {
    id: 'pagination',
    label: 'Pagination',
    description:
      'A navigation component for browsing through multiple pages of content.',
    path: '/practice/pagination',
    difficulty: 'Easy',
    estimatedTime: '30 mins',
  },
  {
    id: 'nested-comments',
    label: 'Nested Comments',
    description:
      'A hierarchical comment system supporting unlimited nesting levels.',
    path: '/practice/nested-comments',
    difficulty: 'Medium',
    estimatedTime: '1 hour',
  },
  {
    id: 'live-stream-chat',
    label: 'Live Stream Chat',
    description:
      'A real-time chat component for streaming platforms with message types.',
    path: '/practice/live-stream-chat',
    difficulty: 'Hard',
    estimatedTime: '1.5 hours',
  },
] as const;

export const MAIN_NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
] as const;

export type FeatureId = (typeof PRACTICE_FEATURES)[number]['id'];
