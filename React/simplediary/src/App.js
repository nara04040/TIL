import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Hannara",
    content: "Hi 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "yhist",
    content: "Hi 2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "jiwonchu",
    content: "Hi 3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "dkssudgktpd",
    content: "Hi 4",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
