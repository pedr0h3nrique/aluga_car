# API AlugaCar - Aluguel de Carros

## O que o usuário pode fazer?

  - Cadastrar um cliente
  - Editar um cliente
  - Listar todos os clientes
  - Obter informações de um cliente
  - Deletar um cliente
  - Cadastrar um carro
  - Editar um carro
  - Listar todos os carros
  - Obter informações de um carro
  - Deletar um carro

### POST - Cadastro

#### Objetivos Gerais:
  - Conferir se o CPF já foi cadastrado;
  - Cadastrar um cliente no banco de dados;
  
#### Dados enviados:
  - id
  - name
  - cpf
  - car
  - date_of_birth (dd/MM/yyyy)

#### Dados retornados:
  - Sucesso/erro

### PUT - Editar cliente

#### Objetivos Gerais:
  - Buscar cliente;
  - Exigir pelo menos 1 campo para atualizar;
  - Verificar se já existe outro cliente com o mesmo CPF;
  - Editar informações e enviar para o banco de dados;
  
#### Dados enviados:
  - name
  - cpf
  - car
  - date_of_birth (dd/MM/yyyy)

#### Dados retornados:
  - Sucesso/erro

### GET - Listar cliente

#### Objetivos Gerais:
  - Buscar cliente;
  - Retornar todos os clientes cadastrados;
    
#### Dados enviados:
  - Solicitação do banco de dados "clients"

#### Dados retornados:
  - Sucesso/erro
  - Lista de clientes
  
### GET - Obter cliente

#### Objetivos Gerais:
  - Buscar cliente pelo id informado nos parâmetros;
  - Verificar se o cliente foi encontrado;
  - Retornar dados do cliente;
  
#### Dados enviado:
  - id
  
#### Dados retornados:
  - Sucesso/erro
  - Dados do cliente

### DELETE - Excluir cliente

#### Objetivos Gerais:
  - Buscar cliente pelo id informado nos parâmtros;
  - Excluir cliente do banco de dados;
  
#### Dados enviados:
  - id
  
#### Dados retornados:
  - Sucesso/erro
 
### POST - Cadastrar carro

#### Objetivos Gerais:
  - Cadastrar o carro no banco de dados;
  
#### Dados enviados:
  - id
  - brand
  - model
  
#### Dados retornados:
  - Sucesso/erro

### PUT - Editar carro

#### Objetivos Gerais:
  - Buscar carro;
  - Exigir pelo menos 1 campo para atualizar;
  - Editar informações e enviar para o banco de dados;

#### Dados enviados:
  - brand
  - model
  
#### Dados retornados:
  - Sucesso/erro

### GET - Listar carro

#### Objetivos Gerais:
  - Buscar carros;
  - Retornar todos os carros cadastrados;
    
#### Dados enviados:
  - Solicitação do banco de dados "cars" através dos parâmetros;

#### Dados retornados:
  - Sucesso/erro
  - Lista de carros
 
### GET - Obter carro

#### Objetivos Gerais:
  - Buscar carro pelo id informado nos parâmetros;
  - Verificar se o carro foi encontrado;
  - Retornar dados do carro;
  
#### Dados enviado:
  - id
  
#### Dados retornados:
  - Sucesso/erro
  - Dados do carro

### DELETE - Excluir carro

#### Objetivos Gerais:
  - Buscar carro através do id informado nos parâmetros;
  - Deletar carro do banco de dados;
  
#### Dados enviados:
  - id
  
#### Dados retornados:
  - Sucesso/erro
