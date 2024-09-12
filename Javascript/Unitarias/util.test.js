const puppeteer =  require('puppeteer');
const {generateAge, generateNumber, generateMail, checkAndGenerateAge, checkAndGeneratePhone, checkAndGenerateMail} = require('./util');

test('Deberia mostrar el nombre y edad',()=>{
  const text = generateAge('Felipe',23);
  expect(text).toBe('Felipe (23 años)');
});

test('Deberia mostrar el nombre y el numero de telefono',()=>{
  const text =  generateNumber('Felipe',912867083);
  expect(text).toBe('Felipe (912867083, móbil)')
});

test('Deberia mostrar el nombre y el email',()=>{
  const text = generateMail('Felipe','naru1421floyd@gmail.com');
  expect(text).toBe('Felipe (Tu correo es: naru1421floyd@gmail.com)')
});

/*
Pruebas de integracion
*/
test('Debera generar una salida de texto valido para la edad',()=>{
  const text = checkAndGenerateAge('Marcela',38);
  expect(text).toBe('Marcela (38 años)')
});

test('Debera generar una salida de texto valido para el telefono',()=>{
  const text = checkAndGeneratePhone('Marcela',912867083);
  expect(text).toBe('Marcela (912867083, móbil)')
});

test('Debera generar una salida de texto valido para el correo',()=>{
  const text = checkAndGenerateMail('Marcela','naru1421floyd@gmail.com');
  expect(text).toBe('Marcela (Tu correo es: naru1421floyd@gmail.com)')
});

/*
Pruebas e2e
*/

test('Dando unos clicks', async ()=>{
  const explore = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });

  const page = await explore.newPage();
  await page.goto('/home/nimer/curso-pruebas/Javascript/Unitarias/index.html');

  await page.click('input#name1');
  await page.type('input#name1','Miranda');

  await page.click('input#age');
  await page.type('input#age','25');

  await page.click('#btnAddAge');
}, 10000);