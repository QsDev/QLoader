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

define('lib1',['exports'],function(exports){
  exports.namespace={
    classA:function(){
      this.WordA="Hello";
      this.Word2="World";
      this.toString=function(){return this.WordA+" "+this.Word2;};
      return this;
    }
  };
});
define('mod1',[],function(){
  exports.Description="I am a module mod1 I am from library called lib1 ";
});
```
  
  créer un fichier js dans <root>/mod1.js
  
```js

define('mod1',['exports','lib:lib|./f1/lib1','lib/mod1'],function(exports,lib1,mod1){
  exports.obj={
    getHelloWorld:function(){return new lib1.entryPoint.namespace.classA().toString();},
    getMod1Description:function(){return mod1.Description;}
  };
});

```

create js file in <root>/f1/f2/app.js
  
```js
  //suggestion :<root>= http://localhost/
  
define("adminFolder/app",["require","exports","define","context","../../mod1"],
    function(require,exports,define,context,'mod'){
        //note: require: for get modules
        //      exports: is those things you want to expose to assemply
        //      define:  to register a new module
        //      context: contains usefull function for type reflection
        var StringContructor=context.GetType('String'); // result: String Constructor;
        var ClassAContructor=context.GetType('namespace.classA'); // result: classA constructor from lib1.js
        var parentFolder=context.GetPath('./../') // result: :string "http://localhost/f1/";
        var myFolder=context.GetPath('./') // result: :string "http://localhost/f1/f2/"; 
        var root=context.GetPath('/') // result: :string "http://localhost/";
        alert(mod1.getHelloWorld());
        alert(mod1.getMod1Description());
        //              and more .....
    }
```



### Enfin

  - Laissez Qloader TRAVAILLEZ VOTRE TRAVAIL
  - et Aller faire d'Autres choses

