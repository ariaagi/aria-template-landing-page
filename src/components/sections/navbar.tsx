"use client";

import { BrandLogo } from "@/components/brand-logo";
import { NavMenu } from "@/components/nav-menu";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.nav.links.map((item) =>
        item.href.substring(1),
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  return (
    <header
      className={cn(
        "sticky z-50 flex w-full justify-center px-3 transition-all duration-300 sm:px-4 md:px-0",
        hasScrolled ? "top-4 sm:top-6" : "top-3 sm:top-4",
      )}
    >
      <motion.div className="w-full max-w-7xl px-1 sm:px-0">
        <div
          className={cn(
            "mx-auto w-full rounded-2xl transition-all duration-300",
            hasScrolled
              ? "border border-border bg-background/75 px-2 backdrop-blur-lg"
              : "px-3 shadow-none sm:px-6 md:px-7",
          )}
        >
          <div className="flex h-12 items-center justify-between gap-2 sm:h-[56px] sm:gap-3 sm:px-1 md:px-3">
            <Link
              href="/"
              className={cn(
                "flex min-w-0 flex-1 items-center overflow-hidden md:max-w-[32ch] md:flex-none",
                siteConfig.brand.hasLogo && "gap-1.5 sm:gap-2 md:gap-3",
              )}
            >
              <BrandLogo className="size-6 sm:size-7 md:size-9" />
              <p className="min-w-0 truncate text-[11px] font-semibold leading-tight tracking-tight text-primary sm:text-xs md:text-sm">
                {siteConfig.brand.displayName}
              </p>
            </Link>

            <NavMenu />

            <div className="flex shrink-0 flex-row items-center gap-1 md:gap-3">
              <div className="flex items-center space-x-6">
                <Link
                  className="hidden h-8 w-fit items-center justify-center rounded-lg bg-primary px-4 text-sm font-normal tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 md:flex"
                  href={siteConfig.getStartedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.cta}
                </Link>
              </div>
              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className={cn(
                      "flex min-w-0 max-w-[32ch] items-center",
                      siteConfig.brand.hasLogo && "gap-3",
                    )}
                  >
                    <BrandLogo className="size-6" />
                    <p className="min-w-0 truncate text-xs font-semibold leading-tight tracking-tight text-primary">
                      {siteConfig.brand.displayName}
                    </p>
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-4 border border-border rounded-md"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {siteConfig.nav.links.map((item) => (
                      <motion.li
                        key={item.id}
                        className="p-2.5 border-b border-border last:border-b-0"
                        variants={drawerMenuVariants}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(
                              item.href.substring(1),
                            );
                            element?.scrollIntoView({ behavior: "smooth" });
                            setIsDrawerOpen(false);
                          }}
                          className={`underline-offset-4 hover:text-primary/80 transition-colors ${
                            activeSection === item.href.substring(1)
                              ? "text-primary font-medium"
                              : "text-primary/60"
                          }`}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={siteConfig.getStartedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-normal tracking-wide text-primary-foreground transition-all ease-out hover:bg-primary/90 active:scale-95"
                  >
                    {siteConfig.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
