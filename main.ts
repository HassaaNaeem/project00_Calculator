




import inquirer  from 'inquirer';

let runAgain = 1
for(let i = 0; i<runAgain; i++){
    let user = await inquirer.prompt([
        {
            type : "number",
            name : "FirstNumber",
            message : "Enter First Number: "
        },
        {
            type : "list",
            name : "Operator",
            message : "Select Operator (+, -, *, /, **) ",
            choices : ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)', 'Exponent (**)']
        },
        {
            type : "number",
            name : "SecondNumber",
            message : "Enter Second Number: "
        },
    ])
    
    if (user.Operator == 'Addition (+)'){
        console.log(`The result of  ${user.FirstNumber} + ${user.SecondNumber} = ${user.FirstNumber + user.SecondNumber}`)
    }
    else if (user.Operator == 'Subtraction (-)'){
        console.log(`The result of  ${user.FirstNumber} - ${user.SecondNumber} = ${user.FirstNumber - user.SecondNumber}`)
    }
    else if (user.Operator == 'Multiplication (*)'){
        console.log(`The result of  ${user.FirstNumber} * ${user.SecondNumber} = ${user.FirstNumber * user.SecondNumber}`)
    }
    else if (user.Operator == 'Division (/)'){
        console.log(`The result of  ${user.FirstNumber} / ${user.SecondNumber} = ${user.FirstNumber / user.SecondNumber}`)
    }
    else if (user.Operator == 'Exponent (**)'){
        console.log(`The result of  ${user.FirstNumber} ** ${user.SecondNumber} = ${user.FirstNumber ** user.SecondNumber}`)
    }
    else{
        console.log("You have entered invalid number");
    }
    
    let question = await inquirer.prompt({
        type : "list",
        name : "again", 
        message : "Do you want to calculate again?",
        choices : ['Yes', 'No']
    })
    if(question.again == 'Yes'){
        runAgain += 1
    }else{
        break
    }
}