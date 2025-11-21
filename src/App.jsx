import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['ele'],
    queryFn: () =>
      fetch("http://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json()),
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>There was an error</>;

  return (
    <>
      {data?.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
    </>
  );
}

export default App;
