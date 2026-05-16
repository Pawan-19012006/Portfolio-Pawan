import { Globe, MessageCircle, Link as LinkIcon, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="text-slate-500 text-sm">
          &copy; {currentYear} Portfolio. All rights reserved.
        </div>

        {/* Social Links Placeholder */}
        <div className="flex items-center space-x-4">
          <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Website">
            <Globe size={20} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Social">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Links">
            <LinkIcon size={20} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
