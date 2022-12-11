
import { Toaster } from 'react-hot-toast';
import Main from './layout/Main';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Main></Main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
