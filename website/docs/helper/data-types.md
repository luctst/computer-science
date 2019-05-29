---
id: data-type
title: Types de données
---
*En informatique lorque l'on crée des programmes on manipule des données, ces données peuvent être representées sous plusieurs formes (nombres, characters, boolean..). Ces données indique au compilateur ou à l'interpréteur sous quelle forme il va recevoir les instructions qu'on lui donne.*

## Nombres
Il existe plusieurs types de nombres que l'on peut représenter:

* Integer (entier) par exemple le chiffre `1`.
* Float (décimal) par exemple le chiffre `1.50`.

### Entier
Un nombre entier `int` prend toujours 8 bytes ce qui équivaut à 64 bits, en conséquence le nombre maximal que l'on peut stocker dans un entier est environs entre `-2 000 000` et `2 000 000`.

Il existe un autre type d'entier qui est `unsigned` il signifie que si l'on sait que notre entier ne sera pas négatif on peut doubler la valeur que notre entier peut prendre en lui attribuant `unsigned`, en l'occurece içi notre nombre pourra se voir attribuer une valeur maximale de `4 000 000`.

```C
// La variable x est un entier de valeur 10
int x = 10;
```
### Décimal
Un nombre décimal `float` prend 4 bytes de mémoires ce qui équivaut à 32 bits, il est difficile de définir la portée exacte des chiffres décimaux de par leur nature mais on peut dire que la valeur précise d'un décimal sera de 32bits.

Une solution à ce probléme est la donnée `double`, elle permet tout simplement de doubler la valeur d'un nombre décimal au lieu de 32 bits on pourra maintenant avoir un nombre décimal d'une précision de 64 bits.

```C
// La variable n est un décimal de valeur 3.14
float n = 3.14 ;
```

## Lettres
il existe plusieurs types de données quand il s'agit de stocker des lettres:

* char - Permet de stocker une seule lettre.
* string - Permet de stocker une liste de lettres.

### Char
Les données `char` sont utilisés pour des variables qui stockent seulement un seul caractére, en terme de mémoire à l'inverse des nombres les lettres ne prennent seulement 1 bytes ce qui équivaut à 8 bits. Aujourd'hui grâce à ASCII ([plus d'infos içi](getting-started.md#comment-renvoyer-des-lettres-et-des-chiffres)), la représentation des lettres est organisé entre les chiffres `1` et `127`.

```C
// La variables L est une char qui stocke en mémoire la lettre l.
char l = "L";
```

### String
Lorsque vous souhaitez stocker une liste de caractéres vous devez utiliser `string`, notez que n'êtes pas obligés d'inclure seulement des lettres vous pouvez également ajouter des espaces virgules etc..

```C
string p = "Je suis une string";
```

## Vide (void)
`void` est particulier des autres types de données il ne permet pas d'attribuer une valeur mais plutôt d'indiquer qu'il ne doit rien retourner comme par exemple une `function`, vous pouvez également attribuer `void` à une liste d'arguments dans une function qui signifie que celle-ci ne prend aucun paramétre.

## Booléan
Les booléans sont généralement utilisés comme une sorte d'interrupteur ils peuvent prendre seulement deux valeurs `true` ou `false`.

```C
// La variable m est un booléan qui stocke la valeur true ou on ou 1.
bool m = true;
```

## Aller plus loin
Nous avons vu les principaux types de données que l'on manipuler en C notez également qu'ils ne sont pas réservés au langage C vous retrouverez ces données dans la plupart des langages de programmations, si vous désirez aller plus loin sachez que ce ne sont pas les seules type de données qui existent il en existent plusieurs certains plus utilisés que d'autres mais la liste ci-dessus regroupe les principaux.