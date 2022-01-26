//Renvoie le nombre (compte) de voyelles dans la chaîne donnée.
function getCount(str) 
{
    var vowelsCount = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i) === 'i' || str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'u' || str.charAt(i) === 'o') 
        {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

//Créez une fonction qui prend un entier comme argument et renvoie "Even" pour les nombres pairs ou "Odd" pour les nombres impairs.
function even_or_odd(number) 
{
    parity = "Odd";
    number = Math.abs(number);

    if(number % 2 === 0) 
    {
        parity = "Even"
    }

    return parity;
}

//On va vous donner un mot. Votre travail consiste à renvoyer le caractère du milieu du mot. Si la longueur du mot est impaire, renvoie le caractère du milieu. Si la longueur du mot est paire, renvoie les 2 caractères du milieu.
function getMiddle(s)
{
    let middle = s.charAt(s.length / 2);

    if(s.length % 2 === 0)
    {
        middle = s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
    }

    return middle;
}
   
//Très simple, étant donné un entier ou un nombre à virgule flottante, trouver son opposé.
function opposite(number) 
{
   return (number < 0 || number > 0) ? -number : 0;
}

//accum
function accum(s) 
{
    let i = 0;
    s = s.toLowerCase();
    let result = "";

    while(i < s.length)
    {
        if(i === s.length-1)
        {
            result += s.charAt(i).toUpperCase()+ s.charAt(i).repeat(i);
            break;
        }
        result += s.charAt(i).toUpperCase()+ s.charAt(i).repeat(i) + "-" ;
       
        ++i;
    }

    return result;
}

//Étant donné un nombre entier, déterminez si c'est un nombre carré :

var isSquare = function(n)
{
    if(n >= 0)
    {
        for(let i = 0; i <= Math.sqrt(n); i++ )
        {
            if((i*i) === n) 
            {
                return true;
                break;
            }
        }
    }
    return false; 
  }

//écrire une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec toutes les voyelles supprimées.
function disemvowel(str) 
{
    str = str.replace("\n", "\\n");
    str = str.replace("i", "");

    for(let index = 0; index < str.length; index++)
    {
        if(str.charAt(index).toLowerCase() === 'a' || str.charAt(index).toLowerCase() === 'e' || str.charAt(index).toLowerCase() === 'u' || str.charAt(index).toLowerCase() === 'i' || str.charAt(index).toLowerCase() === 'o') 
        {
        
          str = str.split(str.charAt(index)).join("");
        }
    }
    
    return str;
  }

  function highAndLow(numbers)
  {
        var arr = numbers.split(' ');
        let min = max = Number(arr[0]);

        for(let i = 1; i < arr.length; i++)
        {
            if(min > Number(arr[i])) 
            { 
                min = Number(arr[i]);
            }
        }

        for(let i = 1; i < arr.length; i++)
        {
            if(max < Number(arr[i])) 
            {
                max = Number(arr[i]);
            }
        }
        return max + " "+ min;
  }

function XO(str) 
{
        let cptX = cpt0 = 0;
        str = str.toLowerCase();
        for(let i = 0; i < str.length; i++)
        {
            if((str).charAt(i) === 'x') cptX++;

            if(str.charAt(i) === 'o') cpt0++;
        }

        return (cptX === cpt0) ? true : false;
}

function squareDigits(num){
    let result = "";
    num = num.toString();

    for(let i = 0; i < num.length; i++)
    {
        result += num[i] * num[i];
    }

    return result;
  }

//Renvoie la longueur du ou des mots les plus court
function findShort(s)
{
    s = s.split(" ");
    let shortest = s[0];
    for(let i = 0; i < s.length; i++)
    {
        if(shortest.length > s[i].length)
        {
            shortest = s[i];
        }
    }

   return shortest.length;
}

function DNAStrand(dna)
{
    dna = dna.toUpperCase();
    let result = "";
    for(let i = 0; i < dna.length; i++)
    {
        switch (dna[i]) {
            case "A":
                result += "T";
                break;
            case "T":
                result += "A";
                break;
            case "C":
                result += "G";
                break;
            case "G":
                result += "C";
                break;
            default:
                break;
        }
    }
    return result;
}

// créer une fonction qui peut prendre n'importe quel entier non négatif comme argument et le renvoyer avec ses chiffres dans l'ordre décroissant.
function descendingOrder(n)
{

    let myFunc = num => Number(num);
    let tab = Array.from(String(n), myFunc);
    const sortDesc = (a, b) => b - a;
    tab.sort(sortDesc);
    let result = "";
    for(let i = 0; i < tab.length; i++)
    {
        result += tab[i];
    }
    return result;
}

//renvoyez la somme de tous les nombres positifs.
function positiveSum(arr) 
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            sum += arr[i];
        }
    }

    return sum;
}

