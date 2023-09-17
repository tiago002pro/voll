import { Text, Button, ITagProps } from 'native-base';
import { ReactNode } from 'react';

interface ButtonProps extends ITagProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export default function Botao({ children, autoSize = false, color, ...rest }: ButtonProps) {
  return (
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color || 'blue.800'}
      mt={10}
      mb={2}
      borderRadius="lg"
      _text={{color: 'white'}}
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