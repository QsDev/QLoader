# QLoader

QLoader est un chargeur de module
  - Modules AMD.
  - Modules SystemJS.
  
# Caractéristiques!
  - Soutenir les plugins natifs
    - Json (analyseur)
    - Modèle (gestionnaire de modèle)
    - style (gestionnaire Css)
    - Dossier (Structure)
    - xml (pas encore implémenté)
    - image (pas encore implémenté)
    - bibliothèque
  - Plugins d'extension
  - Assemblées (comme l'architecture dll)
  - Dispatcher (Task Synchronizer)
  - Sécurité d'accès libre (Self Defense TECH)
  - Refection de type
  - Tech d'isolation de bibliothèque
 
> QLoader est un chargeur de module léger. très optimisé soit pour Le CPU ou pour la Mémoire. J'espère me faire un cadeau et m'envoyer des bugs à Ammi.said@outlook.com. site [http://www.QCompany.dz] [df1]
### Installation

QLoader ne nécessite aucune spécification, il est exécuté sur n'importe quel navigateur


```sh
$ npm i @qcompany/qloader
$ node app
```

### Implementation

- dans votre code Html sous la tête tag insert
````html
<script srt="<path>/QLoader.min.js" entry-point='<pathOfmodule-to-load>' ></script>

````


### example 
créer un fichier js dans <root> /f1/f2/app.js
```js
define("adminFolder/app",["require","exports","define","context"],
    function(require,exports,define,context){
        //note: require: for get modules
        //      exports: is those things you want to expose to assemply
        //      define:  to register a new module
        //      context: contains usefull function for type reflection
        var StringContructor=context.GetType('String');
        var ClassAContructor=context.GetType('namespace.classA');
        var parentFolder=context.GetPath('./../') // you will get :'f1/f2/';
        //              and more .....
    }
```



### Enfin

  - Laissez Qloader TRAVAILLEZ VOTRE TRAVAIL
  - et Aller faire d'Autres choses

