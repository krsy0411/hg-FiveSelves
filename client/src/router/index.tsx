import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: '',
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    }
  ]);
}
