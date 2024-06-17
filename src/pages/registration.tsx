import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useState } from "react";

const CreateUserForm = ({ users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [surname, setSurname] = useState('');
  const [school, setSchool] = useState('');
  const [gdpr, setGdpr] = useState(false);

  const createUser = api.user.sendForm.useMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser.mutateAsync({ name, email, surname, school, gdpr });
      alert("Úspěšná registrace!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Špatně zadané údaje!");
    }
  };

  return (
    <div className ="h-[100vh]">
      <Navbar />
      <div className ="flex flex-col justify-center">
        <h1 className ="text-blue-pk flex justify-start p-20 text-6xl font-bold">
          Registrace
        </h1>
        <form onSubmit = {handleSubmit}>
          <div className ="flex justify-start pl-16">
            <div className ="flex flex-col justify-start space-y-4">
              <div className ="flex justify-center pr-16 pl-2">
                <div className ="pb-4 pr-16">
                  <input
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type = "text"
                    name = "name"
                    placeholder = "Jméno"
                    required
                    className = "border border-black p-2"
                  />
                </div>
                <div className = "pb-4 pr-16">
                  <input
                    value = {surname}
                    onChange = {(e) => setSurname(e.target.value)}
                    type = "text"
                    name = "surname"
                    placeholder = "Přijmení"
                    required
                    className = "border border-black p-2"
                  />
                </div>
                <div className = "flex items-center">
                  <input
                    checked = {gdpr}
                    onChange = {(e) => setGdpr(e.target.checked)}
                    type = "checkbox"
                    name = "gdpr"
                    required
                    className = "border border-black p-2"
                  />
                  <label className = "pl-2">Souhlasím s GDPR</label>
                </div>
              </div>
              <div className = "pl-4 pr-72">
                <div className = "flex justify-center">
                  <div className = "pb-4 pr-16">
                    <input
                      value = {email}
                      onChange = {(e) => setEmail(e.target.value)}
                      type = "email"
                      name = "email"
                      placeholder = "E-mail"
                      required
                      className = "border border-black p-2"
                    />
                  </div>
                  <div>
                    <input
                      value = {school}
                      onChange = {(e) => setSchool(e.target.value)}
                      type = "text"
                      name = "school"
                      placeholder = "Základní škola"
                      required
                      className = "border border-black p-2"
                    />
                  </div>
                </div>
              </div>
              <div className = "pb-8 pl-4">
                <button
                  type = "submit"
                  className = "bg-yellow-500 px-4 py-2 text-lg text-black"
                >
                  Registrovat se
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ul className = "text-black">
        {users.map((user) => (
          <li key = {user.id}>
            <p>{user.name} {user.surname} {user.email} {user.school} </p>
          </li>
        ))}
      </ul>

      <div className = "absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

const Registration = () => {
  const { data: users, isLoading: userLoading } = api.user.getAllUsers.useQuery();

  if (userLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }

  if (!users) return <div>Something went wrong</div>;

  return <CreateUserForm users = {users} />;
};

export default Registration;
