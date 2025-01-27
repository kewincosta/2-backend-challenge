# 🚀 Backend challenge

Bem-vindo(a) ao desafio Backend!

O objetivo deste desafio é avaliar suas habilidades de programação.
Quando sua solução estiver pronta, basta responder o e-mail que recebeu com o link do seu repo aqui no Github!
Em seguida, enviaremos o feedback e as instruções dos próximos passos!

Caso tenha alguma dúvida, nós estamos disponíveis no email *recrutamento@b2rise.consulting*.
Bom desafio!

---

## 📚 Testes Práticos

Os testes estão organizados em três categorias principais: **TypeScript**, **SQL** e **Clean Code**.

---

### **1. Testes de TypeScript**

#### **1.1 Manipulação de Tipos e Generics**
Implemente uma função que recebe um array de objetos e retorna um novo array contendo apenas os valores de uma chave específica. Utilize Generics para garantir a tipagem.

**Exemplo:**
```typescript
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const result = extractValues(data, 'name');
```
**Saída esperada:** `['Alice', 'Bob']`

---

#### **1.2 Validação e Tipagem com Union Types**
Implemente uma função que recebe uma string representando uma operação matemática (`add`, `subtract`, `multiply`, `divide`) e dois números. A função deve realizar a operação correspondente e lançar um erro caso a operação não seja suportada.

**Exemplo:**
```typescript
calculate('add', 10, 5); // 15
calculate('divide', 10, 0); // Error: Division by zero
```

---

#### **1.3 Imutabilidade e Manipulação de Arrays**
Implemente uma função que recebe uma lista de números e retorna uma nova lista onde todos os números negativos são transformados em positivos, sem modificar a lista original.

**Exemplo:**
```typescript
const numbers = [-1, 2, -3, 4];
const result = makeAllPositive(numbers);
```
**Saída esperada:** `[1, 2, 3, 4]`

---

### **2. Testes de SQL**

#### **2.1 Consulta com Agregação**
Dada a tabela `sales` com as colunas:
- `id` (INT)
- `product` (VARCHAR)
- `quantity` (INT)
- `price` (DECIMAL)

Escreva uma query para calcular a receita total (`quantity * price`) para cada produto, ordenando por receita total em ordem decrescente.

---

#### **2.2 Identificar Registros Duplicados**
Dada a tabela `users` com as colunas:
- `id` (INT)
- `email` (VARCHAR)
- `name` (VARCHAR)

Escreva uma query para identificar os emails que estão duplicados, juntamente com o número de ocorrências.

---

#### **2.3 Atualizar Dados Condicionalmente**
Dada a tabela `employees` com as colunas:
- `id` (INT)
- `name` (VARCHAR)
- `salary` (DECIMAL)

Escreva uma query para aumentar o salário em 10% para os empregados que ganham menos de 5000, mas não altere os outros.

---

### **3. Testes de Clean Code**

#### **3.1 Refatoração de Código**
Dado o seguinte código, identifique e implemente as melhorias necessárias seguindo princípios de **Clean Code**:

```typescript
function processItems(items: any[]) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].price > 100) {
      console.log(items[i].name + ' is expensive');
    }
  }
}
```

---

#### **3.2 Refatoração de Lógica Complexa**
Dado o código abaixo, refatore para melhorar a legibilidade e modularidade:

```typescript
function calculateDiscount(price: number, isPremium: boolean): number {
  if (isPremium) {
    if (price > 100) {
      return price * 0.8;
    } else {
      return price * 0.9;
    }
  } else {
    if (price > 100) {
      return price * 0.9;
    } else {
      return price;
    }
  }
}
```

---

#### **3.3 Melhorando Nomes e Estrutura**
Refatore o código abaixo para melhorar a clareza dos nomes e a modularidade:

```typescript
function c(x: number[]): number[] {
  const r = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      r.push(x[i] * 2);
    }
  }
  return r;
}
