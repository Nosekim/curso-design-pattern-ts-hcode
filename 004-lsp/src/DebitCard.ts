import NubankCard from './NubankCard';

export default class CreditCard extends NubankCard {
  validate(): void {
    console.log('Verificando o saldo.....');
  }
  collectPayment(): void {
    console.log('Pagamento realizado');
  }
}
