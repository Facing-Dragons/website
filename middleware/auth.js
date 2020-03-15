export default function({store, redirect, app}) {
    app.$fireAuth.onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
        } else {
            return redirect('/quest/access');
        }
    });
    console.log(store.state.authUser);
    store.dispatch('quest/getUser');
    if (!store.state.authUser || !store.state.authUser.uid || !store.state.authUser.email) {
        return redirect('/quest/access');
    }
}