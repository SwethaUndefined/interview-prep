// why we shouldnt update the state directly

//We should not update the state directly, because
// 1. when we update the state directly react should not keep track of state changes. This leads to unexpected
//behaviour in UI
//2. So use setState, and useState to update the state