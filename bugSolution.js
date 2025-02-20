```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //The effect now only runs once after initial render 
    setCount(count + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```