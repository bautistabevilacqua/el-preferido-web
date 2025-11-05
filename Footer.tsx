const Footer = () => {
  return (
    <footer className="bg-[#0E1623] text-[#E8D5C7] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <h3 className="font-heading text-3xl font-normal italic mb-4">el Preferido</h3>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-subheading text-lg font-semibold mb-4 uppercase tracking-wider">Horarios</h4>
            <p className="font-body text-sm leading-relaxed">
              Abierto todos los días<br />
              de 11:30 a 00:00
            </p>
          </div>

          {/* Dirección y Contacto */}
          <div>
            <h4 className="font-subheading text-lg font-semibold mb-4 uppercase tracking-wider">Dirección</h4>
            <p className="font-body text-sm leading-relaxed mb-2">
              Jorge Luis Borges 2108<br />
              Palermo, Buenos Aires
            </p>
            <p className="font-body text-sm">
              Tel: +54 11 4831 9564
            </p>
          </div>

          {/* Mapa */}
          <div>
            <h4 className="font-subheading text-lg font-semibold mb-4 uppercase tracking-wider">Ubicación</h4>
            <div className="rounded-lg overflow-hidden shadow-soft h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7584!2d-58.4167!3d-34.5872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzE0LjAiUyA1OMKwMjUnMDAuMSJX!5e0!3m2!1sen!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="El Preferido Location"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2A3542] pt-8 text-center">
          <p className="font-body text-sm text-[#B5A89A]">
            © 2025 El Preferido. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
