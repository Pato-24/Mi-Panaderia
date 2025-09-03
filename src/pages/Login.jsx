import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ajusta la ruta si es necesario

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const user = data.find(
        (u) => u.usuario === usuario && u.password === password
      );

      if (user) {
        // Guarda solo datos necesarios en localStorage
        localStorage.setItem(
          "usuarioLogueado",
          JSON.stringify({ usuario: user.usuario, rol: user.rol })
        );
        // Redirige según el rol
        if (user.rol === "admin") {
          navigate("/peliculas");
        } else {
          navigate("/home");
        }
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      setError("No se pudo conectar al servidor. Verifica que el backend esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="login-container">
  <form onSubmit={handleLogin} className="login-form">
    <h2>Iniciar Sesión</h2>
    {error && <p className="login-error">{error}</p>}
    <div className="input-group">
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button type="submit" disabled={!usuario || !password || loading}>
      {loading ? "Ingresando..." : "Ingresar"}
    </button>
    <p className="login-link">
      ¿No tenés cuenta?{" "}
      <span onClick={() => navigate("/registro")} className="link-registrate">
        Registrate gratis
      </span>
    </p>
  </form>
</div>
  );
};

export default Login;