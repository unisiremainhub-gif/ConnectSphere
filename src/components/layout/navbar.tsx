// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Briefcase,
//   Users,
//   MessageSquare,
//   Info,
//   HomeIcon,
//   Rocket,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Logo } from "@/components/logo";
// import { ThemeToggle } from "@/components/theme-toggle";
// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";

// const navLinks = [
//   { href: "/", label: "Home", icon: HomeIcon },
//   {
//     label: "Explore",
//     icon: Rocket,
//     subLinks: [
//       { href: "/explore/team-building", label: "Team Building" },
//       { href: "/explore/cofounder-matching", label: "Co-founder Matching" },
//       { href: "/explore/investor-matching", label: "Investor Matching" },
//       { href: "/explore/mentorship", label: "Mentorship" },
//     ],
//   },
//   { href: "/careers", label: "Careers", icon: Briefcase },
//   { href: "/about", label: "About Us", icon: Info },
//   { href: "/contact", label: "Contact Us", icon: MessageSquare },
// ];

// export function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handleJoinWaitingList = () => {
//     window.open("/join-waitlist", "_blank");
//   };

//   const renderNavLinks = (isMobile = false) =>
//     navLinks.map((link) => {
//       // const isActive = link.href ? pathname === link.href : false; // No longer used for styling active state
//       // const isExploreParentActive = link.subLinks ? link.subLinks.some(subLink => pathname.startsWith(subLink.href)) : false; // No longer used for styling active state

