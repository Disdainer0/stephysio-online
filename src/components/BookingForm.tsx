import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import exerciseImage from "@/assets/exercise-therapy.jpg";

const serviceOptions = [
  "Fyzioterapia",
  "Rehabilitácia",
  "Terapia chrbtice",
  "Individuálne cvičenia",
  "Iné / Konzultácia",
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="objednat" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="card-medical py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ďakujeme za vašu žiadosť!
              </h3>
              <p className="text-muted-foreground text-lg">
                Ozveme sa vám čo najskôr na dohodnutie termínu.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="objednat" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background z-10" />
        <motion.img
          src={exerciseImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Objednávka
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              Začnite svoju cestu k zdravému pohybu
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vyplňte formulár a my sa vám čo najskôr ozveme s návrhom termínu.
              Každá konzultácia začína komplexným vyšetrením a stanovením
              individuálneho liečebného plánu.
            </p>

            {/* Trust elements */}
            <div className="space-y-4">
              {[
                "Odpoveď do 24 hodín",
                "Prvé vyšetrenie vrátane diagnostiky",
                "Žiadne záväzky – bezplatná konzultácia",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="card-medical relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Form glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-xl opacity-50" />
            
            <form onSubmit={handleSubmit} className="space-y-5 relative">
              {["name", "phone", "email"].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <label htmlFor={field} className="label-medical">
                    {field === "name" && "Meno a priezvisko *"}
                    {field === "phone" && "Telefónne číslo *"}
                    {field === "email" && "E-mail *"}
                  </label>
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="input-medical"
                    placeholder={
                      field === "name" ? "Vaše meno" :
                      field === "phone" ? "+421 xxx xxx xxx" :
                      "vas@email.sk"
                    }
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label htmlFor="service" className="label-medical">
                  Služba *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="input-medical"
                >
                  <option value="">Vyberte službu</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <label htmlFor="message" className="label-medical">
                  Správa (voliteľné)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-medical resize-none"
                  placeholder="Popíšte vaše ťažkosti alebo otázky..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                {isLoading ? (
                  <span className="animate-pulse">Odosielam...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Odoslať žiadosť
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                Odoslaním formulára súhlasíte so spracovaním osobných údajov.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
