import { Text, FormControl, Input } from 'native-base';

export default function EntradaTexto({ ...children }) {
  return (
    <FormControl mt={2}>
      <FormControl.Label>
      <Text
        fontSize="md"
        fontWeight="bold" 
        color="gray.800"
      >
        {children.label}
      </Text>
      </FormControl.Label>
      <Input 
        placeholder={children.placeholder}
        size='lg'
        w='100%'
        borderRadius='lg'
        bgColor='gray.100'
        shadow={3}
      />
    </FormControl>
  )
}