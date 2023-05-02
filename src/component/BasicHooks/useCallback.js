/* 
useMemo和useCallback区别：
    1.useMemo是缓存(函数)返回值，useCallback是缓存函数

    作用：
        和useMemo一样，useCallback用来保证引用相等性
        useMemo用来保存对象/数组的内存地址和上一次一样，不变
        而useCallback用来保存函数，确保组件Re-render时，保证依赖项“值”不变

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
