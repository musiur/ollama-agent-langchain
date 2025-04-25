/* eslint-disable */

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import CopyAnything from "@/components/common/copy-anything";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={cn("markdown-renderer", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl pt-8 pb-2 font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl pt-6 pb-2 font-bold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl pt-4 pb-2 font-bold" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg py-2 font-bold" {...props} />
          ),
          p: ({ node, ...props }) => <p className="leading-7 py-1" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-8" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-8" {...props} />
          ),
          li: ({ node, ...props }) => <li className="" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");

            return !inline && match ? (
              <div className="rounded-md overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200 flex items-center justify-between">
                  {match[1]}
                  <CopyAnything text={codeString} />
                </div>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : inline ? (
              <code
                className="inline-block rounded bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-800"
                {...props}
              >
                {children}
              </code>
            ) : (
              <div className="inline-block overflow-auto rounded-md bg-gray-100 dark:bg-gray-800 px-2">
                <code className="text-sm" {...props}>
                  {children}
                </code>
              </div>
            );
          },
          table: ({ node, ...props }) => {
            return (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse" {...props} />
              </div>
            );
          },
          thead: ({ node, ...props }) => {
            return (
              <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
            );
          },
          tbody: ({ node, ...props }) => {
            return <tbody {...props} />;
          },
          tr: ({ node, ...props }) => {
            return <tr className="border-b border-gray-200" {...props} />;
          },
          th: ({ node, ...props }) => {
            return (
              <th
                className="border border-gray-300 px-4 py-2 text-left font-semibold"
                {...props}
              />
            );
          },
          td: ({ node, ...props }) => {
            return (
              <td className="border border-gray-300 px-4 py-2" {...props} />
            );
          },
          hr: ({ node, ...props }) => (
            <hr className="my-6 border-gray-300" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="my-4 max-w-full rounded-md" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
