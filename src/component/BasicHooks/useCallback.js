/* 
useMemo和useCallback区别：
    1.useMemo是缓存{函数返回值(数组/对象)}地址不变，useCallback是缓存{函数}地址不变

    作用：
        useCallback是保证回调{函数}地址不变

    总结：
    什么时候用useMemo，什么时候用useCallback？
        当(useEffect)依赖项是数组/对象时，用useMemo来缓存
        当依赖项是函数时，用useCallback来缓存

    说白了，useMemo用处2和useCallback就是给useEffect擦屁股的

*/
function Parent() {
  const [items, setItems] = useState([])
  const handleLoad = useCallback(res => setItems(res), [])

  return <Child onLoad={handleLoad} />
}

function Child({ onLoad }) {
  useEffect(() => {
    callApi(onLoad)
  }, [onLoad]) //用useCallback保证onLoad函数和上一次一样
}
