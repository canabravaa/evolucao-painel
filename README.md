# Evolução · Painel do Ciclo 1

Painel pessoal do Projeto Evolução (ciclo de 12 semanas: 29/09 a 20/12/2026). A página fica no GitHub Pages e os dados no Firebase (Firestore), acessíveis só com login Google da conta autorizada.

## Estrutura
- `index.html`: o painel (abas Hoje, Registrar, Foco, Ciclo, Hábitos, Métodos)
- `firebase-config.js`: configuração pública do app web do Firebase + e-mail autorizado
- `firestore.rules`: regras de segurança (cole no console do Firebase)

## Dados no Firestore
`users/{uid}/dias/{AAAA-MM-DD}`: hábitos (`y`/`n`/`p`), Big 3, métricas do celular, HRV
`users/{uid}/foco/{id}`: sessões do timer (previsto × real)
`users/{uid}/roda/ciclo1`: Roda da Vida

O código é público. Os dados não: sem login da conta autorizada, as regras bloqueiam qualquer leitura.
