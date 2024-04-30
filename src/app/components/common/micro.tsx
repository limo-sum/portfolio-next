import { FC } from "react";

interface PropText {
  text: string;
}
export const H1: FC<PropText> = ({ text }) => {
  return (
    <h1 className="mb-6 mt-6 font-bolder text-4xl" id={text}>
      {text}
    </h1>
  );
};
export const Tag: FC<PropText> = ({ text }) => {
  return (
    <p className="px-3 xt-xs border border-gray-300 text-sm text-gray-600">
      {text}
    </p>
  );
};

interface PropTexts {
  texts: string[] | undefined;
}
export const Tags: FC<PropTexts> = ({ texts }) => {
  return (
    <ul className="mt-2 mb-2 flex flex-wrap gap-1">
      {texts?.map((text: string) => {
        return <Tag key={text} text={text} />;
      })}
    </ul>
  );
};