//       return link.subLinks ? (
//         <DropdownMenu
//           key={link.label}
//           open={exploreMenuOpen && !isMobile}
//           onOpenChange={isMobile ? undefined : setExploreMenuOpen}
//         >
//           <DropdownMenuTrigger
//             asChild
//             onMouseEnter={isMobile ? undefined : () => setExploreMenuOpen(true)}
//             onMouseLeave={
//               isMobile ? undefined : () => setExploreMenuOpen(false)
//             }
//           >
//             <Button
//               variant="ghost"
//               className={cn(
//                 "transition-colors duration-200 group",
//                 isMobile ? "w-full justify-start text-lg py-3" : "px-3 py-2"
//               )}
//               aria-expanded={exploreMenuOpen && !isMobile}
//             >
//               <link.icon className="mr-2 h-5 w-5" />
//               {link.label}
//               <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             align="start"
//             className="bg-background border-border shadow-lg rounded-md w-56"
//             onMouseEnter={isMobile ? undefined : () => setExploreMenuOpen(true)}
//             onMouseLeave={
//               isMobile ? undefined : () => setExploreMenuOpen(false)
//             }
//           >
//             {link.subLinks.map((subLink) => (
//               <DropdownMenuItem
//                 key={subLink.label}
//                 asChild
//                 className="p-0 group/item"
//                 onSelect={() => {
//                   if (isMobile) setIsMobileMenuOpen(false);
//                   setExploreMenuOpen(false);
//                 }}
//               >
//                 <Link
//                   href={subLink.href}
//                   className="flex items-center justify-between w-full px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
//                 >
//                   <span>{subLink.label}</span>
//                   <Badge
//                     variant="outline"
//                     className="ml-2 text-xs px-1.5 py-0.5 border-primary/50 text-primary/80 group-hover/item:border-accent-foreground/50 group-hover/item:text-accent-foreground group-hover/item:bg-accent"
//                   >
//                     Upcoming
//                   </Badge>
//                 </Link>
//               </DropdownMenuItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ) : (
//         <Button
//           variant="ghost" // Always ghost variant
//           asChild
//           key={link.label}
//           className={
//             isMobile ? "w-full justify-start text-lg py-3" : "px-3 py-2"
//           }
//         >
//           <Link
//             href={link.href!}
//             onClick={() => {
//               if (isMobile) setIsMobileMenuOpen(false);
//             }}
//           >
//             <link.icon className="mr-2 h-5 w-5" />
//             {link.label}
//           </Link>
//         </Button>
//       );
//     });

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Logo />
//         <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
//           {renderNavLinks()}
//         </nav>
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <Button
//             onClick={handleJoinWaitingList}
//             variant="default"
//             className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex transition-colors duration-200"
//           >
//             Join Waiting List
//           </Button>
//           <ThemeToggle />
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent
//                 side="right"
//                 className="w-full max-w-xs bg-background p-6"
//               >
//                 <div className="flex flex-col space-y-5">
//                   <div className="flex justify-between items-center mb-4">
//                     <Logo />
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       <X className="h-6 w-6" />
//                       <span className="sr-only">Close menu</span>
//                     </Button>
//                   </div>
//                   <nav className="flex flex-col space-y-2">
//                     {renderNavLinks(true)}
//                   </nav>
//                   <Button
//                     onClick={() => {
//                       handleJoinWaitingList();
//                       setIsMobileMenuOpen(false);
//                     }}
//                     variant="default"
//                     className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4 transition-colors duration-200"
//                   >
//                     Join Waiting List
//                   </Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  MessageSquare,
  Info,
  HomeIcon,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogClose } from "@radix-ui/react-dialog";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  {
    label: "Explore",
    icon: Rocket,
    subLinks: [
      { href: "/explore/team-building", label: "Team Building" },
      { href: "/explore/cofounder-matching", label: "Co-founder Matching" },
      { href: "/explore/investor-matching", label: "Investor Matching" },
      { href: "/explore/mentorship", label: "Mentorship" },
    ],
  },
  { href: "/careers", label: "Careers", icon: Briefcase },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/contact", label: "Contact Us", icon: MessageSquare },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleJoinWaitingList = () => {
    window.open("/join-waitlist", "_blank");
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) =>
      link.subLinks ? (
        <div key={link.label} className="w-full">
          <Button
            variant="ghost"
            className={cn(
              "transition-colors duration-200 group flex items-center",
              isMobile ? "w-full justify-between text-lg py-3" : "px-3 py-2"
            )}
            onClick={() => setExploreMenuOpen((prev) => !prev)}
          >
            <div className="flex items-center">
              <link.icon className="mr-2 h-5 w-5" />
              {link.label}
            </div>
            <ChevronDown
              className={cn(
                "ml-1 h-4 w-4 transition-transform",
                exploreMenuOpen ? "rotate-180" : ""
              )}
            />
          </Button>

          {exploreMenuOpen && (
            <div
              className={cn(
                "mt-2 rounded-md border bg-background shadow-md",
                isMobile ? "pl-6" : "absolute"
              )}
            >
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.label}
                  href={subLink.href}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  onClick={() => {
                    setExploreMenuOpen(false);
                    if (isMobile) setIsMobileMenuOpen(false);
                  }}
                >
                  <span>{subLink.label}</span>
                  <Badge
                    variant="outline"
                    className="ml-2 text-xs px-1.5 py-0.5 border-primary/50 text-primary/80"
                  >
                    Upcoming
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Button
          variant="ghost"
          asChild
          key={link.label}
          className={
            isMobile ? "w-full justify-start text-lg py-3" : "px-3 py-2"
          }
        >
          <Link
            href={link.href!}
            onClick={() => {
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <link.icon className="mr-2 h-5 w-5" />
            {link.label}
          </Link>
        </Button>
      )
    );

  if (!isMounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 relative">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            onClick={handleJoinWaitingList}
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex transition-colors duration-200"
          >
            Join Waiting List
          </Button>
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background p-6"
              >
                {/* Hidden title for accessibility */}
                <VisuallyHidden>
                  <DialogTitle>Mobile Navigation</DialogTitle>
                </VisuallyHidden>

                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between items-center mb-4">
                    <Logo />
                    {/* Custom close button */}
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </DialogClose>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {renderNavLinks(true)}
                  </nav>

                  <Button
                    onClick={() => {
                      handleJoinWaitingList();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="default"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4 transition-colors duration-200"
                  >
                    Join Waiting List
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
