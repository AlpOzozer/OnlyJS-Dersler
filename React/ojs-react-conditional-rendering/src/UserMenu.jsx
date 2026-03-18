export function UserMenu({ name, setName }) {
    const isLoggedIn = !!name;

    function logout () {
        setName(null);
    }

    function login(event) {
        event.preventDefault();

        const nameInput = event.target.name;
        const nameInputValue = nameInput.value;

        setName(nameInputValue);
    }

    if (isLoggedIn) {
         return (
        <div>
            Hoş geldin {name}
            <div>
                <button onClick={logout}>Çıkış Yap</button>
            </div>
        </div>
         )
    }

    return <div>
        <div>
            <h2>Giriş Yap</h2>
            <form onSubmit={login}>
                <label htmlFor="name">İsim</label>
                <input name="name" id="name" />
                <button type="submit">Giriş yap</button>
            </form>
        </div>
    </div>
   
   
}