import { VStack, Image, Text, Box, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import Botao from './components/Botao';
import EntradaTexto from './components/EntradaTexto';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Titulo>Faça login em sua conta</Titulo>
      <Box mt={10}>
        <EntradaTexto 
          label='Email' 
          placeholder='Insira seu endereço de email'>
        </EntradaTexto>
        <EntradaTexto 
          label='Senha' 
          placeholder='Insira sua senha'>
        </EntradaTexto>
      </Box>
      <Botao>Entrar</Botao>

      <Link href='https://www.alura.com.br'>
        <Text
          fontSize="md"
          color='blue.800'
          textDecorationLine='underline'
        >
          Esqueceu sua senha?
        </Text>
      </Link>

      <Box w='100%' flexDirection='row' justifyContent='center' mt={10}>
        <Text 
          fontSize="md"
          color='gray.500'
          mr={1}
        >
          Ainda não tem cadastro? 
        </Text>
        <TouchableOpacity>
          <Text
            fontSize="md"
            color='blue.500'
            fontWeight='bold'
          >
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}