import './util/module-alias';

import Client from '@src/Client';
import Notify from '@src/Notify';

const client = new Client('email@mail.com');
const notificacao = new Notify(client);

notificacao.sendEmail();
