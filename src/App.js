
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import { router } from './routes/routs';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
