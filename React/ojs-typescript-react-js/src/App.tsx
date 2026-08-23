import { useState } from "react";

interface AppProps {
  pageTitle: string;
  content: string;
}

interface User {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
}

function App({ pageTitle, content }: AppProps) {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User>();


  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const contactFormData = new FormData(target);
    const contactFormDataObject = Object.fromEntries(contactFormData.entries()
  ) as unknown as User & {
    age: string;
  };

    const userData = {
      firstName: contactFormDataObject.firstName,
      lastName: contactFormDataObject.lastName,
      gender: contactFormDataObject.gender,
      age: Number(contactFormDataObject.age),
    };

    setUser(userData);
  }

  return (
    <>
      <h1>{pageTitle}</h1>  
      <p>{content}</p>
      <input type="text" onChange={handleChangeName} />
      <div>İsim: {name}</div>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="firstName">İsim</label>
          <input id="firstName" name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Soyisim</label>
          <input id="lastName" name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="age">Yaş</label>
          <input id="age" name="age" type="number" />
        </div>
         <div>
          <label htmlFor="gender">Cinsiyet</label>
          <select id="gender" name="gender">
            <option>Kadın</option>
            <option>Erkek</option>
            <option>Belirtilmedi</option>
          </select>
        </div>
        <button>Gönder</button>
      </form>
      <br />
      <br />
      <br />
      <div>İsim: {user?.firstName}</div>
      <div>Soyisim {user?.lastName}</div>
      <div>Yaş: {user?.age}</div>
      <div>Cinsiyet: {user?.gender}</div>
      
    </>
  )
}

export default App
