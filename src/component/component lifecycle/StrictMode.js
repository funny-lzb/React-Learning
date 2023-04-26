/* 
严格模式
1.本质上就是执行2遍你的函数，核心作用就是帮你发现bug，比如说你不是纯函数/副作用没有清理

2.如果不开启严格模式，那么组件只会出现挂载
  开了严格，则会先挂载 => 卸载 => 再挂载

问题来了，每次执行2遍函数，不是很消耗性能吗？
    对的，但严格模式只限于开发环境中；在生产环境中相当于没有StrictMode标签，就好像你没有
    严格模式一样

3.对于类组件中一些弃用的方法，它会帮你提示你这个方法已被弃用
*/