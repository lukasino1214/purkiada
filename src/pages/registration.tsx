import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useState } from "react";
import { $Enums } from "@prisma/client";

type User = {
  id: number;
  name: string | null;
  surname: string | null;
  email: string;
  school: string | null;
  gdpr: boolean;
  admin: $Enums.Role;
}

const Registration = () => {
  const { data: users, isLoading: userLoading } = api.user.getAllUsers.useQuery();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gdpr, setGdpr] = useState(false);
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');

  const createUser = api.user.sendForm.useMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser.mutateAsync({ name, email, surname, school, gdpr });
      alert("Úspěšná registrace!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Špatně zadané údaje!");
    }
  };

  if (userLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }

  if (!users) return <div>Something went wrong</div>;

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="flex flex-col justify-center pt-[64px]">
        <div className="text-blue-pk flex justify-start p-16 max-sm:flex-row max-sm:justify-center max-sm:align-middle max-sm:items-center max-sm:w-full">
          <h1 className="text-6xl font-bold">
            Registrace
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-start pl-16 max-sm:pl-0 max-sm:justify-center max-sm:align-middle max-sm:items-center">
            <div className="flex flex-col justify-start space-y-4">
              <div className="grid justify-between gap-8 align-middle items-center grid-cols-3 max-sm:grid-cols-1">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Jméno"
                  required
                  className="border border-black p-2"
                />
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  name="surname"
                  placeholder="Přijmení"
                  required
                  className="border border-black p-2"
                />
                <div className="max-sm:flex max-sm:justify-center max-sm:align-middle max-sm:items-center max-sm:flex-row max-sm:row-start-5">
                  <input
                    checked={gdpr}
                    onChange={(e) => setGdpr(e.target.checked)}
                    type="checkbox"
                    name="gdpr"
                    required
                    className="border border-black p-2"
                  />
                  <label className="pl-2">Souhlasím s GDPR</label>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="border border-black p-2"
                />
                <input
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  type="text"
                  name="school"
                  placeholder="Základní škola"
                  required
                  className="border border-black p-2"
                />
              </div>
              <div className="pt-8 pb-8 max-sm:flex max-sm:flex-row max-sm:justify-center max-sm:align-middle max-sm:items-center">
                <button
                  type="submit"
                  className="bg-yellow-500 px-4 py-2 text-lg text-black"
                >
                  Registrovat se
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ul className="text-black">
        {users.map((user: User) => (
          <li key={user.id}>
            <p>{user.name} {user.surname} {user.email} {user.school} </p>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 max-sm:relative w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Registration;