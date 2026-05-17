/* eslint-disable @next/next/no-img-element */
"use client";

import { Icons } from "@/components/icons";
import { siteCopy } from "@/content/site-copy";
import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
} from "@/components/ui/reasoning";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ReasoningBasic() {
  const reasoningText =
    siteCopy.bentoSection.animations.first.reasoningResponse;

  return (
    <Reasoning>
      <ReasoningContent className="overflow-x-visible">
        <ReasoningResponse
          text={reasoningText}
          className="max-w-none break-words prose-p:leading-relaxed"
        />
      </ReasoningContent>
    </Reasoning>
  );
}

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col items-center justify-center gap-5 overflow-visible p-4"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t from-background to-transparent" />
      <motion.div
        className="mx-auto flex w-full max-w-md min-w-0 flex-col gap-2 px-1 sm:px-0"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-2 sm:gap-3">
          <motion.div
            className="ml-auto w-full max-w-[min(100%,17.5rem)] min-w-0 rounded-2xl bg-black p-3 text-white shadow-[0_0_10px_rgba(0,0,0,0.05)] sm:max-w-[280px] sm:p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <p className="text-sm leading-relaxed break-words">
              {siteCopy.bentoSection.animations.first.userMessage}
            </p>
          </motion.div>
          <div className="flex w-fit shrink-0 items-center rounded-full border border-border bg-background">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt={siteCopy.bentoSection.animations.first.userAvatarAlt}
              className="size-8 shrink-0 rounded-full"
            />
          </div>
        </div>
        <div className="flex w-full min-w-0 items-start gap-2">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-[0_0_10px_rgba(0,0,0,0.05)]">
            <Icons.logo className="size-4" />
          </div>

          <div className="min-h-[3.25rem] min-w-0 flex-1">
            <AnimatePresence mode="wait">
              {!shouldAnimate ? (
                <motion.div
                  key="dots"
                  className="inline-flex rounded-2xl border border-border bg-background p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="size-2 rounded-full bg-primary/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  layout
                  className="w-full min-w-0 rounded-xl border border-border bg-accent p-3 shadow-[0_0_10px_rgba(0,0,0,0.05)] sm:p-4"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <ReasoningBasic />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
