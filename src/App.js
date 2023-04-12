import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import NoterPage from './pages/NoterPage';
import TaskerPage from './pages/Taskerpage/TaskerPage';
import ReminderPage from './pages/ReminderPage';
function App(props) {

  const router = createBrowserRouter([
    {path:'/', element: <MainPage />, errorElement: <ErrorPage/>, children: [
      {index: true, element: <NoterPage/>},
      {path:'tasker', element: <TaskerPage/>},
      {path:'reminder', element: <ReminderPage/>}
    ] }
  ])
  return (
    <RouterProvider router={router}>
      {props.children}
    </RouterProvider>
  );
}

export default App;
