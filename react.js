/*const App=()=>{
    const tiltle ="리액트 학습";
    const isvisible =true;

    return(
        <div className="app">
            <h1>{title}</h1>
            {isVisible&&<p>보이는 메세지입니다.</p>}
        </div>
    );
};*/

/*const Welcome=()=>{
    return <h1>환영합니다!</h1>;
};

const UserCard=({name,email,age})=>{
    return(
        <div className="user-card">
        <h3>{name}</h3>
        <p>나이:{age}세</p>
        <p>이메일:{email}</p>
        </div>
    );
};

const App=()=>{
    return(
        <div>
            <Welcome />
            <UserCard
            name="김철수"
            age={25}
            email="lsr060822@naver.com"
            />
        </div>
    );
};*/

/*const Greeting=()=>{
    return<h2>안녕하세요!</h2>;
};

const ProfileCard=({username,job,location})=>{
    return(
        <div className="profile-card">
            <h3>{username}</h3>
            <p>직업: {job}</p>
            <p>지역: {location}</p>
        </div>
    );
};

const Main=()=>{
    return(
        <div>
            <Greeting/>
            <ProfileCard
            username="이영희"
            job="디자이너"
            location="서울"
            />
        </div>
    );
};*/


/*const Button=({text,color,onClick})=>{
    return(
        <button
        style={{backgroundColor: color}}
        onClick={onClick}
        >
            {text}
        </button>
    );
};

const app=()=>{
    const handleClick=()=>{
        alert("버튼이 클릭되었습니다!");
    };


return(
    <div>
        <Button
        text="클릭하세요"
        color="blue"
        onClick={handleClick}
        />
    </div>
);};*/

/*
const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};



const App = () => {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <div>
      <Button
        text="클릭하세요"
        color="blue"
        onClick={handleClick}
      />
    </div>
  );
};*/
/*import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};*/

/*const UserStatus = ({ user, isLoading }) => {

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!user) {
    return <div>사용자를 찾을 수 없습니다</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.isOnline ? '온라인' : '오프라인'}</p>
    </div>
  );
};*/

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '프로젝트 만들기', completed: true }
  ]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
         
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

