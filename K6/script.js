import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 100 // 100 usuários simultâneos
    duration: '1m', // Executa por 1 minuto
};

export default function () {
  let url = 'http://127.0.0.1:5000/usuarios' // 

    let res = http.get(url);

    check(res, {
        'Status 200 - OK': (r) => r.status === 200,
        'Tempo de resposta < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // Pequeno delay entre requisições
}


export function handleSummary(data) {
    return {
      "report/reportK6.html": htmlReport(data),
    };
  }