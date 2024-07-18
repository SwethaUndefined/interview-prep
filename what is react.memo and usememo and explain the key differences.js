//React.memo is a higher order function where it is used for funtional component to avoid unneccessary rerenders. It is
// a pure component and it does the shallow comparision of state and props

// Whereas useMemo is a hook for memoize the value

// React.memo will rerender when the props are change, it will store the props in cache only that changes that function
//rerenders

//useMemo is rerender based on the dependency array, it also store the dependecy values in cache only that
//change it will rerender