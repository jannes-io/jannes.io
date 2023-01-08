import React, { PropsWithChildren } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle, Typography,
} from '@mui/material';

interface IExerciseProps {
  title: React.ReactNode;
  hints?: string[];
  language?: string;
  codeSolution?: boolean
}

export const Exercise: React.FC<PropsWithChildren<IExerciseProps>> = ({
  title,
  hints,
  language,
  codeSolution,
  children,
}) => <Alert
  severity="info"
>
  <AlertTitle>Exercise</AlertTitle>
  <Typography mb={2}>
    {title}
  </Typography>
  {hints && hints.map((hint, i) => <Accordion key={hint}>
    <AccordionSummary>Hint #{i + 1}</AccordionSummary>
    <AccordionDetails>{hint}</AccordionDetails>
  </Accordion>)}
  {children && <Accordion>
    <AccordionSummary>Example solution</AccordionSummary>
    <AccordionDetails>
      {codeSolution
        ? <pre>
          <code className={language ? `language-${language}` : ''}>
            {children}
          </code>
        </pre>
        : children}
    </AccordionDetails>
  </Accordion>}
</Alert>;

export default Exercise;
