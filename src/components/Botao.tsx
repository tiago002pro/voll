import { Text, Button, ITagProps } from 'native-base';
import { ReactNode } from 'react';

interface BotaoProps extends ITagProps {
  children: ReactNode
}

export default function Botao({ children, ...rest }: BotaoProps) {
  return (
    <Button
      w='100%'
      bg='blue.800'
      mt={10}
      mb={2}
      borderRadius="lg"
      {...rest}
    >
      <Text
        fontSize="md"
        fontWeight='bold'
        color='white'
      >
        {children}
      </Text>
    </Button>
  )
}