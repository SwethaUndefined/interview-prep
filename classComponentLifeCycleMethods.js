//1. Mounting
//2. Updating
//3. unMounting
//4. Error Handling

//Mounting:
// When the instance of the component is being created and inserted into the DOM
  //1. constructor = is called whenever a new component is created. Directly can able to change the state without setState.
  //2. static getDerivedStateFromProps(props,state) = because of static this keyword cannot be used here. Initial render with state
  //and props. Fetching data is not possible.
  //3. render() = Read props and state and display the ui. It is a pure function
  //4. componentDidlMount = Called only once. Invoked the component is inserted into the DOM.

//Updating:
//Is called for rerender when the props or state changes
// 1. static getDerivedStateFromProps(props,state) =  is called every time when rerender and return either null or object.
// 2. shouldComponentUpdate(nextProps,nextState) = will rerender or not. By the use of this we can block the default behaviour.
// return true or false. This method is for performance optimization.  Fetching data is not possible.
// 3. render() =  Read props and state and display the ui. It is a pure function.
// 4. getSnapsBeforeUpdate(prevProps,prevState) = is called before the changes from Virtual DOM reflected in Real DOM
// Capture some information from the DOM. For example get the scroll position and after update maintain the scroll position.
// 5. ComponentDidUpdate(prevProps,prevState,snapShotValue) = Is called after the render the finished. Can use for fetch data.
// snapShotValue is a value given by getSnapsBeforeUpdate(prevProps,prevState) method. Compare prevProps and newProps before making
//api call for avoiding unwanted rerenders.


//UnMounting:
//Is called immediately before the component is unmounted from the DOM.
// 1. componentWillUnmount() = for removing events, invalidating timers
// Not to call setState because the component is already removed from the DOM


//Error Handling
//Used when error either during rendering or constructor of child component.
//1. static getDerivedStateFromError(error)
//2. componentDidCatch(error,info)
