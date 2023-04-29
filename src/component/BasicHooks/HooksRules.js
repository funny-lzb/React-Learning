/* 
1.if/for/return不能写在hooks外面，但可以写在hooks里面，为什么？
    React需要知道  hooks的调用顺序
    写在if这些中，react会不知道这些hooks的顺序，它到底该去先执行谁，这个取决于你的条件是什么

2.hooks为什么写在最顶部？
    因为react会默认读你写在渲染上面的hooks，你如果写在了渲染下面就react就不会识别

3.hooks只能在[函数式组件/自定义钩子]中使用
*/
