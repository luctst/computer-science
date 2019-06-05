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

Cette liste est exhaustive et il existe de nombreux autre types d'algorithmes mais ce sont les plus connus n'hésitez pas à vous renseigner sur internet si vous désirez plus d'informations à ce sujet. Lorsque vous programmez quelque soit le langage vous utilisez certains types de données nous allons voir maintenant une liste d'algorithmes connues à utiliser avec les données auquel nous avons accés.

## Binary search
Cette algorithme est utilisé pour chercher un élement spécifique dans un tableau il recquiert cependant que le tableau soit au préalable trié, il est très utilisé car très efficace et de type *O(log n)*. L'idée derriére cette algorithme est de diviser le tableau en deux afin de réduire les opérations à effectuer, exemple en pseudocode:

1. À repéter jusqu'à ce que la taille du sous-tableau soit 0
    1. Trouver le milieu du sous-tableau qu'on appelera *i*.
        * Si *i* est égale à la valeur que l'on cherche terminer l'algorithme.
    2. Sinon si l'élément est inférieure à la valeur de *i*, répetez les opérations en supprimant les élements à droite de *i*.
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