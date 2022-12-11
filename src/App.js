
import { Toaster } from 'react-hot-toast';
import Main from './layout/Main';

function App() {
  return (
    <div className="">
      <Main></Main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
