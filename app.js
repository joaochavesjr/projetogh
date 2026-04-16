// Aplicação simples para demonstrar CI/CD

function saudacao(nome) {

    if (!nome || nome.trim() === '') {

        throw new Error('Nome não pode estar vazio');

    }

    return `Olá, ${nome}! Bem-vindo ao nosso sistema CI/CD!`;

}

function calcular(a, b, operacao) {

    switch(operacao) {

        case 'soma':

            return a + b;

        case 'subtracao':

            return a - b;

        case 'multiplicacao':

            return a * b;

        case 'divisao':

            if (b === 0) throw new Error('Divisão por zero não é permitida');

            return a / b;

        default:

            throw new Error('Operação não suportada');

    }

}

// Exportar funções para testes (em ambiente Node.js)

if (typeof module !== 'undefined' && module.exports) {

    module.exports = { saudacao, calcular };

}

console.log('Aplicação carregada com sucesso!');

----------------
joaochavesjunior@jrmacmini Downloads % cat SISANO2C5B1S7A2MATAPOIOALUNO2.txt 
Criando o arquivo de workflow
Conteúdo do arquivo:

name: Pipeline de CI/CD - Meu Primeiro Robô

# Quando este workflow deve ser executado?

on:

  push:

    branches: [ main ]

  pull_request:

    branches: [ main ]

# Definindo os trabalhos (jobs) que serão executados

jobs:

  # Job 1: Verificações básicas

  verificacoes-basicas:

    runs-on: ubuntu-latest

    steps:

    - name: 1. Baixando o código do repositório

      uses: actions/checkout@v4      

    - name: 2. Verificando estrutura do projeto

      run: |

        echo "Listando arquivos do projeto:"

        ls -la

        echo ""

        echo "Verificando se arquivos essenciais existem:"

        if [ -f "app.js" ]; then

          echo "app.js encontrado"

        else

          echo "app.js não encontrado"

          exit 1

        fi

    - name: 3. Configurando Node.js

      uses: actions/setup-node@v4

      with:

        node-version: '18'

    - name: 4. Executando a aplicação

      run: |

        echo "Iniciando a aplicação..."

        node app.js

        echo "Aplicação executada com sucesso!"        

    - name: 5. Mensagem de sucesso

      run: |

        echo "Parabéns! Seu primeiro pipeline de CI está funcionando!"

        echo "Estatísticas da execução:"

        echo "   - Repositório: ${{ github.repository }}"

        echo "   - Branch: ${{ github.ref_name }}"

        echo "   - Commit: ${{ github.sha }}"

        echo "   - Autor: ${{ github.actor }}"
----------------
joaochavesjunior@jrmacmini Downloads % ls -lrt
total 52424
-rw-r--r--@ 1 joaochavesjunior  staff    884095 Apr 14 14:20 art002e009288orig.jpg
-rw-r--r--@ 1 joaochavesjunior  staff     75677 Apr 14 14:21 art002e009301~large.jpg
-rw-r--r--@ 1 joaochavesjunior  staff    373350 Apr 14 14:21 art002e009289~large.jpg
-rw-r--r--@ 1 joaochavesjunior  staff  25490403 Apr 15 14:02 rg.png
-rw-r--r--@ 1 joaochavesjunior  staff      1026 Apr 16 15:09 SISANO2C5B1S7A2MATAPOIOALUNO1.txt
-rw-r--r--@ 1 joaochavesjunior  staff      1606 Apr 16 15:09 SISANO2C5B1S7A2MATAPOIOALUNO2.txt
joaochavesjunior@jrmacmini Downloads % less SISANO2C5B1S7A2MATAPOIOALUNO1.txt 
joaochavesjunior@jrmacmini Downloads % less SISANO2C5B1S7A2MATAPOIOALUNO1.txt 

        case 'multiplicacao':

            return a * b;

        case 'divisao':

            if (b === 0) throw new Error('Divisão por zero não é permitida');

            return a / b;

        default:

            throw new Error('Operação não suportada');

    }

}

// Exportar funções para testes (em ambiente Node.js)

if (typeof module !== 'undefined' && module.exports) {

    module.exports = { saudacao, calcular };

}

console.log('Aplicação carregada com sucesso!');
