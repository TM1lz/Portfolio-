import React, { useState } from "react";
import styles from "./ContactCard.module.css";
import SocialIcons from "./SocialIcons";

const ContactCard = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para loading
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("http://localhost:3000/enviar-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSubmitted(false);
        setError("");
      }, 3000);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setError(err.message);
    } finally {
      setLoading(false);

      // Resetar formulário após 3s
      
    }
  };

  return (
    <div id="contato" ref={ref} className={styles.card}>
      <h2>Entre em Contato</h2>
      <p className={styles.subtitle}>
        Preencha o formulário e retornarei em breve!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite seu nome"
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Digite seu e-mail"
          />
        </label>

        <label>
          Telefone (opcional):
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </label>

        <label>
          Assunto de Interesse:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Me diga como posso ajudar..."
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {loading && <p className={styles.loading}>⏳ Enviando sua mensagem...</p>}
        {submitted && <p className={styles.success}>✅ Mensagem enviada com sucesso!</p>}
        {error && <p className={styles.error}>❌ {error}</p>}
      </form>

      <div className={styles.social}>
        <p>Ou me encontre nas redes:</p>
        <div className={styles.icons}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
});

export default ContactCard;
