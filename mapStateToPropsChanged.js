function mapStateToProps(state) {
  return {
    todos: state.user.todos,
    filter: state.visibilityFilter,
  }
}
