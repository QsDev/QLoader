# QModule

[![N|Solid](https://storage.jumpshare.com/preview/F3wMY4nPf--XqiTv7L1coZ3SLfmf1xptQ9CicdjaxzRbGME59CvDU91nU9WKDqrulBQ66uXHlai1bGyW9gbBVlNlSmh0egFbdyHzE6LvoMAI4av1wcwKsmUDuTGzHRrg)](https://www.QDev.dz/products/QLoader)

QModue is a module loader
  - AMD modules. 
  - SystemJS modules.
 
#  Features!
  - Support native Plugins
    - Json (parser)
    - Template (Template handler)
    - style (Css handler) 
    - Folder (Structure)
    - xml (not implemented yet)
    - image (not implemented yet)
    - library
   - extension Plugins
   - Assemblies (like dll architecture)
   - Dispatcher (Task Synchronizer)
   - Self Access Security (Self defense TECH)
   - type Refection 
   - Library Isolation Tech
 
> QLoader is a lightweight module loader very optimized for speed and memory. I hope to forke me and send me any bugs at Ammi.said@outlook.com.  site [http://www.QCompany.dz][df1]
### Installation

QLoader doesn't requires any specification it's run on any browser

```sh
$ npm i @qcompany/qloader
$ node app
```
### Implementation

- in your html under head tag insert 
````html
<script srt="<path>/QLoader.min.js" entry-point='<pathOfmodule-to-load>' ></script>
````

### Finaly

 - LET QLOADER WORK YOUR WORK
 - Add GO TO OTHERSTUFS

### example 
we create js file in <root>/f1/f2/app.js
```js
define("adminFolder/app",["require","exports","define","context"],
    function(require,exports,define,context){
        //note: require: for get modules
        //      exports: is those things you want to expose to assemply
        //      define:  to register a new module
        //      context: contains usefull function for type reflection
        var StringContructor=context.GetType('String');
        var ClassAContructor=context.GetType('namespace.classA');
        var parentFolder=context.GetPath('./../') // you will get :'f1/f2/' "adminFolder";
        //              and more .....
    }
```` 

License
----
DzLicenceForScientist

**Free Software, Hell Yeah!**
