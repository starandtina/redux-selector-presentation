const mapStateToProps = state => {
  const { someData } = state

  const filteredData = expensiveConsume10SFiltering(someData)
  const sortedData = expensiveConsume10SSorting(filteredData)
  const transformedData = expensiveConsume10STransformation(sortedData)

  return { data: transformedData }
}
