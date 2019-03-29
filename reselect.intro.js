import { createSelector } from 'reselect'

const selectA = state => state.a
const selectB = state => state.b
const selectC = state => state.c

// Memoized selector
const selectABC = createSelector(
  [selectA, selectB, selectC],
  (a, b, c) => {
    console.log('Selector is running!')

    return a + b + c
  },
)

const state = { a: 1, b: 2, c: 3 }

const abc = selectABC(state)
// Selector is running!
console.log(abc)
// 6

const anotherAbc = selectABC(state)
// No log output
console.log(anotherAbc)
// 6
