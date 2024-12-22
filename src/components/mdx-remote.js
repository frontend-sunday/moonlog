import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

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
  h4: (props) => (
    <h4 {...props} className="text-h4 font-h4 text-foreground mb-heading">
      {props.children}
    </h4>
  ),
  p: (props) => (
    <p
      {...props}
      className="text-base font-base text-foreground leading-base mb-paragraph"
    >
      {props.children}
    </p>
  ),
  hr: (props) => <hr {...props} className="border-t border-hr my-paragraph" />,
  em: (props) => (
    <em {...props} className="italic text-foreground">
      {props.children}
    </em>
  ),
  bold: (props) => (
    <bold {...props} className="font-bold text-foreground">
      {props.children}
    </bold>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="bg-blockquote border-l-4 border-gray-300 pl-4 py-2 italic text-gray-700"
    >
      {props.children}
    </blockquote>
  ),
  pre: (props) => (
    <pre className="bg-gray-500 text-white p-4 rounded-md overflow-auto">
      <code {...props} className="font-mono text-sm">
        {props.children}
      </code>
    </pre>
  ),
  code: (props) => (
    <code
      {...props}
      className="
      //text-red-600
       font-mono px-1 py-0.5 rounded-code"
    >
      {props.children}
    </code>
  ),
  ul: (props) => (
    <ul {...props} className="list-disc list-inside pl-4 mb-paragraph">
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ol {...props} className="list-decimal list-inside pl-4 mb-paragraph">
      {props.children}
    </ol>
  ),
  li: (props) => (
    <li {...props} className="mb-paragraph">
      {props.children}
    </li>
  ),
  a: (props) => (
    <Link
      {...props}
      className="text-blue-600 underline hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </Link>
  ),
  img: (props) => (
    <Image
      {...props}
      width={props.width || 500}
      height={props.height || 500}
      className="rounded-lg shadow-md max-w-full h-auto"
      alt={props.alt || "Image"}
    />
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
