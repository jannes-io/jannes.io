import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

interface ISnippetProps {
  language: string;
  code: string;
}

export const Snippet: React.FC<ISnippetProps> = ({ language, code }) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    const html = Prism.highlight(code.trim(), Prism.languages[language], language);
    setHighlighted(html);
  }, [language, code, setHighlighted]);

  return <pre>
    <code
      className={`language-${language}`}
      dangerouslySetInnerHTML={{ __html: highlighted || '' }}
    />
  </pre>;
};

export default Snippet;
