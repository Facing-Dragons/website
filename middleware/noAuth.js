export default function ({
  store,
  redirect
}) {
  console.log(store.state.authUser);
  store.dispatch('quest/getUser');
  if (store.state.authUser && store.state.authUser.email) {
    return redirect('/quest/result');
  }
  if (store.state.quest.user && store.state.quest.user.email) {
      return redirect('/quest/result')
  }
}