function isIsogram(str)
{
    isIso = true;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i+1; j < str.length; j++)
        {
            if(str[i] === str[j])
            {
                isIso = false;
                break;
               
            }
        }
    }

    return isIso;
}

function filter_list(l) 
{
    let arrayFilter = [];

    for(let i = 0; i < l.length; i++)
    {
        if(Number.isInteger(l[i]))
        {
            arrayFilter.push(l[i]);
        }
    }
    return arrayFilter;
}

//trouver le plus petit entier.
class SmallestIntegerFinder {
    findSmallestInt(args) 
    {
        return Math.min(...args);
    }
}

function sumTwoSmallestNumbers(numbers) 
{
    let min1 = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min1), 1);
    let min2 = Math.min(...numbers);

    return min1+min2;
}

function nbYear(p0, percent, aug, p) 
{
    let count = 0;
    percent = percent / 100;
    for(; p0 < p; p0+= (p0*percent)+aug)
    {
        count++;
    }

    return count;
}

function repeatStr (n, s) 
{
    return s.repeat(n);
}

//Implémentez une fonction qui accepte 3 valeurs entières a, b, c. La fonction doit renvoyer true si un triangle peut être construit avec des côtés de longueur donnée et false dans tous les autres cas.
function isTriangle(a,b,c)
{
   isTri = false;
   if(a > 0 && b > 0 && c > 0)
   {
       if(a+b > c && a+c > b && b+c > a) {
           isTri = true;
       }
   }
   return isTri;
}

//Complétez la findNextSquareméthode qui trouve le carré parfait entier suivant celui passé en paramètre. Rappelons qu'un carré parfait entier est un entier n tel que sqrt(n) est aussi un entier.
function findNextSquare(sq) 
{
    let result;
    if(Math.sqrt(sq)%1 ===0)
    {
        result = Math.sqrt(sq) + 1;
    } else {
        return -1;
    }

    return Math.pow(result,2);
}

//écrire une fonction maskify, qui transforme tous les caractères sauf les quatre derniers en '#'.
function maskify(cc) 
{
    let mask = "";
    for(let i = 0; i < cc.length - 4; i++)
    {
        mask += "#";
    }
    return mask + cc.substr(-4);
}

//Calculez la somme des nombres de la n ième ligne de ce triangle (en commençant à l'index 1)
function rowSumOddNumbers(n) 
{
    return Math.pow(n,3);
}

//Créez une fonction nommée divisors/ Divisorsqui prend un entier n > 1et renvoie un tableau avec tous les diviseurs de l'entier (sauf 1 et le nombre lui-même), du plus petit au plus grand. Si le nombre est premier, retournez la chaîne '(entier) est premier
function divisors(integer) 
{
    let result = [];
    for(let i = 2; i < integer; i++)
    {
        if(integer % i === 0) result.push(i);
    }

    return result.length > 0 ? result : (integer + " is prime");
};

//Dans cette tâche simple, on vous donne un nombre et vous devez le rendre négatif. Mais peut-être que le nombre est déjà négatif ?
function makeNegative(num) 
{
    return num <= 0 ? num : -num;
}

//créer une fonction qui supprime les premier et dernier caractères d'une chaîne
function removeChar(str)
{
    let result = ''
    for(let i = 1; i < str.length - 1; i++) 
    {
        result += str[i];
    }

    return result;
};

//supprimez les espaces de la chaîne, puis renvoyez la chaîne résultante.
function noSpace(x)
{
    return x.split(' ').join('');
}

//méthode qui prend une valeur booléenne et renvoie une "Yes"chaîne pour true, ou une "No"chaîne pour false.
function boolToWord(bool)
{
    if(bool === true) return 'Yes';
    else return 'No';
}

//fonction capable de transformer un nombre en une chaîne.
function numberToString(num) 
{
    return num.toString()
}

//créer une fonction qui effectue quatre opérations mathématiques de base.
function basicOp(operation, value1, value2)
{
    let result = 0;
    switch(operation)
    {
        case '+':
            result = value1 + value2;
            break;

        case '-':
            result = value1 - value2;
            break;

        case '*':
            result = value1 * value2;
            break;

        case '/':
            result = value1 / value2;
            break;

        default:
            break;
    }
    return result;
}

//fonction qui renvoie la somme des séries suivantes jusqu'au nième terme (paramètre).
function SeriesSum(n)
{
    let result = 0;
    for (let i = 0; i < n; i++) 
    {
        result += 1 / (1+i * 3);
    }
    
    return result.toFixed(2);
}

//retourner le nombre de litres que Nathan boira, arrondi à la plus petite valeur
function litres(time) 
{
    return Math.floor(time * 0.5);
}

