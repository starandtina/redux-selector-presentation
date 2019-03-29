import { createSelector } from 'reselect'

const getUsers = state => state.users.byId
const getUserId = state => state.users.ids.first()
const getCompanys = state => state.companys.byId

export const selectUser = createSelector(
  [getUsers, getUserId],
  (users, userId) => users.get(String(userId), Map()),
)

export const selectUserCompany = createSelector(
  [selectUser, getCompanys],
  (user, companys) =>
    companys.get(String(user && user.get('companyId')), Map()),
)

const mapStateToProps = state => {
  const user = selectUser(state)

  return { user }
}
