import React from 'react';
import Link from './Link';

interface IPHPFunctionProps {
  namespace?: string;
  label?: string;
  fn: string;
}

export const PHPNet: React.FC<IPHPFunctionProps> = ({
  namespace = 'function',
  label,
  fn,
}) => <Link href={`https://www.php.net/manual/en/${namespace}.${fn.replaceAll('_', '-')}`}>
  {label || <code>{fn}</code>}
</Link>;

export default PHPNet;
