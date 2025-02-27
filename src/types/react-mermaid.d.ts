declare module 'react-mermaid' {
  import { FC } from 'react';
  
  interface MermaidProps {
    name: string;
    children: string;
  }

  const Mermaid: FC<MermaidProps>;
  export default Mermaid;
} 