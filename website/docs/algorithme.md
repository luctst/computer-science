---
id: algo
title: Algorithme
---
*En tant que développeurs les algorithmes vont rapidement venir envahir votre vie ils sont partouts les ordinateurs eux-mêmes sont crées à partir d'algorithmes, mais au final qu'est-ce que c'est ? Bien au final c'est tout simplement une suite d'étapes qui vont permettre de résoudre un probléme donnée.*

> **Note** - Si vous voulez en savoir plus sur les algorithmes [cliquez içi](getting-started#algorithme)

## Temps de résolution
Le temps de résolution permet d'exprimer la quantité de temps qu'il faudra à un algorithme pour se résoudre, pour cela on va analyser le nombre d'opérations qu'il va effectuer en imaginant que chaque opérations prend *n* secondes. On va donc suivant un facteur constant pouvoir analyser le nombre d'opérations que notre algorithme va effectuer et donc définir le temps qu'il va prendre afin de se résoudre.

### Big O notation
Le temps de résolution en informatique est souvent exprimé en utilisant la **Big O notation** qui est une fonction qui prend un paramétre `n`representé par le taille d'entrée que vous lui donnez. Il existe une classification des différents types d'algorithmes voiçi les plus courants:

* **O(1)** - Constant, comme son nom l'indique votre algorithme prendra toujours le même temps pour se résoudre quelque soit le nombre d'entrées.
* **O(n)** - Linéaire, votre algorithme prendra `n` temps ou `n` est le nombre d'entrées que vous lui donnez.
* **O(n²)** - Quadratic, votre algorithme prendra `n` au carré temps afin de résoudre.
* **O(log n)** - Logarithmic, votre algorithme prendra `n` / 2 temps afin de se résoudre.
* **O(log log n)** - Log-logarithmic,.
* **O(n log n)** - 

Cette liste est exhaustive et il existe de nombreux autre types d'algorithmes mais ce sont les plus connus n'hésitez pas à vous renseigner sur internet si vous désirez plus d'informations à ce sujet. 

Lorsque vous programmez quelque soit le langage, vous utilisez certains types de données nous allons voir maintenant une liste d'algorithmes connues à utiliser avec les données auquel nous avons accés.

## Binary search
Cette algorithme est utilisé pour chercher un élement spécifique dans un tableau il recquiert cependant que le tableau soit au préalable trié, il est très utilisé car très efficace et de type **O(log n)**. L'idée derriére cette algorithme est de diviser le tableau en deux afin de réduire les opérations à effectuer, exemple en pseudocode:

1. À repéter jusqu'à ce que la taille du sous-tableau soit 0
    1. Trouver le milieu du sous-tableau qu'on appelera *i*.
        * Si *i* est égale à la valeur que l'on cherche terminer l'algorithme.
    2. Si l'élément est inférieure à la valeur de *i*, répetez les opérations en supprimant les élements à droite de *i*.
    3. Sinon si l'élément est supérieure à la valeur de *i*, répetez les opérations en supprimant les élements à gauche de *i*.
2. Si la longueur du tableau est égale à 0 c'est que l'élement n'existe pas.

## Bubble sort
Cette algorithme permet de trier les valeurs de tableaux de maniére à déplacer les valeurs les plus elevées vers la droite et les moins elevées vers la gauche en utilisant une variable qui va nous servir d'indicateur afin de savoir si la tableau est correctement trié, exemple

On nommera notre indicateur *i*.

1. Attribuer à *i* la valeur -1.
2. Repéter jusqu'à ce que *i* soit égale à 0.
    * Mettre *i* à 0.
    * Recupérer les deux prochaines valeurs du tableau.
        * Si les deux élements ne sont pas organisés inverser leurs positions et ajouter 1 à *i*.

Cette algorithme est pratique dans le cas ou la tableau est déja trié le temps de résolution de l'algorithme sera donc de **O(n)** on effectuera `n` opérations et notre indicateur restera à 0. Autrement si le tableau n'est pas organisé on a besoin d'effectuer `n²` opérations donc **O(n²)**.

## Insertion sort
L'idée de cette algorithme est de créer une sorte de sous-tableau trié et de déplacer les élements qui ne sont pas triés à chaque opérations ce qui va nous permettre d'organiser un tableau correctement avec comme temps de résolution **O(n²)**:

1. Définir le premier élement comme trié.
2. Répeter jusqu'à ce que le tableau soit trié.
    * Inspecter le prochain élement.
        * S'il est trié l'ajouter à notre liste d'éléments triés.
        * Sinon re boucler dans notre liste d'elements triés et l'ajouter au bon index.

## Linear search
Cette algorithme est utilisé pour trouver un élement dans un tableau il consiste à comparer si l'élement en question est égale à celui que l'on cherche.

1. Repéter jusqu'à ce que l'élement soit trouve.
    * L'élement correspond à la valeur recherchée alors arretez le programme.
    * Sinon passer à l'élement suivant.

Cette algorithme peut parfois être utilse si par exemple l'élement recherché se trouve à la premiére position, dans ce cas notre algorithme ne fera qu'une seule opération donc **O(1)**, cependant si à l'inverse la cible se trouve à la derniére position il lui faudra parcourir tout le tableau afin de trouver l'élement voulu qui équivaut à **O(n)**.

## Merge sort
L'algorithme Merge est le plus efficace lorsqu'il s'agit de trier un tableau cependant il est un peu plus compliqué, il consiste à separer le tableaux en plusieurs tableaux de les organiser et de finalement tous les assembler.

1. Divisez la liste non triée en n sous-listes, chacune comprenant 1 élément.
    * Commencez par la partie gauche du tableaux et repétez l'opération 1.
    * Une fois la partie gauche terminée, repétez avec la partie droite.
2. Merge les deux parties afin de les trier.

```C
int mergeArray[7] = {14, 7, 3, 12, 9, 11, 6, 2};

// 1. Trier la partie gauche du tableau [14, 7, 3, 12]. 
//  a. [14, 7] - [3, 12]
//  b. [14] [7] - [3] [12]
// 2. On a maintenant des tableaux d'un élement on va pouvoir les trier en utilisant l'algorithme insertion sort.
//  a. [7, 14] - [3, 12]
// 3. Répeter les mêmes opérations avec la partie droite du tableau.
//  a. [9, 11] - [6, 2].
//  b. [9] [11] - [2] [12]
//  c. [9, 11] - [2, 12]
// 4. On se retrouve maintenant avec [7, 14] [3, 12] - [9, 11] [2, 12] il faut maintenant les merge.
//  a. On va comparer le premier élement aux restes [3 ,7, 12, 14] - [2 ,9, 11, 12].
//  b. Effectuer la même opération. [2 ,3, 7, 9, 11, 12, 14].
```

## Selection sort
L'idée de cette algorithme est le suivant récupérer la valeur du premier élement du tableau non trié et de le comparer avec chaque élement du tableau jusqu'à trouver le plus petit s'il en existe alors l'échanger de place avec le premier élement.

1. Repéter jusqu'à ce que le tableau soit trié.
    * Rechercher dans la partie non trié du tableau un élement plus petit que l'élément à la position 0.
        * Si il en existe échanger de position les deux élements.
        * Sinon indiquer que l'élement en position 0 est trié.

Içi le temps de résolution sera **O(n²)** car on devra boucler sur chaque éléments deux fois afin de vérifier que le tableau est correctement organisé.