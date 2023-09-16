import { Text, ITagProps } from "native-base";
import { ReactNode } from 'react';

interface TituloProps extends ITagProps {
  children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps) {
  return (
    <Text 
      fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt={20}
      {...rest}
    >
      {children}
    </Text>
  )
}