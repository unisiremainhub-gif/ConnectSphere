import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const platformLinks = [
  { name: "Co-founder Matching", href: "/explore/cofounder-matching" },
  { name: "Investor Matching", href: "/explore/investor-matching" },
  { name: "Team Building", href: "/explore/team-building" },
  { name: "Mentorship", href: "/explore/mentorship" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, Description, Social Icons */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 mb-2 text-sm">
              Connecting innovators and visionaries to build the future,
              together.
            </p>
            <h4 className="text-xs font-semibold text-foreground mb-2 uppercase">
              Social Media <span className="text-primary">(Coming Soon)</span>
            </h4>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  variant="ghost"
                  size="icon"
                  key={social.name}
                  className="text-muted-foreground hover:text-primary hover:bg-accent/20 transition-colors duration-200 cursor-not-allowed opacity-70"
                  disabled
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">PLATFORM</h3>
            <ul className="mt-4 space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">COMPANY</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">LEGAL</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CollabForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
