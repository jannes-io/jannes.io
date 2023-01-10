import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import { styled } from '@mui/material/styles';

const FileName = styled('pre')(({ theme }) => ({
  position: 'relative',
  zIndex: 999,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: theme.spacing(1),
  background: 'rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(-1),
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: `solid 1px ${theme.palette.divider}`,
  color: theme.palette.grey.A400,
}));

interface ISnippetProps {
  language: string;
  code: string;
  file?: string;
}

export const Snippet: React.FC<ISnippetProps> = ({ language, code, file }) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    const html = Prism.highlight(code.trim(), Prism.languages[language], language);
    setHighlighted(html);
  }, [language, code, setHighlighted]);

  return <>
    {file && <FileName>{file}</FileName>}
    <pre>
    <code
      className={`language-${language}`}
      dangerouslySetInnerHTML={{ __html: highlighted || '' }}
    />
  </pre>
  </>;
};

export default Snippet;
