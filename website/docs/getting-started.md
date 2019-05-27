# Introduction:
*What is computer science ? Computer science à sa base est résoudre des problèmes, pour cela l’ordinateur va prendre une donnée (input) et le rôle du développeur va être de pouvoir prendre cette input de la traiter et de renvoyer l’information souhaité de la manière la plus optimisée possible.*


## How computers works ?
Les ordinateurs fonctionnent grâce à de l’électricité (source d’énergie) des câbles et des circuits électroniques permettent à l’électricité de traverser les différents composants de nos ordinateurs qui vont être chargés de rendre les informations envoyés.

### Comment représenter de l’information grâce à de l’électricité ?
 Lorsque l’électricité traverse un câble pour apporter de l’énergie à un composant le signal peut soit être on ou off autrement dit si on convertit en chiffre cela donne 1 ou 0, cette donnée est ce qu’on appelle en computer science un BIT c’est la plus petite information qu’un ordinateur peut stocker.

> **Note** -  Par convention on utilise rarement en terme de donnée le nombre de bits renvoyés mais plutôt “byte” qui correspond à 8 bits.  

### Que faire avec des 1 et 0 ? 
Les ordinateurs utilisent ce qu’on appelle le système binaire pour rendre l’information tout comme le système décimal que nous utilisons pour calculer des chiffres le système binaire possède ses propres règles voir  [définition içi](https://fr.wikipedia.org/wiki/Syst%C3%A8me_binaire) , ce système permet ainsi de calculer n’importe quel chiffre, imaginez que l’on utilise 32 câbles qui renvoient tous un bit positif donc 1, il est donc maintenant possible de calculer des chiffres jusqu’à une valeur de plus de 4 millions.

**Comment renvoyer des lettres ?**
On sait que les informations renvoyés par les signaux électriques permettent de calculer des chiffres on pourrait très bien attribuer à chaque lettre, caractères spéciaux un chiffre par exemple:
	* Imaginons que la lettre A possède en valeur le chiffre 1 pour retourner la lettre A notre ordinateur a besoin d’un BIT avec comme valeur 1.
	* Autre exemple on attribue (fictif) à la lettre Z le chiffre 35 pour retourner la lettre 2 notre ordinateur a besoin d’utiliser 6 bit avec comme signal (100011).

**Quand utiliser des chiffres ou des lettres ?**
Nous avons vu comment les ordinateurs rendent des chiffres et des lettres avec l’aide des bits. La question que l’on peut se poser à présent est comment l’ordinateur sait s’il doit renvoyer un chiffre ou une lettre ? 
La réponse est la suivante, cela dépend du contexte, en effet suivant le programme exécuté l’ordinateur sait qu’il doit rendre un nombre ou une lettre, par exemple lorsque vous utilisez le programme calculatrice de votre ordinateur il sait qu’il doit utiliser des chiffres et non des lettres vice-versa.


## Abstraction:
*To do.*


## Comment rendre des images ?
Pour rendre une image nos écrans sont composés de millions de pixels voir  [définition içi](https://fr.wikipedia.org/wiki/Pixel) , grâce à ces pixels il est possible de rendre de la couleur et chaque couleur peut-être représentées par des chiffres via le système  [rgb](https://fr.wikipedia.org/wiki/Rouge_vert_bleu)  ou  [hexadecimal](https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal) . 

**Mais comment renvoyer des vidéos ?**
À la base les vidéos sont des ensembles d’images mises bout à bout et exécutés très rapidement que l’oeil humain n’a pas le temps de voir que ce sont des images qui défilent devant lui.
C’est de cette façon que les vidéos sont effectués simplement en collant des images l’une après l’autre à une très grande vitesse.
C’est toujours dans un contexte particulier avec un certain type de composants que l’ordinateur sait si il doit renvoyer une vidéo ou simplement une image.


## Algorithme:
Revenons au problème de base les ordinateurs utilisent l’électricité pour renvoyer des 1 et des 0 qui vont être calculés via le système binaire, ce même système permet de renvoyer des chiffres des lettres et aussi des images.
Mais que se passe t-il entre le moment ou l’information est capturé par l’ordinateur et le moment ou l’information est renvoyée ? Il y a ce qu’on appelle un traitement c’est ici que les développeurs interviennent ils vont faire exécuter différentes tâches à l’ordinateur qui vont par la suite former une suite d’instructions qui par la suite vont former un programme. Tout cela forme ce qu’on appelle un algorithme.

### Qu’est-ce qu’un algorithme ?
Un algorithme est tout simplement un ensemble de tâches, instructions dans le domaine des ordinateurs qui permettent de résoudre un problème donnée.
Sans vous en rendre compte votre cerveau résout des algorithmes tous les jours par exemple cuisiner des pâtes, voici un algorithme simple que vous pouvez effectuer:
	1. Faire chauffer de l’eau chaude.
	2. Une fois l’eau chaude, ajouter du sel.
	3. Plongez les pâtes dans l’eau chaude.
	4. Attendre quelques minutes.
	5. Essorer les pâtes.
	6. Dégustez !!
Vous venez sans vous en rendre compte d’effectuer un algorithme, celui-ci est très simple mais vous avez réussi à résoudre votre problème de base qui est de cuisiner des pâtes.

**Résoudre un problème efficacement**
Résoudre un problème c’est bien mais le résoudre efficacement c’est mieux, sur l’exemple précédent vous souhaitez peut-être pouvoir manger vos pâtes plus rapidement pour cela il est peut-être possible d’améliorer votre algorithme afin que vos pates cuisent plus vite:
	* Ajouter un couvercle sur votre casserole afin que l’eau cuise plus vite.
	* Mettre le feu à une température élevée.
	* ..
En ajoutant ces quelques étapes vos pâtes arriveront plus vite en conséquence votre algorithme est plus efficace que le précédent, on peut se dire que la vitesse de résolution de l’algorithme est un facteur qui permet de différencier un algorithme qui marche d’un algorithme qui marche et qui est efficace, nous verrons plus tard qu’il existent d’autres facteurs autre que la vitesse de résolution.

## Pseudocode:
*A faire.*