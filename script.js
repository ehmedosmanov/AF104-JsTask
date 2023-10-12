//! Task 1
let sumResult = 0 //camelCase

for (let i = 0; i < 100; i++) {
  if (i % 15 === 0) {
    //Riyazi qısaltma həm 3 həmdə 5 ə bölünür
    sumResult += i
  }
}
console.log(sumResult)

//! Task 2

let number = 8
let isSquared = false //2 nin quvvetidir yada deyil-i yoxlamaq ucun boolean false deyer saxladim
//2 başlayaraq verilən number-ə qədər davam edir 2 dən 16 qədər i *= 2 yəni bizə kvadratları verir 2 = 2 * 2, i = 4 oldu, 4 = 4 * 2, i = 8... bele davam edir ve yoxlayairiq i === number beraber olduqda isSquared true olur
for (let i = 2; i <= number; i *= 2) {
  if (i === number) {
    isSquared = true
    //break yazmisdim sonra gordum menasi yoxdur cunki onsuz number-e catanda dayanır
  }
}

if (isSquared) {
  console.log('2-nin qüvvətidir')
} else {
  console.log('2-nin qüvvəti deyil')
}

//! Task 3

let num = 3
let isSimpleNum = false

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isSimpleNum = true
    break
  }
}
if (isSimpleNum) {
  console.log('Mürəkkəb ədəddir')
} else {
  console.log('Sadə ədəddir')
}

//! Task 4

let getMonth = prompt('Ay-ı qeyd edin: ')

switch (getMonth) {
  case 'dekabr':
  case 'yanvar':
  case 'fevral':
    alert('Qış fəsli')
    break
  case 'mart':
  case 'aprel':
  case 'may':
    alert('Yaz fəsli')
    break
  case 'iyun':
  case 'iyul':
  case 'avqust':
    alert('Yay fəsli')
    break
  case 'sentyabr':
  case 'oktyrabr':
  case 'noyabr':
    alert('Payız fəsli')
    break

  default:
    alert('Zəhmət olmasa düzgün Ay qeyd eləyin')
    break
}
