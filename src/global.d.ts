type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  videoid: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["lite-youtube"]: CustomElement<LiteYTEmbed>;
    }
  }
}
