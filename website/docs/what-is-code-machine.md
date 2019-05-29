---
id: what-is-code-machine
title: Code humain vers code machine
---
*Commencer à découvrir les bases de la programmation avec le langage C*

Les ordinateurs comprennent seulement des `0` et des `1`, cependant il est impossible pour un humain d’écrire un programme qu'avec des `0` et des `1` c’est pour cela que des langages de programmation ont été inventés, voiçi un exemple de code:

```C
#include <stdio.h>

int main(void) {
	printf("Hello World !\\n");
}
```

Ceci est du code en langage C il est beaucoup plus intuitif et compréhensible par un humain, ce code a pour fonction de renvoyer “Hello World” à l’écran. 

On peut maintenant se poser une question le code que l’on a écrit donne des instructions à notre ordinateur cependant il ne comprend que des `0` et des `1` alors comment fait-il pour traduire notre code ?  Pour cela on va utiliser un programme dédié à la transformation du code humain en code machine.

## Transformer le code en code machine
Quand les ordinateurs ont commencés à faire leurs apparitions les programmes étaient relativement simple néanmoins le fonctionnement des ordinateurs n’a pas changé, une ressource physique l’électricité est envoyée aux ordinateurs qui traitent cette information et la renvoient à l’utilisateur.

On vient de voir que pour créer des programmes on utilise des langages qui permettent de donner des instructions aux ordinateurs et que ces instructions sont par la suite traduites en `0` et `1`, pour transformer notre code en code machine les ordinateurs vont exécuter un programme qui s’appelle un compilateur.

### Qu'est-ce qu'un compilateur ?
En informatique un compilateur est un programme qui est chargé de transformer le code source celui que le programmeur écrit en code objet celui que l'ordinateur peut exécuter, il y a plusieurs étapes lors de l'éxecution de ce programme:

1. Analyse lexicale.
2. Analyse sémantique.
3. Génération du code objet.

Avec le temps différents types de programmes sont apparus pour transformer le code en code machine on parle notamment d'interpréteur.

* Compilateur - Va traduire entiérement le code source en code exécutable, Ainsi à partir des fichiers sources, on obtient les fichiers exécutables, qui pourront être utilisés indépendamment. On n'a plus besoin du code source ni du compilateur pour l'exécution.
* Interpréteur - le code est traduit au fur et à mesure de l'exécution. On n'obtient pas de fichier exécutable : le code machine est donné à exécuter par l'interpréteur pendant qu'il lit le code source. Dans ce cas, le code source et l'interpréteur doivent être utilisés ensemble.

> **Note** - Si vous désirez en savoir plus sur les différentes techniques utilisées [cliquez içi  pour plus d'informations](https://fr.wikipedia.org/wiki/Compilateur).