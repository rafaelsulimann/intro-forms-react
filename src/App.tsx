import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState<string>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFullName(`${formData.firstName} ${formData.lastName}`);
  }

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-input">
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Nome"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <button className="form-button-submit">Mostrar nome completo</button>
      </form>
      <h2>{fullName}</h2>
    </>
  );
}
