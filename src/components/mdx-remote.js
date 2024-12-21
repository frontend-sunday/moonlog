import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props) => (
    <h1 {...props} className="text-h1 font-h1 text-foreground mb-heading">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className="text-h2 font-h2 text-foreground mb-heading">
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 {...props} className="text-h3 font-h3 text-foreground mb-heading">
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p
      {...props}
      className="text-base font-base text-foreground leading-base mb-paragraph"
    >
      {props.children}
    </p>
  ),
};

export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
