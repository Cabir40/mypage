import { useRef, useState, useEffect, useCallback, type ReactNode, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}

const getTrackStep = (track: HTMLDivElement | null) => {
  if (!track) return 0;
  const child = track.firstElementChild as HTMLElement | null;
  if (!child) return 0;
  const gap = parseInt(getComputedStyle(track).gap || "0", 10) || 0;
  return child.clientWidth + gap;
};

const Carousel = ({ children, className = "", itemClassName = "" }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = Children.count(children);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getTrackStep(track);
    const index = step > 0 ? Math.round(track.scrollLeft / step) : 0;
    setCurrentIndex(Math.max(0, Math.min(index, itemCount - 1)));
    setCanScrollLeft(track.scrollLeft > 1);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, [itemCount]);

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDirection = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const step = getTrackStep(track);
    if (step <= 0) return;
    const delta = direction === "left" ? -step : step;
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const step = getTrackStep(track);
    if (step <= 0) return;
    track.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        className={`flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-px-4 sm:scroll-px-6 lg:scroll-px-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-4 ${itemClassName}`}
      >
        {children}
      </div>

      {itemCount > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => scrollByDirection("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground transition-all hover:scale-110 hover:bg-muted ${
              canScrollLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pages">
            {Array.from({ length: itemCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByDirection("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground transition-all hover:scale-110 hover:bg-muted ${
              canScrollRight ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
