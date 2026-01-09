import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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
            <div className="card-medical py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ďakujeme za vašu žiadosť!
              </h3>
              <p className="text-muted-foreground text-lg">
                Ozveme sa vám čo najskôr na dohodnutie termínu.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="objednat" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div>
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
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-medical">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="label-medical">
                  Meno a priezvisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-medical"
                  placeholder="Vaše meno"
                />
              </div>

              <div>
                <label htmlFor="phone" className="label-medical">
                  Telefónne číslo *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-medical"
                  placeholder="+421 xxx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="email" className="label-medical">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-medical"
                  placeholder="vas@email.sk"
                />
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="animate-pulse">Odosielam...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Odoslať žiadosť
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Odoslaním formulára súhlasíte so spracovaním osobných údajov.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
