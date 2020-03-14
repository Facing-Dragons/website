export default function({store, redirect}) {
    console.log(store.state.authUser);
    store.dispatch('quest/getUser');
    if (!store.state.authUser || !store.state.authUser.uid || !store.state.authUser.email) {
        return redirect('/quest/access');
    }
}