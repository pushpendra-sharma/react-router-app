import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from '@react-router/dev/routes';

export default [
  layout('components/Layout.tsx', [
    index('routes/home.tsx'),
    route('about', 'routes/about.tsx'),
    route('contact', 'routes/contact.tsx'),

    // Practice routes with prefix
    ...prefix('practice', [
      index('routes/practice/index.tsx'),
      route('accordion', 'routes/practice/accordion.tsx'),
      route('tabs', 'routes/practice/tabs.tsx'),
      route('modal', 'routes/practice/modal.tsx'),
      route('autocomplete', 'routes/practice/autocomplete.tsx'),
      route('star-rating', 'routes/practice/star-rating.tsx'),
      route('pagination', 'routes/practice/pagination.tsx'),
      route('nested-comments', 'routes/practice/nested-comments.tsx'),
      route('live-stream-chat', 'routes/practice/live-stream-chat.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
