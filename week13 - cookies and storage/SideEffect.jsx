export default function App() {
  [count, setCount] = useEffect(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>;
}
