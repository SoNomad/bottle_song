const generateSingleStanza = number => {
    
    //переменная и его спряжения для первой строки
    let bottle = 'бутылок'    //значение по умолчанию

    if (number === 1){   //если количество равно 1
        bottle = 'бутылка' }  //пишется "бутылка"
    else if (number % 10 >= 2 && number % 10 <= 4){  //если количество равно от 2 до 4
        bottle = 'бутылки'}                          //пишется "бутылки"

        
    //переменная и его спряжения для второй строки
    let bottleLeft = 'бутылок'  //значение по умолчанию

    if ((number-1) === 1){   //если количество равно 1 
        bottleLeft = 'бутылка' }  //пишется "бутылка"
    else if ((number-1) % 10 >= 2 && (number-1) % 10 <= 4){ //если количество равно от 2 до 4
        bottleLeft = 'бутылки'}                             //пишется "бутылки"
    

    console.log(`${number} ${bottle} пива на стене, ${number} ${bottle} пива!`)
    console.log(`Возьми одну, пусти по кругу, ${number-1} ${bottleLeft} пива на стене!`)
}

const generateSongText = number => {
    for (let i = number; i > 0; i--) {
        generateSingleStanza(i)
    }
}

generateSongText(11)