import { Anecdotes } from "./module/Anecdotes";
import Content from "./module/Course";
import Feedback from "./module/GiveFeedback";

function App() {
  return (
    <div>
      <Content/>
      <br></br>
      <Feedback/>
      <br></br>
      <Anecdotes/>
    </div>
  );
}

export default App;
