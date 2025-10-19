import "../css/Registro.css";
import "../css/general.css";
import { useState } from "react";
import { validarFormulario } from "../utils/validarFormulario";

export default function Registro() {
  const [formData, setFormData] = useState({
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    region: "",
    direccion: "",
    contrasena: "",
  });

  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const erroresValidacion = validarFormulario(formData);

  if (Object.keys(erroresValidacion).length > 0) {
    setErrores(erroresValidacion);
    return;
  }

  try {
    // 1️⃣ Verificar si el correo ya existe
    const response = await fetch(`http://localhost:3001/usuarios?correo=${formData.correo}`);
    const existentes = await response.json();

    if (existentes.length > 0) {
      setErrores({ correo: "Este correo ya está registrado" });
      return;
    }

    // 2️⃣ Guardar nuevo usuario
    const res = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Error al registrar usuario");

    alert("✅ Registro exitoso");
    setFormData({
      rut: "",
      nombre: "",
      apellido: "",
      correo: "",
      region: "",
      direccion: "",
      contrasena: "",
    });
  } catch (error) {
    console.error(error);
    alert("⚠️ No se pudo conectar con el servidor JSON.");
  }
};


  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>

        <label>RUT (11111111-1)</label>
        <input
          type="text"
          name="rut"
          value={formData.rut}
          onChange={handleChange}
        />
        {errores.rut && <span className="error">{errores.rut}</span>}

        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}

        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        {errores.apellido && <span className="error">{errores.apellido}</span>}

        <label>Correo electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        {errores.correo && <span className="error">{errores.correo}</span>}

        <label>Región</label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
        >
          <option value="">Selecciona una región</option>
          <option value="Región de Arica y Parinacota">Región de Arica y Parinacota</option>
          <option value="Región de Tarapacá">Región de Tarapacá</option>
          <option value="Región de Antofagasta">Región de Antofagasta</option>
          <option value="Región de Atacama">Región de Atacama</option>
          <option value="Región de Coquimbo">Región de Coquimbo</option>
          <option value="Región de Valparaíso">Región de Valparaíso</option>
          <option value="Región Metropolitana">Región Metropolitana</option>
          <option value="Región del Libertador General Bernardo O’Higgins">Región del Libertador General Bernardo O’Higgins</option>
          <option value="Región del Maule">Región del Maule</option>
          <option value="Región del Ñuble">Región del Ñuble</option>
          <option value="Región del Biobío">Región del Biobío</option>
          <option value="Región de La Araucanía">Región de La Araucanía</option>
          <option value="Región de Los Ríos">Región de Los Ríos</option>
          <option value="Región de Los Lagos">Región de Los Lagos</option>
          <option value="Región de Aysén">Región de Aysén</option>
          <option value="Región de Magallanes y la Antártica Chilena">Región de Magallanes y la Antártica Chilena</option>
        </select>
        {errores.region && <span className="error">{errores.region}</span>}

        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
        {errores.direccion && <span className="error">{errores.direccion}</span>}

        <label>Contraseña</label>
        <input
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
        />
        {errores.contrasena && <span className="error">{errores.contrasena}</span>}

        <button type="submit">Registrar</button>

        {mensaje && (
          <p
            className={`mensaje ${
              mensaje.startsWith("✅")
                ? "mensaje-exito"
                : "mensaje-error"
            }`}
          >
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
}
