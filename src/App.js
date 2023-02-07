import { Posts } from './components/Posts'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './components/newpost';
function App() {
  return (
    <div>
        <NewPost></NewPost>
      <Posts/>
    </div>
  );
}

export default App;
