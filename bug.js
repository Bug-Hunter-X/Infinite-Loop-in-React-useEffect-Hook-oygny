```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, causing an infinite loop
    setCount(count + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```