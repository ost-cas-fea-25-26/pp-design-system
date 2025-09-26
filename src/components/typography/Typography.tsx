import React, { JSX, ReactNode } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "paragraphL"
  | "paragraphM"
  | "labelXL"
  | "labelL"
  | "labelM"
  | "labelS"
  | "placeholder";

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
}) => {
  const styles: Record<TypographyVariant, string> = {
    // Headings
    h1: "text-4xl font-bold leading-[40px]",
    h2: "text-3xl font-semibold leading-[36px]",
    h3: "text-2xl font-semibold leading-[32px]",
    h4: "text-xl font-medium leading-[28px]",

    // Paragraphs
    paragraphL: "text-lg font-normal leading-[28px]",
    paragraphM: "text-base font-normal leading-[24px]",

    // Labels
    labelXL: "text-base font-bold leading-[24px]",
    labelL: "text-sm font-semibold leading-[20px]",
    labelM: "text-xs font-medium leading-[18px]",
    labelS: "text-[10px] font-medium leading-[16px]",

    // Placeholder
    placeholder: "text-base font-normal leading-[24px] text-gray-400 italic",
  };

  // Map variant to a valid HTML element
  const TagMap: Record<TypographyVariant, string> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    paragraphL: "p",
    paragraphM: "p",
    labelXL: "span",
    labelL: "span",
    labelM: "span",
    labelS: "span",
    placeholder: "input",
  };

  const Tag = TagMap[variant] as keyof JSX.IntrinsicElements;

  if (variant === "placeholder") {
    return (
      <input
        className={styles[variant]}
        placeholder={typeof children === "string" ? children : ""}
        readOnly
      />
    );
  }

  return <Tag className={styles[variant]}>{children}</Tag>;
};
