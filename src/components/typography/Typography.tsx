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
    h1: "poppins-bold text-[48px] leading-[1.25] tracking-normal text-slate-700",
    h2: "poppins-bold text-[40px] leading-[1.25] tracking-normal",
    h3: "poppins-semibold text-[32px] leading-[1.25] tracking-normal",
    h4: "poppins-semibold text-[24px] leading-[1.25] tracking-normal",

    paragraphL: "poppins-medium text-[24px] leading-[1.45] tracking-normal",
    paragraphM: "poppins-medium text-[18px] leading-[1.4] tracking-normal",

    labelXL: "poppins-semibold text-[24px] leading-normal tracking-normal",
    labelL: "poppins-semibold text-[20px] leading-normal tracking-normal",
    labelM: "poppins-semibold text-[16px] leading-normal tracking-normal",
    placeholder:
      "poppins-medium text-[16px] leading-normal tracking-normal text-slate-300",
    labelS: "poppins-semibold text-[14px] leading-normal tracking-normal",
  };

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
    placeholder: "span",
  };

  const Tag = TagMap[variant] as keyof JSX.IntrinsicElements;

  return <Tag className={styles[variant]}>{children}</Tag>;
};
