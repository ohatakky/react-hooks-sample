> yarn start

### docs

hooks add v16.8.0 : https://github.com/facebook/react/tree/v16.8.0

doc : https://ja.reactjs.org/docs/hooks-intro.html

code : https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js

article : https://gist.github.com/mizchi/fa00890df2c8d1f27b9ca94b5cb8dd1d

### memo
`hooksとは、関数コンポーネントにstateやライフサイクルといったReactの機能を“接続する”ための関数`

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

### Reactは、どのuseStateの呼び出しがどのstateに対応するのか、どうやって知る?
　Reactはフックが呼ばれる順番に依存している。フックの呼び出しの順序が毎回のレンダーごとに同じため。

```
// ------------
// First render
// ------------
useState('Mary')           // 1. Initialize the name state variable with 'Mary'
useEffect(persistForm)     // 2. Add an effect for persisting the form
useState('Poppins')        // 3. Initialize the surname state variable with 'Poppins'
useEffect(updateTitle)     // 4. Add an effect for updating the title

// -------------
// Second render
// -------------
useState('Mary')           // 1. Read the name state variable (argument is ignored)
useEffect(persistForm)     // 2. Replace the effect for persisting the form
useState('Poppins')        // 3. Read the surname state variable (argument is ignored)
useEffect(updateTitle)     // 4. Replace the effect for updating the title

// ...
```

`そのため、ifで処理をスキップしてしまうと、hookの呼ばれる順番が変わってしまう。`

`lint必須`


### hokks　API
基本のフック
- useState
- useEffect
- useContext

追加のフック
- useReducer
- useCallback
- eMemo
- eRef
- eImperativeHandle
- eLayoutEffect
- eDebugValue

### hokksの内部動作
Hooks API の裏にあるアイデアは、hook 関数の返り値の、配列の二番目の要素として setter 関数を渡し、その setter が hook によって state をコントロールすることをできるようにする、というもの

stateとsetterをそれぞれ配列に積む。
順番の保証は実行順序に依存する。