//Étant donné une année, renvoie le siècle dans lequel elle se trouve.
function century(year) {
    let century = 0;
    while (year > 0)
    {
      year -= 100;
      century++;
    }

    return century;
  }

//Étant donné un tableau d'entiers, renvoie un nouveau tableau avec chaque valeur doublée.
function maps(x)
{
    return x.map(i => i * 2);
}

//String reverse
function solution(str)
{
    return str.split("").reverse().join("");
}

//Complétez la solution de sorte qu'elle renvoie true si le premier argument (chaîne) passé se termine par le 2ème argument (également une chaîne).
function solution(str, ending)
{
    return str.endsWith(ending);
}

function bonusTime(salary, bonus) 
{
    if(bonus) salary *= 10;

    return "£" +salary;
}

//Écrivez une fonction pour convertir un nom en initiales.
function abbrevName(name)
{
    name = name.split(" ");

    return (name[0].charAt(0) + "."+ name[1].charAt(0)).toUpperCase();
}

//DNA to RNA
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
}

function countSheeps(arrayOfSheeps) 
{
    return arrayOfSheep.filter(item => item === true).length
}

//Étant donné un tableau de uns et de zéros, convertissez la valeur binaire équivalente en entier.
const binaryArrayToNumber = arr => {
    const binary = arr.join("");
    return parseInt(binary, 2);
  };


function findNeedle(haystack) 
{
    const indexOfNeedle = (el) => el === 'needle';

    return "found the needle at position " +haystack.findIndex(indexOfNeedle);
}

//Étant donné un tableau d'entiers, supprimez la plus petite valeur.
function removeSmallest(numbers) 
{
    const indexOfMin = numbers.indexOf(Math.min(...numbers));
    let result = [...numbers];
    result.splice(indexOfMin, 1);

    return result;
}

//Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse.
function digitize(n) 
{
    return String(n).split("").reverse().map(Number);
}

//Étant donné deux nombres et un opérateur arithmétique (le nom de celui-ci, sous forme de chaîne), renvoie le résultat des deux nombres ayant cet opérateur utilisé sur eux.
function arithmetic(a, b, operator)
{
    let result = 0;
    switch (operator) {
        case "add":
            result = a+b;
            break;

        case "subtract":
            result = a-b;
            break;

        case "multiply":
            result = a*b;
            break;

        case "divide":
            result = a/b;
            break;
    
        default:
            break;
    }

    return result;
}

//Créez une classe Ball. Les objets balle doivent accepter un argument pour "type de balle" lorsqu'ils sont instanciés.Si aucun argument n'est donné, les objets ball doivent être instanciés avec un "type ball" de "regular".
var Ball = function(ballType) {
    if (ballType === undefined) {
      this.ballType = "regular";
   }
 };

 function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
Dog.prototype.bark = function() { 
  return 'Woof!';
}

//Add property
/*for(let i=0; i < questions.length; i++) 
{
    questions[i].usersAnswer = null;
}*/

class Dinglemouse
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName()
    {
      if (this.firstName === ""  && this.lastName !== "")  return this.lastName;
      else if (this.lastName === "" && this.firstName !== "") return this.firstName;
      else  if (this.lastName === "" && this.firstName === "") return "";
      else return this.firstName + " " + this.lastName;
    }
  }

//Écrivez un programme qui trouve la somme de tous les nombres de 1 à num. Le nombre sera toujours un entier positif supérieur à 0.
var summation = function (num) 
{
    let sum = 0;
    num = Math.abs(num);
    for(let i = 0; i <= num; i++)
    {
        sum += i;
    }

    return sum;
} 

