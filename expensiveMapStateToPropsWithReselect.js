import { createSelector } from 'reselect'

const selectSomeData = state => state.someData

const selectFilteredSortedTransformedData = createSelector(
  selectSomeData,
  someData => {
    const filteredData = expensiveConsume10SFiltering(someData)
    const sortedData = expensiveConsume10SSorting(filteredData)
    const transformedData = expensiveConsume10STransformation(sortedData)

    return transformedData
  },
)

const mapStateToProps = state => {
  const transformedData = selectFilteredSortedTransformedData(state)

  return { data: transformedData }
}
