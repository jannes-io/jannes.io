import React, { PropsWithChildren } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Typography,
} from '@mui/material';
import Snippet from './Snippet';

interface IExerciseProps {
  title: React.ReactNode;
  hints?: string[];
  language?: string;
  codeSolution?: string;
}

export const Exercise: React.FC<PropsWithChildren<IExerciseProps>> = ({
  title,
  hints,
  children,
  language,
  codeSolution,
}) => <Box mt={2}>
  <Alert>
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
        {children}
      </AccordionDetails>
    </Accordion>}
    {codeSolution && language && <Accordion>
      <AccordionSummary>Example solution</AccordionSummary>
      <AccordionDetails>
        <Snippet language={language} code={codeSolution} />
      </AccordionDetails>
    </Accordion>}
  </Alert>
</Box>;

export default Exercise;