//Jenny a écrit une fonction qui renvoie un message d'accueil pour un utilisateur. Cependant, elle est amoureuse de Johnny et aimerait le saluer un peu différemment. Elle a ajouté un cas particulier à sa fonction, mais elle a fait une erreur.
function greet(name)
{
    return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

//Créez une fonction simple appelée greet qui renvoie le plus célèbre "hello world!".
function greet()
{
  return "hello world!";
}

//Vous emmenez votre fils dans la forêt pour voir les singes. Vous savez qu'il y en a un certain nombre (n), mais votre fils est trop jeune pour apprécier le nombre entier, il doit commencer à les compter à partir de 1.
function monkeyCount(n) 
{
    let tab = [];
    for(let i = 1; i <= n; i++)
    {
        tab.push(i);
    }

    return tab;
}

//Créez une fonction qui répond à la question « Jouez-vous du banjo ? ».Si votre nom commence par la lettre "R" ou un "r" minuscule, vous jouez du banjo ! La fonction prend un nom comme seul argument et renvoie l'une des chaînes suivantes :
function areYouPlayingBanjo(name) 
{
    // Implement me
    return name.charAt(0).toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

//Écrivez une fonction qui prend une seule chaîne ( word) comme argument. La fonction doit renvoyer une liste ordonnée contenant les index de toutes les lettres majuscules de la chaîne.
var capitals = function (word) {
    let result = [];
    for(let i = 0; i < word.length; i++)
    {
        if(word[i] == word[i].toUpperCase())
        {
            result.push(word.indexOf(word[i]))
        }
    }
    return result;
};


function plural(n) 
{
    return n != 1
}

//Créez une fonction qui reçoit l'âge et renvoie ce qu'ils boivent.
function peopleWithAgeDrink(old) 
{
    let message;
    if(old < 14) message = "drink toddy";
    else if(old >= 14 && old < 18) message = "drink coke";
    else if(old >= 18 && old < 21) message = "drink beer";
    else message = "drink whisky";

    return message;
};


//Écrivez une fonction qui prend un tableau de mots et les écrase en une phrase et renvoie la phrase
function smash (words) 
{
    return words.join(' ');
 };

//Étant donné un entier non négatif, 3par exemple, renvoie une chaîne avec un murmure : "1 sheep...2 sheep...3 sheep...". L'entrée sera toujours valide, c'est-à-dire qu'il n'y aura pas d'entiers négatifs.
var countSheep = function (num)
{
   let str = "";
  for(let i = 1; i <= num; i++) 
  { 
      str+= `${i} sheep...`; 
  }
  
  return str;
}

//Étant donné une chaîne, vous devez renvoyer une chaîne dans laquelle chaque caractère (sensible à la casse) est répété une fois.
function doubleChar(str) 
{
    let string = "";
    for( let i = 0; i < str.length; i++) 
    {
        string += str[i].repeat(2);
    }

    return string;
}

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
        //while
    let sum = 0;
    let input = '';
    if (count === 0) return '0=0';

    if (count < 0) return `${count}<0`;

    for(let i = 0; i <= count; i++)
    {
        if(i == count)
        {
            input += String(i);
        }
        else 
        {
            input += String(i) + '+';
        }
        sum = sum + i;
      }
      return input + ' = ' + sum;
    };
  
    return SequenceSum;
  
  })();


//
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
}

//La racine numérique est la somme récursive de tous les chiffres d'un nombre.
function digital_root(n) 
{
    if (n < 10) return n;

    return digital_root(
        n.toString().split('').reduce((acc, d) => 
        {
            return acc + +d;
        }, 0));
  
}

//console.log(digital_root(456))

function likes (names) 
{
    let message;
    if (names.length === 0) message = 'no one likes this';
    else if (names.length === 1) message = `${names[0]} likes this`;
    else if (names.length === 2) message = `${names[0]} and ${names[1]} like this`;
    else if (names.length === 3) message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else if (names.length > 3) message = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

    return message;
}

//
function findOutlier(integers)
{
    let pairs = [];
    let impairs = [];
    for (let i = 0; i < integers.length; i++) 
    {
        if (integers[i] % 2) 
        {
            pairs.push(integers[i]);

        } 
        else 
        {
            impairs.push(integers[i]);
        }
    }

   return pairs.length > impairs.length ? impairs[0] : pairs[0];
}

//Écrivez une fonction qui prend une chaîne d'un ou plusieurs mots et renvoie la même chaîne, mais avec les mots de cinq lettres ou plus inversés (tout comme le nom de ce Kata). Les chaînes transmises seront composées uniquement de lettres et d'espaces. Les espaces seront inclus uniquement lorsque plus d'un mot est présent.
function spinWords(string)
{
    const array = string.split(' ');
    let result = '';
    array.map((str, i) => 
    {
        if (str.length >= 5)
        {
            array[i] = str.split('').reverse().join('');
        } 
        else 
        {
            array[i] = str;
        }

        result = array.join(' ');
    });
    
    return result;
}


//Nbr Duplicata
function duplicateCount(text){
    //...
      let myObj = {}, count = 0; 
      text = text.toLowerCase() 
      for(let i = 0; i < text.length; i++){   
  
        if(!myObj[text[i]]){
            myObj[text[i]] = 1;
        } 
        else if(myObj[text[i]] < 2) {
            myObj[text[i]] += 1;
            count++;
        }    
      }
      return count;
  }

//
function findNb(m) 
{
  for(let n = 0; ; n++ ) 
  {
    if(m > 0) 
    {
        let cube = Math.pow(n+1, 3);
        m -= cube;
    } 
    else if (m == 0) 
    {
        return n;
    } 
    else if(m < 0) 
    {
        return (-1);
    }
  }  
}


//
function queueTime(customers, n) 
{
    let result = new Array(n).fill(0);
    for (let custom of customers) 
    {
        let idx = result.indexOf(Math.min(...result));
        constum[idx] += custom;
    }

    return Math.max(...result);
  }

//
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
}


