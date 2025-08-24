import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./ui/pages/MainLayout/MainLayout";
import Post from "./ui/pages/Posts/Post";
import PostDetails from "./ui/pages/PostDetails/PostDetails";
import ReadingList from "./ui/pages/ReadingList/ReadingList";
import Profile from "./ui/pages/Profile/Profile";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Post /> },
        { path: 'post/:postId', element: <PostDetails /> },
        { path: 'reading-list', element: <ReadingList /> },
        { path: 'profile', element: <Profile /> }
      ]
    }
  ])
  return (
    <div className="mx-1">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;