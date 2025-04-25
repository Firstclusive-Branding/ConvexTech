import { useSprings, animated } from "@react-spring/web";
import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  createElement,
} from "react";

const SplitText = ({
  children,
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  start = true,
  as = "span",
}) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const animatedCount = useRef(0);

  // Extract letters
  const extractLetters = (nodes) => {
    const result = [];

    const walk = (node, wrapperClass = "") => {
      if (typeof node === "string") {
        node.split(" ").forEach((word, wi, wa) => {
          word.split("").forEach((letter) => {
            result.push({ letter, wrapperClass });
          });
          if (wi < wa.length - 1) {
            result.push({ letter: " ", wrapperClass });
          }
        });
      } else if (isValidElement(node)) {
        const newClass =
          typeof node.props.className === "string" ? node.props.className : "";
        Children.forEach(node.props.children, (child) => walk(child, newClass));
      }
    };

    if (Array.isArray(children)) {
      children.forEach((child) => walk(child));
    } else {
      walk(children);
    }
    return result;
  };

  const lettersWithClass = extractLetters(children);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    lettersWithClass.length,
    lettersWithClass.map((_, i) => ({
      from: animationFrom,
      to:
        start && inView
          ? async (next) => {
              await next(animationTo);
              animatedCount.current += 1;
              if (
                animatedCount.current === lettersWithClass.length &&
                onLetterAnimationComplete
              ) {
                onLetterAnimationComplete();
              }
            }
          : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );
  return createElement(
    as,
    {
      ref,
      className: `split-parent ${className}`,
      style: {
        textAlign,
        display: as === "span" ? "inline" : "block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      },
    },
    // Group spans into words manually to avoid breaking
    (() => {
      const elements = [];
      let word = [];
      let indexOffset = 0;

      for (let i = 0; i < lettersWithClass.length; i++) {
        const { letter, wrapperClass } = lettersWithClass[i];

        // If space, push word span and then space
        if (letter === " ") {
          if (word.length) {
            elements.push(
              <span
                key={`word-${i}`}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {word}
              </span>
            );
            word = [];
          }

          elements.push(
            <span
              key={`space-${i}`}
              style={{ display: "inline-block", width: "0.4em" }}
            >
              {"\u00A0"}
            </span>
          );
          continue;
        }

        word.push(
          <animated.span
            key={i}
            style={{
              ...springs[i],
              display: "inline-block",
              willChange: "transform, opacity",
            }}
            className={wrapperClass}
          >
            {letter}
          </animated.span>
        );
      }

      // Push the last word
      if (word.length) {
        elements.push(
          <span
            key={`word-last`}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word}
          </span>
        );
      }

      return elements;
    })()
  );
};

export default SplitText;
