import React from 'react';
import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required(),
})

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(signInFormSchema) });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (formValues) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (!!errors) {
      router.push('/dashboard');
    }

  }

  return (
   <Flex w="100vw" h="100vh" align="center" justify="center">
     <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" {...register('email')} error={errors.email}/>
          <Input name="password" label="Senha" type="password" {...register('password')} error={errors.password}/>
        </Stack>
      
      <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
     </Flex>
   </Flex>
  )
}
