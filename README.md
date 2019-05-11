> yarn start

https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js

https://gist.github.com/mizchi/fa00890df2c8d1f27b9ca94b5cb8dd1d

hooksとは、関数コンポーネントにstateやライフサイクルといったReactの機能を“接続する”ための関数。

recomposeのwithStateをuseStateに代替できる。

たぶんrecomposeだと、内部的にclass componentになっている。

Global な場所に `state` と `setters` があり、どちらも配列であるところがポイント。

`useState` を呼び出すと、現在のstateとstateを変更させるsettersがメモ化される。

state が「作成」されるのはコンポーネントの初回レンダー時のみ。

### useEffectがコンポーネント内で呼ばれるのはなぜか？
　コンポーネント内でuseEffectを記述することで、副作用内からstateであるcount(や任意の props)にアクセスできるようになる。`それらは既に関数スコープ内に存在するため。 (クロージャ)`

### rule
1. フックを呼び出すのはトップレベルのみ
2. フックを呼び出すのはReactの関数内のみ
'ruleを矯正できるlintがある'



