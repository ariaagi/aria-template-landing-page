"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "motion/react";

import { cn } from "@/lib/utils";

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
} & Accordion.AccordionItemProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
} & Accordion.AccordionContentProps;

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="p-3">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

type FeatureItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
};
type FeatureProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  lineColor?: string;
  featureItems: FeatureItem[];
};

export const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  lineColor = "bg-neutral-500",
  featureItems,
}: FeatureProps) => {
  const mobileFeatureWidth =
    "w-[min(calc(100vw-5rem),17rem)] max-w-[min(calc(100vw-5rem),17rem)]";

  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [previousIndex, setPreviousIndex] = useState<number>(-1);

  const carouselRef = useRef<HTMLUListElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  // interval for changing images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % featureItems.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) %
        featureItems.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          featureItems.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [featureItems.length]);

  // Handle image transition
  useEffect(() => {
    if (currentIndex !== previousIndex) {
      setImageLoaded(false);
      setPreviousIndex(currentIndex);
    }
  }, [currentIndex, previousIndex]);

  // Replace the existing image rendering section with this optimized version
  const renderMedia = () => {
    const currentItem = featureItems[currentIndex];
    const mediaFrameClass =
      "relative size-full min-h-[280px] overflow-hidden rounded-xl bg-muted ring-1 ring-inset ring-border";

    if (!currentItem) {
      return (
        <div className={cn(mediaFrameClass, "animate-pulse bg-gray-200")} />
      );
    }

    if (currentItem.image) {
      return (
        <motion.div key={currentIndex} className={mediaFrameClass}>
          <div
            className={cn(
              "absolute inset-0 bg-gray-200 transition-opacity duration-150",
              imageLoaded ? "opacity-0" : "opacity-100",
            )}
            aria-hidden
          />
          <motion.img
            src={currentItem.image}
            alt={currentItem.title}
            className={cn(
              "absolute inset-0 block size-full object-cover transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      );
    }

    if (currentItem.video) {
      return (
        <div className={mediaFrameClass}>
          <video
            preload="auto"
            src={currentItem.video}
            className="absolute inset-0 block size-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      );
    }

    return <div className={cn(mediaFrameClass, "bg-gray-200")} />;
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto">
        <div className="flex h-full w-full flex-col items-center gap-4 md:px-20 lg:grid lg:grid-cols-5 lg:items-center lg:gap-x-10 lg:px-10">
          <div
            className={`col-span-2 w-full h-full hidden lg:flex md:items-center ${
              ltr ? "md:order-2 md:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className="w-full h-full flex flex-col gap-8"
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {featureItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className={cn(
                    "relative rounded-lg data-[state=closed]:rounded-none data-[state=closed]:border-0 data-[state=open]:bg-white data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)]",
                  )}
                  value={`item-${index}`}
                >
                  <div
                    className={cn(
                      "absolute overflow-hidden rounded-lg transition-opacity",
                      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                      "bg-neutral-300/50",
                      {
                        "bottom-0 top-0 h-full w-0.5 left-0":
                          linePosition === "left",
                        "bottom-0 top-0 h-full w-0.5 right-0":
                          linePosition === "right",
                        "left-0 right-0 top-0 h-0.5 w-full":
                          linePosition === "top",
                        "left-0 right-0 bottom-0 h-0.5 w-full":
                          linePosition === "bottom",
                      },
                    )}
                    data-state={currentIndex === index ? "open" : "closed"}
                  >
                    <div
                      className={cn(
                        "absolute transition-all ease-linear",
                        lineColor,
                        {
                          "left-0 top-0 w-full": ["left", "right"].includes(
                            linePosition,
                          ),
                          "left-0 top-0 h-full": ["top", "bottom"].includes(
                            linePosition,
                          ),
                        },
                        currentIndex === index
                          ? ["left", "right"].includes(linePosition)
                            ? "h-full"
                            : "w-full"
                          : ["left", "right"].includes(linePosition)
                            ? "h-0"
                            : "w-0",
                      )}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                  <AccordionTrigger className="font-semibold text-lg tracking-tight text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-medium">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div
            className={cn(
              "mx-auto h-[280px] min-h-[200px] shrink-0 sm:h-[320px] lg:col-span-3 lg:mx-0 lg:h-[350px] lg:w-full lg:max-w-none",
              mobileFeatureWidth,
              ltr && "lg:order-1",
            )}
          >
            {renderMedia()}
          </div>

          <div className={cn("mx-auto min-w-0 lg:hidden", mobileFeatureWidth)}>
            <ul
              ref={carouselRef}
              className="flex w-full min-w-0 snap-x snap-mandatory flex-nowrap overflow-x-auto overscroll-x-contain py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
            {featureItems.map((item, index) => {
              const isActive = currentIndex === index;

              return (
                <li
                  key={item.id}
                  className="card box-border w-full min-w-full max-w-full shrink-0 grow-0 basis-full snap-center"
                >
                  <div
                    className={cn(
                      "flex w-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow",
                      isActive && "shadow-md",
                    )}
                  >
                    <button
                      type="button"
                      className="flex w-full min-w-0 flex-col items-start gap-2 p-4 text-left"
                      onClick={() => setCurrentIndex(index)}
                    >
                      <h2 className="w-full text-pretty text-sm font-bold leading-snug sm:text-base">
                        {item.title}
                      </h2>
                      <p className="w-full text-pretty text-sm font-medium leading-relaxed text-muted-foreground">
                        {item.content}
                      </p>
                    </button>
                    {linePosition === "bottom" ? (
                      <div
                        className="h-0.5 w-full shrink-0 bg-neutral-200"
                        aria-hidden
                      >
                        <motion.div
                          key={
                            isActive ? `progress-${index}` : `idle-${index}`
                          }
                          className={cn("h-full", lineColor)}
                          initial={{ width: "0%" }}
                          animate={{ width: isActive ? "100%" : "0%" }}
                          transition={{
                            duration: isActive ? collapseDelay / 1000 : 0,
                            ease: "linear",
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
