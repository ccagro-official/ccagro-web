export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light/60 py-12 px-6 w-full border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">CC Agro</h3>
          <p className="text-sm max-w-xs">
            Trusted Poultry Trading and Farm Growth Solutions. From chicks to chicken, feed to guidance.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-primary transition-colors">Our Offerings</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Business Guidance</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+91 98765 43210</li>
            <li>info@ccagro.com</li>
            <li>123 Farming District, State, Country</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} CC Agro Poultry Trading. All rights reserved.</p>
      </div>
    </footer>
  );
}
