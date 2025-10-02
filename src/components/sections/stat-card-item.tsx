
"use client";

import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useEffect, useState, useRef, ComponentType } from 'react';

interface StatCardItemProps {
  iconName: keyof typeof LucideIcons;
  value: string;
  label: string;
}

export function StatCardItem({ iconName, value, label }: StatCardItemProps) {
  const [currentDisplayValue, setCurrentDisplayValue] = useState<string>(''); 
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationFrameId = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  
  const parsedValueRef = useRef<{ num: number; suffix: string }>({ num: 0, suffix: '' });

  // Effect 1: Parse the input value and set the initial display string for animation.
  // Runs when 'value' prop changes.
  useEffect(() => {
    const numericMatch = value.match(/(\d[\d,]*)/);
    const num = numericMatch ? parseInt(numericMatch[1].replace(/,/g, ''), 10) : 0;
    const suffix = numericMatch ? value.substring(numericMatch[0].length).trim() : value.trim();
    
    parsedValueRef.current = { num, suffix };
    // Set initial display value to "0<suffix>" to prepare for animation.
    // If the value prop changes, this will reset the display for a potential new animation.
    setCurrentDisplayValue(`0${suffix}`);
    // If value changes, we assume it's a new item or data, so reset animation state.
    setHasAnimated(false);
    setIsInView(false); // Reset isInView to allow observer to trigger again if still in viewport
  }, [value]);

  // Effect 2: Setup IntersectionObserver.
  // Runs on mount and if 'hasAnimated' changes (to potentially re-setup if needed, though unobserve should handle one-shot).
  useEffect(() => {
    const currentCardRef = cardRef.current;
    // If no ref, or it has already animated, no need to observe.
    if (!currentCardRef || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentCardRef); // Unobserve after first intersection for one-shot animation
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    observer.observe(currentCardRef);

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef); // Cleanup observer on unmount
      }
      if (animationFrameId.current) { // Cleanup animation frame on unmount
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [hasAnimated]); // Re-check observer if hasAnimated changes.

  // Effect 3: Perform the animation.
  // Runs if isInView becomes true and it hasn't animated yet.
  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      const duration = 700; 
      const { num: targetNumber, suffix } = parsedValueRef.current;

      // currentDisplayValue is already "0<suffix>" from the first useEffect due to 'value' dependency.
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const animatedNumber = Math.floor(percentage * targetNumber);
        
        setCurrentDisplayValue(`${animatedNumber.toLocaleString()}${suffix}`);

        if (percentage < 1) {
          animationFrameId.current = requestAnimationFrame(animate);
        } else {
          setCurrentDisplayValue(`${targetNumber.toLocaleString()}${suffix}`); // Ensure final value
          setHasAnimated(true); 
        }
      };
      
      animationFrameId.current = requestAnimationFrame(animate);
    }

    // Cleanup function for this effect (if animation is interrupted by unmount or dependency change)
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInView, hasAnimated]); // Trigger animation based on these states

  const IconComponent = LucideIcons[iconName] as ComponentType<LucideProps> | undefined;

  return (
    <div
      ref={cardRef}
      className="bg-card p-6 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
    >
      {IconComponent && <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />}
      <p className="text-4xl font-bold text-foreground mb-2 tabular-nums">{currentDisplayValue}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

    