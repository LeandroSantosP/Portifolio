import Router from "next/router";
import { useAuth } from "../contexts/AuthContenxt"

export default function Home() {
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout();
    Router.push("/login");
  }

  return (
    <div>
      <h1>pagina inicia</h1>
      <h1>hello wolrd</h1>
      {user && (
        <button onClick={handleLogout}>Sair</button>
      )}
    </div>
  )
}
