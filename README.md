# 📱 Calculadora de IMC

Aplicativo mobile para cálculo e classificação do **Índice de Massa Corporal (IMC)**, desenvolvido como atividade prática do curso **"Programação para dispositivos móveis (básico)"** pelo **IFMG (Instituto Federal de Minas Gerais)**.

---

## 📌 Sobre o Projeto

O objetivo do aplicativo é colocar em prática conceitos fundamentais de desenvolvimento mobile com **React Native** e **Expo**, incluindo:
- Manipulação de estados com hooks (`useState`, `useEffect`)
- Captura e validação de dados de entrada do usuário
- Renderização condicional de componentes e estilos dinâmicos
- Estruturação de layouts responsivos com `StyleSheet` e `SafeAreaView`

---

## ✨ Funcionalidades

- [x] **Cálculo do IMC**: Calcula automaticamente a relação peso/altura² com arredondamento para duas casas decimais.
- [x] **Classificação do IMC**: Apresenta a faixa correspondente de acordo com as diretrizes da OMS:
  - *Abaixo do peso* (< 18.5)
  - *Peso ideal* (18.5 – 24.9)
  - *Sobrepeso* (25.0 – 29.9)
  - *Obesidade classe I* (30.0 – 34.9)
  - *Obesidade classe II* (35.0 – 39.9)
  - *Obesidade classe III* (≥ 40.0)
- [x] **Controle de Estado do Botão**: O botão de cálculo permanece desabilitado até que ambos os campos (peso e altura) sejam preenchidos.
- [x] **Limpeza de Dados**: Alternância dinâmica para um botão "Limpar", permitindo resetar os campos e o resultado para uma nova consulta.

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)** (SDK 57)
- **[Expo Router](https://docs.expo.dev/router/introduction/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[@expo/vector-icons](https://icons.expo.fyi/)** (FontAwesome5 & MaterialCommunityIcons)

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Aplicativo **Expo Go** instalado no smartphone (Android/iOS) ou um emulador configurado.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone <url-do-seu-repositorio>
   cd calculadora-imc
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

4. **Abra o aplicativo:**
   - Escaneie o QR Code exibido no terminal utilizando o aplicativo **Expo Go** no Android ou a câmera no iOS.
   - Ou pressione `a` para rodar no emulador Android / `w` para abrir no navegador.

---

## 🎓 Instituição

Projeto desenvolvido durante o curso:
- **Curso:** Programação para dispositivos móveis (básico)
- **Instituição:** Instituto Federal de Minas Gerais (IFMG)
