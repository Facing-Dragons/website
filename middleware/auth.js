export default function({store, redirect}) {
    console.log(store.state.authUser);
    if(!store.state.authUser || !store.state.authUser.uid) {
        return redirect('/?p=1');
    }
}