// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% 
// Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

    let salarioInicial = parseFloat(prompt("Entre com o salário: "));
    let aumento=0;
    let porcentualAumento="0%";

    if (salarioInicial<=280){
        aumento=salarioInicial*.2;
        novoSalario=salarioInicial*1.2;
        porcentualAumento="20%";
    }else if (salarioInicial>280 && salarioInicial<=700){
        aumento=salarioInicial*.15;
        novoSalario=salarioInicial*1.15;
        porcentualAumento="15%";
    }else if (salarioInicial>700 && salarioInicial<=1500){
        aumento=salarioInicial*.1;
        novoSalario=salarioInicial*1.1;
        porcentualAumento="10%";
    }else if (salarioInicial>1500){
        aumento=salarioInicial*.05;
        novoSalario=salarioInicial*1.05;
        porcentualAumento="5%";
    }
    document.write("O salário antes do reajuste era de : R$"+salarioInicial.toFixed(2)+ "<br> Devido ao salário, o aumento será de: "+porcentualAumento+"<br> O valor de aumento foi de: R$ "+aumento.toFixed(2)+ "<br> O novo salário é de: R$ "+novoSalario.toFixed(2) );
    