/*
easyShapeFX
Un outil créé avec amour par Matthieu Fremeaux (aka Fremox), qui permet d'appliquer des effets bien stylés au calque de forme sélectionné en cliquant sur de simples boutons !

NOTES :
Bien que l'outil lui même, ses fonctions, ses messages d'alerte et sa documentation soient rédigés en anglais pour pouvoir être utilisé à l'international (et donc par le plus grand nombre) ;
Les commentaires (tout ce qui est écrit en vert et qui sera donc ignoré par la machine lors de l'exécution du script) sont entièrement rédigés en français, de même que les noms de variables, pour pouvoir laisser les utilisateurs francophones étudier la manière dont cet outil a été développé... et pouvoir ainsi s'approprier la technique !
Cette volonté de laisser cet outil 'ouvert' fait suite au Live Adobe France du 13 janvier 2021 (que vous pouvez consulter à tout moment en cliquant sur le 3ème bouton de la fenêtre 'Help & Info" lancée directement depuis l'outil !)
Pour parfaire votre découverte du scripting, je vous conseille également l'excellente série de tutos en français d'Aurélien Delamare dédiée au scripting sur https://www.youtube.com/watch?v=g0rKmarqJds&t=9s&ab_channel=MotionCafe 
Pour toute question ou suggestion, rendez-vous sur la page du produit, ou contactez-moi (Fremox) directement sur une de nos plateformes Motion Café (facebook, discord...)

REMERCIEMENTS :
Un grand merci à Matthieu Wlazinski (aka Lakpo), sans qui je n'aurais probablemment jamais eu l'idée ni pris l'initiative de me mettre au scripting pour AfterEffects ! L'outil 'Metaball' est d'ailleurs directement inspiré de l'un de ses anciens tutos, réalisé en 2015 pour Motion Café !
Merci 1000 fois également à Nicolas Dufresne (aka DUDUF, c'est 'juste' le développeur de DUIK, l'incontournable outil de rigging et d'animation pour AfterEffects, que vous connaissez et utilisez déjà forcément !), avec qui j'ai eu l'immense privilège de pouvoir approfondir mes connaissances en scripting avec un module de formation avancé sur-mesure ! S'il lit ces commentaires, j'espère qu'il pourra constater le fruit de cet apprentissage : j'ai organisé les différentes sections du code selon la structure qu'il m'avait préconisé ; j'ai utilisé son astuce de fonction globale 'anonyme' pour éviter les conflits, respecté autant que possible ses conseils en matière de noms de variables, et ai même pris le temps de 'factoriser' autant que je le pouvais les 'Core Functions' (pour optimiser mon code et le rendre plus facile à mettre à jour) !
Merci également à Adrien du Repaire, le papa de l'excellent plugin MoCode, qui me facilite beaucoup la vie en tant que développeur et bidouilleur sur AfterEffects :)
Enfin, je remercie tous les créateurs de sites et autres plateformes communautaires tournant de près ou de loin autour du scripting, dans lesquels je vais encore régulièrement 'piocher' des snippets et autres bouts de codes..
Il en existe des tonnes, mais en voici quelques uns parmi mes favoris:
www.aenhancers.com
www.redefinery.com
www.motionscript.com
www.provideocoalition.com
www.stackoverflow.com
www.github.com
...

Bon apprentissage du scripting et bon amusement avec l'outil :)
*/


(function (thisObj){  //pour éviter les conflits potentiels avec d'autres scripts (notamment des variables globales qui porteraient le même nom que celles de notre script), on encapsule tout le script dans ce qu'on appelle une fonction globale 'anonyme' (c'est-à-dire qui ne porte pas de nom d'identifiant). Elle reçoit comme unique argument (on appelle argument ce qui se trouve entre parenthèses) le mot "thisObj", qui renvoie dans notre cas à notre fenêtre ou UI Panel
    
// ===== VARIABLES =====

    var nomDeMonScript = "easyShapeFX";
    var versionDuScript = "1.0" ;
    var cheminDuDossierScriptUIPanels = (new File($.fileName)).parent.fsName; //on stocke le chemin du dossier parent de ce script easyShapeFX.jsx, censé être le dossier ScriptUI Panels d'AfterEffects, quel que soit l'OS
    var cheminDuDossierAssets =  cheminDuDossierScriptUIPanels+"/easyShapeFXassets/"; //si le script easyShape.jsx se trouve bien au même niveau d'arborescence que le dossier "easyShapeFXassets" (dans ScriptUI Panels) alors on stocke ce sous-chemin dans 'cheminDuDossierAssets'

// ===== FUNCTIONS =====

    // ----- Utilities -----
    
    function isTheOnlySelectedLayer(maCompActive){ //fonction qui vérifie si c'est bien un seul calque qui a été sélectionné, à laquelle on a 'passé' comme argument la comp active 'maCompActive'
        var maSelectionDeCalques = maCompActive.selectedLayers; //le nombre de calques sélectionnées dans la comp active
        if(maSelectionDeCalques.length == 1){ //si on n'a qu'un seul calque sélectionné...
            return true; // retourne la valeur 'true' (et continue ce que tu avais à faire dans la fonction depuis laquelle on a lancée celle-ci)
        }else if(maSelectionDeCalques.length == 0){ //sinon, si l'utilisateur n'a sélectionné aucun calque...
            alert("You have to select a Shape Layer in order to use this feature !"); //dis lui qu'il faut sélectionner un calque de forme pour utiliser cet outil
        return //et retourne 'rien' de manière à arrêter tous les processus en cours (et donc ne poursuit pas ce que faisait la fonction depuis laquelle on a lancée celle-ci) 
        }else{ //sinon enfin (on serait alors dans le cas où un utilisateur aurait sélectionné plusieurs calques dans la comp active)
            alert("You have to select exactly one single Shape Layer in order to use this feature !"); //dis lui qu'il faut sélectionner un (et un seul) calque de forme 
        return //et retourne 'rien' de manière à arrêter tous les processus en cours (et donc ne poursuit pas ce que faisait la fonction depuis laquelle on a lancée celle-ci)
        }
    }

    function isShapeLayer(leCalqueATester){ //fonction qui vérifie si le calque sélectionné est bien un calque de forme, à laquelle on a 'passé' comme argument le calque sélectionné 'leCalqueATester' 
        if(leCalqueATester instanceof ShapeLayer){ //c'est de cette façon qu'on vérifie si un calque est un calque de forme
            return true; // si oui, alors renvoies la valeur 'true' (et continue ce que tu avais à faire dans la fonction depuis laquelle on a lancée celle-ci)
        }else{ // sinon (sous-entendu, l'utilisateur a sélectionné un autre genre de calque, comme un solide, un Null, un calque de texte ou un métrage par exemple)...
            alert("The "+leCalqueATester.name+" layer you have selected isn't a Shape layer !\nThe effect won't be applied to this one."); // alors dis lui que ça ne va pas marcher parce que son calque n'est pas un calque de forme !
        return //et retourne 'rien' de manière à arrêter tous les processus en cours (et donc ne poursuit pas ce que faisait la fonction depuis laquelle on a lancée celle-ci)
        }
    }

    function isNotAlreadyApplied(leCalqueATester,nomDeLeffetATester){ //fonction qui vérifie que l'effet 'nomDeLeffetATester' n'a pas déjà été appliqué au calque 'leCalqueATester'
        if(leCalqueATester.property("ADBE Effect Parade").property(nomDeLeffetATester) === null){ //si l'effet 'nomDeLeffetATester' est null (donc n'existe pas encore sur ce calque)...
            return true; // alors renvoies la valeur 'true' (et continue ce que tu avais à faire dans la fonction depuis laquelle on a lancée celle-ci)
        }else{ // sinon (sous-entendu, l'effet a déjà été appliqué à ce calque)
            alert("The "+nomDeLeffetATester+" effect has already been applied to the "+leCalqueATester.name+" layer !\nYou can't apply it more than once."); // dis à l'utilisateur qu'on ne peut pas l'appliquer plus d'une fois au même calque
        return //et retourne 'rien' de manière à arrêter tous les processus en cours (et donc ne poursuit pas ce que faisait la fonction depuis laquelle on a lancée celle-ci)
        }
    }

    function detect(){ //fonction qui permet de détecter les touches du clavier enfoncé
        var touches = ""; //on déclare d'abord la variable 'touches' comme une chaîne de carractères vide
        var etatDesTouchesSurLeClavier = ScriptUI.environment.keyboardState; //puis on stocke l'état des touches du clavier enfoncé dans une variable 'etatDesTouchesSurLeClavier'
        if (etatDesTouchesSurLeClavier.shiftKey) touches += "shift"; //s'il reconnaît que c'est la touche SHIFT qui est enfoncée, alors 'touches' prend la valeur textuelle 'shift'
        if (etatDesTouchesSurLeClavier.altKey) touches += "alt"; //s'il reconnaît que c'est la touche ALT qui est enfoncée, alors 'touches' prend la valeur textuelle 'alt'
        //Notez qu'on aurait également pu y intégrer la touche CTRL par exemple avec '.ctrlKey' mais nous n'en avons pas le besoin pour ce script !
        return touches; //retourne la valeur de 'touches' (donc 'shift' si c'est la touche SHIFT qui était enfoncée, ou 'alt' si c'était ALT)
    }

    function isMac(){ //fonction qui checke sur quel système on se trouve (Mac ou PC)
        return $.os.toLowerCase().indexOf( "mac" ) >= 0; // renvoie 'true' si on est sur Mac, et 'false' si on est sur PC
    }

    function openURL(url){ //fonction qui ouvre l'adresse 'url' - qui est passée en tant qu'argument - dans un navigateur
        if ( isMac() ) system.callSystem('open "' + url + '"'); //si on se trouve sur Mac, on lance la commande système 'ouvrir' car c'est comme ça qu'on doit lancer un URL sur Mac
        else system.callSystem('explorer "' + url + '"');//sinon on se trouve sur PC, on lance donc la commande système 'explorer' car c'est comme ça qu'on doit lancer un URL sur PC
    }

    // ----- Core functions -----
    
    function sym() { //fonction qui va appliquer la symmétrie au calque une fois le bouton 1 'Symmetry' cliqué
        var maComp = app.project.activeItem; //on déclare la variable 'maComp' et on y stocke la comp active (ouverte dans AfterEffects) 
        var monCalque = maComp.selectedLayers[0]; //la variable 'monCalque' stocke le 1er calque sélectionné dans cette comp grâce à l'index 0 puisque 'selectedLayers' renvoie un tableau de tous les calques sélectionnés
        var touches = detect(); //on retrouve le résultat de la fonction 'detect()' (voir plus haut dans les Utilities) et on la stoke dans une variable 'touches'
        var cheminDuPreset = cheminDuDossierAssets+"Symmetry.ffx"; //on stocke le chemin du fichier de preset en .ffx (on fait un raccourci grâce à 'cheminDuDossierAssets', qu'on a déclaré tout en haut au début dans VARIABLES)
        var monPreset = File(cheminDuPreset); //on stocke également le fichier du preset .ffx lui même dans une variable appelée 'monPreset' pour pouvoir l'appliquer facilement ensuite
        var nomEffetTest = "easyShape - Symmetry FX"; //on stocke le nom de l'effet à tester (pour pouvoir vérifier s'il a déjà été appliqué au calque sélectionné) dans une variable 'nomEffetTest'

       if (isTheOnlySelectedLayer(maComp)){ //on vérifie d'abord qu'il n'y a qu'un seul calque sélectionné dans la comp active, en passant 'maComp' comme argument à la fonction 'isTheOnlySelectedLayer', qui doit renvoyer 'true' si c'est le cas
            if(isShapeLayer(monCalque)){ //on vérifie ensuite que ce calque est bien un calque de forme, en passant 'monCalque' comme argument à la fonction 'isShapeLayer', qui doit renvoyer 'true' si c'est bien un calque de forme
                if(isNotAlreadyApplied(monCalque,nomEffetTest)){ //la dernière condition à vérifier est que l'effet 'nomEffetTest' n'ait pas déjà été appliqué à 'monCalque', en passant ces 2 arguments à la fonction 'isNotAlreadyApplied'
                    monCalque.applyPreset(monPreset); //si toutes ces conditions sont 'true' on applique le preset stocké dans 'monPreset' au seul et unique calque sélectionné, identifié par 'monCalque'
                    if(touches.indexOf("shiftalt") != -1){ //si les touches 'shift' ET 'alt' sont toutes les 2 enfoncées lors du clic, alors...
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Horizontal Symmetry").setValue(1) ; //...cocher la case 'Activate Horizontal Symmetry' dans l'effet qui vient d'être appliqué
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Vertical Symmetry").setValue(1) ; //...cocher la case 'Activate Vertical Symmetry' dans l'effet qui vient d'être appliqué
                    }else if(touches.indexOf("shift") != -1){ //si seule la touche 'shift' a été enfoncée lors du clic, alors...
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Horizontal Symmetry").setValue(0) ; //...décocher la case 'Activate Horizontal Symmetry' dans l'effet qui vient d'être appliqué
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Vertical Symmetry").setValue(1) ; //...cocher la case 'Activate Vertical Symmetry' dans l'effet qui vient d'être appliqué
                    }else{ //sinon (sous-entendu si seule la touche 'alt' a été enfoncée lors du clic), alors...
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Horizontal Symmetry").setValue(1) ; //...cocher la case 'Activate Horizontal Symmetry' dans l'effet qui vient d'être appliqué
                        monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Activate Vertical Symmetry").setValue(0) ; //...décocher la case 'Activate Vertical Symmetry' dans l'effet qui vient d'être appliqué
                    }
                }
            }
        }
    }

    function meta() {//fonction qui va appliquer l'effet Metaball' au calque une fois le bouton 2 'Metaball' cliqué
        var maComp = app.project.activeItem; //on déclare la variable 'maComp' et on y stocke la comp active (ouverte dans AfterEffects)
        var monCalque = maComp.selectedLayers[0]; //la variable 'monCalque' stocke le 1er calque sélectionné dans cette comp grâce à l'index 0 puisque 'selectedLayers' renvoie un tableau de tous les calques sélectionnés
        var touches = detect(); //on retrouve le résultat de la fonction 'detect()' (voir plus haut dans les Utilities) et on la stoke dans une variable 'touches'
        var cheminDuPreset = cheminDuDossierAssets+"Metaball.ffx"; //on stocke le chemin du fichier de preset en .ffx (on fait un raccourci grâce à 'cheminDuDossierAssets', qu'on a déclaré tout en haut au début dans VARIABLES)
        var monPreset = File(cheminDuPreset); //on stocke également le fichier du preset .ffx lui même dans une variable appelée 'monPreset' pour pouvoir l'appliquer facilement ensuite
        var nomEffetTest = "easyShape - Metaball FX"; //on stocke le nom de l'effet à tester (pour pouvoir vérifier s'il a déjà été appliqué au calque sélectionné) dans une variable 'nomEffetTest'
        
       if (isTheOnlySelectedLayer(maComp)){//on vérifie d'abord qu'il n'y a qu'un seul calque sélectionné dans la comp active, en passant 'maComp' comme argument à la fonction 'isTheOnlySelectedLayer', qui doit renvoyer 'true' si c'est le cas
            if(isShapeLayer(monCalque)){ //on vérifie ensuite que ce calque est bien un calque de forme, en passant 'monCalque' comme argument à la fonction 'isShapeLayer', qui doit renvoyer 'true' si c'est bien un calque de forme
                if(isNotAlreadyApplied(monCalque,nomEffetTest)){ //la dernière condition à vérifier est que l'effet 'nomEffetTest' n'ait pas déjà été appliqué à 'monCalque', en passant ces 2 arguments à la fonction 'isNotAlreadyApplied'
                    monCalque.applyPreset(monPreset); //si toutes ces conditions sont 'true' on applique le preset stocké dans 'monPreset' au seul et unique calque sélectionné, identifié par 'monCalque'
                }
            }
        }
    }

    function radial() {//fonction qui va appliquer la duplication radiale au calque une fois le bouton 3 'Radial Array' cliqué
        var maComp = app.project.activeItem; //on déclare la variable 'maComp' et on y stocke la comp active (ouverte dans AfterEffects)
        var monCalque = maComp.selectedLayers[0]; //la variable 'monCalque' stocke le 1er calque sélectionné dans cette comp grâce à l'index 0 puisque 'selectedLayers' renvoie un tableau de tous les calques sélectionnés
        var touches = detect(); //on retrouve le résultat de la fonction 'detect()' (voir plus haut dans les Utilities) et on la stoke dans une variable 'touches'
        var cheminDuPreset = cheminDuDossierAssets+"Radial.ffx"; //on stocke le chemin du fichier de preset en .ffx (on fait un raccourci grâce à 'cheminDuDossierAssets', qu'on a déclaré tout en haut au début dans VARIABLES)
        var monPreset = File(cheminDuPreset); //on stocke également le fichier du preset .ffx lui même dans une variable appelée 'monPreset' pour pouvoir l'appliquer facilement ensuite
        var nomEffetTest = "easyShape - Radial Array FX"; //on stocke le nom de l'effet à tester (pour pouvoir vérifier s'il a déjà été appliqué au calque sélectionné) dans une variable 'nomEffetTest'
        
       if (isTheOnlySelectedLayer(maComp)){//on vérifie d'abord qu'il n'y a qu'un seul calque sélectionné dans la comp active, en passant 'maComp' comme argument à la fonction 'isTheOnlySelectedLayer', qui doit renvoyer 'true' si c'est le cas
            if(isShapeLayer(monCalque)){ //on vérifie ensuite que ce calque est bien un calque de forme, en passant 'monCalque' comme argument à la fonction 'isShapeLayer', qui doit renvoyer 'true' si c'est bien un calque de forme
                if(isNotAlreadyApplied(monCalque,nomEffetTest)){ //la dernière condition à vérifier est que l'effet 'nomEffetTest' n'ait pas déjà été appliqué à 'monCalque', en passant ces 2 arguments à la fonction 'isNotAlreadyApplied'
                    var monGroupeeContenus = monCalque.property("Contents"); //on stocke le groupe 'Contenus' du calque de forme sélectionné dans une variable 'monGroupeeContenus' 
                    for (var n = 1; n <= monGroupeeContenus.numProperties; n++){ //on créé une boucle basée sur le nombre d'éléments contenus dans le groupe 'Contenus' de notre calque de formes...
                        monGroupeeContenus.property(n).selected = true; //pour d'abord nous assure que TOUS ces éléments soient bien sélectionnés...
                    } 
                    app.executeCommand(3741); //puis nous lançons une commande de l'application AfterEffects permettant de grouper tous ces contenus sélectionnées dans notre calque de forme (c'est l'équivalent du CTRL/CMD + G !)
                    //A NOTER : la plupart des commandes accessibles depuis les menus d'AfterEffects peuvent être reproduites en faisant appel à cette méthode 'executeCommand()' avec le numéro d'identification qui leur correspond !
                    //pour voir la liste des numéros dispobibles pour AfterEffects, rendez-vous sur cette page : https://www.provideocoalition.com/wp-content/uploads/AECC2015_MenuIDs_v1_0_1-1.pdf 
                    for (var m = 1; m <= monGroupeeContenus.numProperties; m++){ //une fois le contenu groupé (on se retrouve alors normalement avec un groupe unique à ce moment là du processus), on refait une nouvelle boucle...
                        monGroupeeContenus.property(m).selected = false; //... de manière cette fois où tout déselectionner dans ce même groupe 'Contenus' de notre calque de forme (surtout pour éviter des problèmes potentiels liés à la sélection)
                    } 
                    monCalque.applyPreset(monPreset); //si toutes les conditions préalables sont 'true' et une fois que cette étape préliminaire (grouper le contenu) réalisée, on applique le preset stocké dans 'monPreset' au seul et unique calque sélectionné, identifié par 'monCalque'
                    monGroupeeContenus.property(1).property("ADBE Vector Transform Group").property("ADBE Vector Position").expression = 
                    "// easyShape FX - created by Matthieu Fremeaux (aka FREMOX) from MotionCafe"+"\n"
                    +"\n"+"[Math.cos(degreesToRadians(effect('easyShape - Radial Array FX')('Array Axis')-90))*effect('easyShape - Radial Array FX')('Array Radius'),Math.sin(degreesToRadians(effect('easyShape - Radial Array FX')('Array Axis')-90))*effect('easyShape - Radial Array FX')('Array Radius')]"; //on applique ensuite dynamiquement une expression à la propriété de Position du groupe qu'on avait créé dans les étapes précédentes, de manière à pouvoir utiliser les optons 'Array Radius' et 'Array Axis' de l'effet (c'est la seule chose qui ne pouvait pas être faite directement dans le preset .ffx puisqu'il fallait d'abord grouper le contenu !)
                    monCalque.property("ADBE Effect Parade").property(nomEffetTest).property("Instances Offset").setValue(0) ; //on peut aussi régler une valeur spécifique en scripting si on s'était trompé lors de la création du preset .ffx ! Par exemple ici, je reset la valeur de 'Instances Offset' à 0 car j'avais oublié de le faire avant de faire mon preset (si je n'avais pas ajouté cette ligne, la valeur aurait été de 40 !) 
                }
            }
        }
    }

    function lineR() {//fonction qui va appliquer la duplication linéaire au calque une fois le bouton 4 'Linear Cloner' cliqué
        var maComp = app.project.activeItem; //on déclare la variable 'maComp' et on y stocke la comp active (ouverte dans AfterEffects)
        var monCalque = maComp.selectedLayers[0]; //la variable 'monCalque' stocke le 1er calque sélectionné dans cette comp grâce à l'index 0 puisque 'selectedLayers' renvoie un tableau de tous les calques sélectionnés
        var touches = detect(); //on retrouve le résultat de la fonction 'detect()' (voir plus haut dans les Utilities) et on la stoke dans une variable 'touches'
        var cheminDuPreset = cheminDuDossierAssets+"Linear.ffx"; //on stocke le chemin du fichier de preset en .ffx (on fait un raccourci grâce à 'cheminDuDossierAssets', qu'on a déclaré tout en haut au début dans VARIABLES)
        var monPreset = File(cheminDuPreset); //on stocke également le fichier du preset .ffx lui même dans une variable appelée 'monPreset' pour pouvoir l'appliquer facilement ensuite
        var nomEffetTest = "easyShape - Linear Cloner FX"; //on stocke le nom de l'effet à tester (pour pouvoir vérifier s'il a déjà été appliqué au calque sélectionné) dans une variable 'nomEffetTest'
        
       if (isTheOnlySelectedLayer(maComp)){//on vérifie d'abord qu'il n'y a qu'un seul calque sélectionné dans la comp active, en passant 'maComp' comme argument à la fonction 'isTheOnlySelectedLayer', qui doit renvoyer 'true' si c'est le cas
            if(isShapeLayer(monCalque)){ //on vérifie ensuite que ce calque est bien un calque de forme, en passant 'monCalque' comme argument à la fonction 'isShapeLayer', qui doit renvoyer 'true' si c'est bien un calque de forme
                if(isNotAlreadyApplied(monCalque,nomEffetTest)){ //la dernière condition à vérifier est que l'effet 'nomEffetTest' n'ait pas déjà été appliqué à 'monCalque', en passant ces 2 arguments à la fonction 'isNotAlreadyApplied'
                    monCalque.applyPreset(monPreset); //si toutes ces conditions sont 'true' on applique le preset stocké dans 'monPreset' au seul et unique calque sélectionné, identifié par 'monCalque'
                }
            }
        }
    }

    function gridC() {//fonction qui va appliquer la duplication en grille au calque une fois le bouton 5 'Grid Cloner' cliqué
        var maComp = app.project.activeItem; //on déclare la variable 'maComp' et on y stocke la comp active (ouverte dans AfterEffects)
        var monCalque = maComp.selectedLayers[0]; //la variable 'monCalque' stocke le 1er calque sélectionné dans cette comp grâce à l'index 0 puisque 'selectedLayers' renvoie un tableau de tous les calques sélectionnés
        var touches = detect(); //on retrouve le résultat de la fonction 'detect()' (voir plus haut dans les Utilities) et on la stoke dans une variable 'touches'
        var cheminDuPreset = cheminDuDossierAssets+"Grid.ffx"; //on stocke le chemin du fichier de preset en .ffx (on fait un raccourci grâce à 'cheminDuDossierAssets', qu'on a déclaré tout en haut au début dans VARIABLES)
        var monPreset = File(cheminDuPreset); //on stocke également le fichier du preset .ffx lui même dans une variable appelée 'monPreset' pour pouvoir l'appliquer facilement ensuite
        var nomEffetTest = "easyShape - Grid Cloner FX"; //on stocke le nom de l'effet à tester (pour pouvoir vérifier s'il a déjà été appliqué au calque sélectionné) dans une variable 'nomEffetTest'
        
       if (isTheOnlySelectedLayer(maComp)){//on vérifie d'abord qu'il n'y a qu'un seul calque sélectionné dans la comp active, en passant 'maComp' comme argument à la fonction 'isTheOnlySelectedLayer', qui doit renvoyer 'true' si c'est le cas
            if(isShapeLayer(monCalque)){ //on vérifie ensuite que ce calque est bien un calque de forme, en passant 'monCalque' comme argument à la fonction 'isShapeLayer', qui doit renvoyer 'true' si c'est bien un calque de forme
                if(isNotAlreadyApplied(monCalque,nomEffetTest)){ //la dernière condition à vérifier est que l'effet 'nomEffetTest' n'ait pas déjà été appliqué à 'monCalque', en passant ces 2 arguments à la fonction 'isNotAlreadyApplied'
                    monCalque.applyPreset(monPreset); //si toutes ces conditions sont 'true' on applique le preset stocké dans 'monPreset' au seul et unique calque sélectionné, identifié par 'monCalque'
                }
            }
        }
    }

    function helpInfo() { //fonction qui ouvre une nouvelle fenêtre, avec diverses informations autour de l'outil, une fois le bouton 6 'Help & Info' cliqué
        var w = new Window ("dialog", nomDeMonScript + " Help and Info"); // on créé une nouvelle fenêtre de type 'dialog' qu'on va stocker dans une variable 'w'
        var largeurDesBoutons = 280 ; // on stocke une variable 'largeurDesBoutons' avec une valeur en pixels pour pouvoir l'appliquer ensuite à la largeur de tous les boutons de cette fenêtre (pour plus de cohérence)
        w.margins = 24; //cet attribut permet de définir les marges extérieures de la fenêtre 'w' pour faire respirer l'ensemble (pas obligatoire car il y a déjà une valeur minimum par défaut que fonctionne plutôt pas mal sur tous les OS)
        w.spacing = 12; //celui-ci permet de régler l'espacement entre les différents éléments contenus dans ma fenêtre 'w' (là encore pas obligatoir ; mais ça permet de rester précisément comme on l'a décidé quel que soit l'OS). À noter qu'une valeur à 0 permettrait de 'coller' tous les éléments bord à bord
        var monTexteInfos = "\n" //toutes les lignes qui vont suivre entre guillemets constituent le texte qui sera dans l'espace scrollable dédié (voir plus bas). Pour éviter un pavé indigeste, il est préférable de procéder comme ici, en passant des lignes avec le '\n' et en ajoutant les lignes les unes à la suites autres grâce au signe '+' (on appelle ça la 'concaténation de chaînes de carractères' en développement).
        //A noter : les espaces et lignes vides ne seront pas utilisées
        +"1. SYMMETRY :" + "\n"
        +"Applies a mirror effect to the selected shape layer (horizontal by default) ;" + "\n"
        +"Hold down SHIFT while clicking this button if you prefer a vertical mirror effect" + "\n"
        +"or SHIFT+ALT if you want both axis to be mirrored" + "\n"

        + "\n"

        +"2. METABALL :" + "\n"
        +"Applies an organic blobby effect to the selected shape layer (based on an original idea from Matthieu Wlazinski from Motion Cafe) ; Just play with the Blobbiness slider in the Metaball FX and adjust the Shrink / Grow value if needed." + "\n"
        +"Please note that you'll end up with an additionnal Fill color in Shape Layer's content, that you can tweak directly in the Metaball FX effect." + "\n"

        + "\n"

        +"3. RADIAL ARRAY :" + "\n"
        +"Duplicates the design grouped in the selected Shape Layer and arranges the instances on a ring shape. You can then tweak this ring's Radius, Axis and Angle of completion. A sub-group called 'Per Step Transform' gives you the ability to tweak the Repeater transform properties without leaving the Effect panel so you won't have to twirl down the Shape Layer's content sub-groups at all. By playing with these values - especially with the Per Step Scale - , in conjunction with the Instances Count and Angle of Completion, you can even create some cool spiral effects !" + "\n"
        +"Please note that it will group all the content of your selected Shape Layer." + "\n"

        + "\n"

        +"4. LINEAR CLONER :" + "\n"
        +"Duplicates the content of the selected Shape Layer and arranges the instances on a simple line. You can then tweak the number of instances with the Clones Count slider, and choose if you prefer your layer to be centered on the first clone or on the middle average of them, by ticking the Center Clones checkbox on/off. A sub-group called 'Per Step Transform' gives you the ability to tweak the Repeater transform properties without leaving the Effect panel so you won't have to twirl down the Shape Layer's content sub-groups at all. For example, you'll be able to change the gap between the clones by tweakin the Per Step Position on the X axis ; or your can adjust its Y axis value to create some vertical or even diagonal arrangements as well." + "\n"
        +"Keep in mind that this is just a standard, native, Shape Layer Repeater, so don't be afraid to remove the expressions and tweak them manually :)" + "\n"

        + "\n"

        +"5. GRID CLONER :" + "\n"
        +"Duplicates the content of the selected Shape Layer and arranges the instances in a geometric grid. This is usually easier to tweak this one compared to the Linear Cloner, because you won't have to play with some Per Step Transform properties ! Just play with the 2 X/Y Clones Count sliders and adjust the Gap for both axis, in order to achieve the desired effect." + "\n"
        +"Again, this feature just use a standard, native Repeater (twice this time, one Repeater for each axis), so don't be afraid to remove the expressions in the Shape Layer's content and tweak them manually :)" + "\n"

        + "\n"

        +"*******************************" + "\n"

        + "\n"

        +"FINAL NOTES :" + "\n"
        +"Please keep in mind that you won't be able to apply an easyShape FX' effect more than once on a same Shape layer ! If you try to click on a tool's button (let say the 'Symmetry FX' for example) while your selected Shape Layer has already this same effect being applied to it (it has already an 'easyShape - Symmetry FX' effect on it in our example), a message will pop up in order to warn you about that and the effect won't be applied." + "\n"
        +"Happy Shape Layer effects and see you for other cool After Effects stuff :)" + "\n" ;

        //on ajoute ensuite, élément par élément, dans l'ordre que l'on souhaite afficher de haut en bas (car l'orientation par défaut d'une fenêtre est en colonne en non en ligne), les différents composants :

        var monTitre = w.add ("statictext", [0, 0, 500, 32], nomDeMonScript + " " + versionDuScript + " - Created by Matthieu Fremeaux (aka FREMOX) from MotionCafe\nApply some cool effects to your After Effects' selected shape layer with the click of a button !", {multiline: true}); //...d'abord le texte d'intro en haut de la fenêtre, en texte 'statique' car c'est un texte simple et relativement court ; il peut néanmois apparaître sur plusieurs lignes grâce au paramètre '{multiline: true}'

        var mesInfos = w.add ("edittext", [0, 0, 500, 200], monTexteInfos, {multiline: true, scrolling: true, readonly: true}); //puis un 'edittext' scrollable (grâce au paramètre {scrolling: true}) où apparait tout le texte contenu dans la variable 'monTextInfos' déclaré plus haut. Le tableau '[0, 0, 500, 200]' permet de spécifier les dimensions de cette zone, respectivement 500px de large et 200px de haut dans notre cas. Le multiline est rendu possible grâce au paramètre '{multiline: true}', tandis que le paramètre 'readonly: true' empêche l'utilisateur d'éditer lui-même le texte car c'est normalement le but premier d'un 'edittext' (d'où son nom d'ailleurs !)

        var monBTNfremoxSurAescripts = w.add ("button", undefined, "See Fremox's other products on aescripts", {name: "ok"}); //on peut aussi ajouter des boutons textuels ; ici un bouton pour renvoyer vers mes scripts sur aescript
        monBTNfremoxSurAescripts.preferredSize.width = largeurDesBoutons; //on peut spécifier une taille particulière à n'importe quel composant pour obtenir exactement le style d'UI que l'on souhaite : ici la largeur est définie par la variable 'largeurDesBoutons' déclarée plus haut, au début de la fonction helpInfo()
        // À noter : l'ajout de {name: "ok"} dans les paramètres permet 'd'écouter' l'appui sur la touche ENTRÉE du clavier ; en appuyant sur cette touche, ce sera ce bouton qui sera pressé automatiquement !
        monBTNfremoxSurAescripts.onClick = function () { //on peut alors - à condition d'avoir stocké le bouton dans une variable (ici c'est le cas et elle s'appelle 'monBTNfremoxSurAescripts') - exécuter une fonction lorsqu'on clique dessus
            openURL("https://aescripts.com/authors/f-l/fremox/"); //ici, cette fonction qu'on appelle anonyme (car on ne lui a pas donné de nom), permet d'ouvrir le lien URL mis en argument de la fonction 'openURL()'
        }

        var monBTNfremoxSurGumroad = w.add ("button", undefined, "See Fremox's other products on Gumroad"); //on ajoute ensuite autant de boutons que l'on souhaite ; celui pour renvoyer vers mes scripts sur Gumroad (notamment FX TextFrame !)
        monBTNfremoxSurGumroad.preferredSize.width = largeurDesBoutons; //on spécifie encore ici la largeur définie par la variable 'largeurDesBoutons' déclarée plus haut, au début de la fonction helpInfo()
        monBTNfremoxSurGumroad.onClick = function () { //on peut alors - à condition d'avoir stocké le bouton dans une variable (ici c'est le cas et elle s'appelle 'monBTNfremoxSurGumroad') - exécuter une fonction lorsqu'on clique dessus
            openURL("https://gumroad.com/fremox");//ici, cette fonction qu'on appelle anonyme (car on ne lui a pas donné de nom), permet d'ouvrir le lien URL mis en argument de la fonction 'openURL()'
        }

        var monBTNliveAdobe = w.add ("button", undefined, "See Fremox creating this tool on Adobe France"); //on peut aussi ajouter des boutons textuels ; ici un bouton pour renvoyer vers scripts sur aescript
        monBTNliveAdobe.preferredSize.width = largeurDesBoutons; //on spécifie encore ici la largeur définie par la variable 'largeurDesBoutons' déclarée plus haut, au début de la fonction helpInfo()
        monBTNliveAdobe.onClick = function () { //on peut alors - à condition d'avoir stocké le bouton dans une variable (ici c'est le cas et elle s'appelle 'monBTNliveAdobe') - exécuter une fonction lorsqu'on clique dessus
            openURL("https://www.youtube.com/watch?v=2hV5lxPfqI4&feature=emb_logo&ab_channel=AdobeFrance");//ici, cette fonction qu'on appelle anonyme (car on ne lui a pas donné de nom), permet d'ouvrir le lien URL mis en argument de la fonction 'openURL()'
        }

        var monBTNclose = w.add ("button", undefined, "Close (or press ESC)", {name: "cancel"}); //on créé enfin un dernier bouton qu'on ajoute à la fenêtre 'w' , qui servira juste à fermer la fenêtre. A noter que l'ajout de {name: "cancel"} dans les paramètres permet de pouvoir 'écouter la touche ECHAP' ; en appuyant sur cette touche du clavier la fenêtre se fermera alors ! 
        monBTNclose.preferredSize.width = largeurDesBoutons; //on spécifie encore ici la largeur définie par la variable 'largeurDesBoutons' déclarée plus haut, au début de la fonction helpInfo(), toujours dans un soucis de cohérence avec les autres boutons (et éviter ainsi les 'escaliers de tailles' entre les boutons, jamais très ésthétiques, car ce type de boutons s'adapte automatiquement à son contenu textuel par défaut)

        w.show (); //une fois toute la construction des éléments 'lue' par la machine, afficher la fenêtre avec tout son contenu
    }


// ===== UI ======
    
    // ----- Create UI -----
    {
        var monPanel = null; //on déclare la variable 'monPanel' en premier et on l'initialise à 'null' pour éviter les problèmes potentiels avec d'autres scripts
        if ( thisObj instanceof Panel ) { //si le script est lancé depuis le menu 'fenêtres' ('window') d'AfterEffects, il s'agit d'un scriptUI Panel, qui pourra alors être 'docké' dans l'interface comme les autres panneaux natifs d'AE.
            monPanel = thisObj; //on ré-initialise 'monPanel' en 'thisObj' plutôt que 'null'. Le 'thisObj' renvoie ici au panneau du script (UI panel) lui-même 
        }else{ //sinon (sous-entendu, le script est plutôt lancé depuis le menu 'Fichier > Script > Executer le script...')
            monPanel = new Window('palette', nomDeMonScript, undefined, { resizeable: true }); //... monPanel sera alors initialisé entant que nouvelle fenêtre de type 'palette' (qui elle ne pourra pas être 'dockée' dans l'interface)
        }

        monPanel.alignChildren = ['fill','fill']; //afin de pouvoir redimensionner le panneau et que les boutons icônes s'adaptent de manière fluide, il faut au préalable forcer les éléments contenus dans 'monPanel' à remplir tout l'espace, en mettant la valeur 'fill' aux dimensions horizontales et verticales de l'attribut '.alignChildern'

        var monGroupe = monPanel.add('group'); //on créé un groupe dans 'monPanel' que l'on stocke dans la variable 'monGroupe' pour pouvoir modifier ensuite les propriétés de ce group et lui ajouter des éléments
        monGroupe.orientation = 'row'; //l'attribut 'orientation' permet de forcer les éléments contenus dans m'onGroup' (les boutons icônes que l'on va ajouter ensuite) à apparaître en ligne horizontale, les uns à la suite des autres de gauche à droite puisque sa valeur est 'row' (= 'ligne' en français). Si on avait assigné la valeur 'column' à cet attribut, ces mêmes éléments (boutons icônes) auraient été disposés en colonne verticale, de haut en bas (c'est d'ailleurs ce qui se passera lorsqu'on redimensionnera le panneau, et que sa hauteur sera supérieure à la largeur, grâce à la condition 'ternaire' définie à la ligne 362)
        monGroupe.alignChildren = ['fill','fill']; //comme pour 'monPanel', il faut aussi forcer les éléments contenus dans 'monGroupe' à remplir tout l'espace sur les 2 dimensions, grâce à l'attribut '.alignChildren' auquel on assigne la valeur ['fill','fill']

        var monBTN1 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_Symmetry.png"), {style: "toolbutton"}); //on ajoute à 'monGroupe' un 1er bouton icône pour l'outil 'Symmetry'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN1.helpTip ="Symmetry (see Help for shortcuts)"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes
            
        var monBTN2 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_Metaball.png"), {style: "toolbutton"});//on ajoute à 'monGroupe' une 2ème bouton icône pour l'outil 'Metaball'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN2.helpTip = "Metaball"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes

        var monBTN3 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_Radial.png"), {style: "toolbutton"});//on ajoute à 'monGroupe' un 3ème bouton icône pour l'outil 'Radial Array'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN3.helpTip = "Radial Array"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes

        var monBTN4 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_Linear.png"), {style: "toolbutton"});//on ajoute à 'monGroupe' un 4ème bouton icône pour l'outil 'Linear Cloner'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN4.helpTip = "Linear Cloner"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes

        var monBTN5 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_Grid.png"), {style: "toolbutton"});//on ajoute à 'monGroupe' un 5ème bouton icône pour l'outil 'Grid Cloner'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN5.helpTip = "Grid Cloner"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes

        var monBTN6 = monGroupe.add("iconbutton", undefined, File(cheminDuDossierAssets+"icon_HelpInfo.png"), {style: "toolbutton"});//on ajoute à 'monGroupe' un 6ème bouton icône pour afficher les 'Help & Info'. Pour un bouton icône, il suffit de spécifier 'iconbutton' comme type de composant, de mettre 'undefined' pour ne pas toucher au placement et aux dimensions du bouton et de spécifier le fichier image à utiliser pour l'icône (encore une fois rendu plus facile à écrire grâce au raccourci 'cheminDuDossierAssets', comme nous l'avions fait pour les presets en .ffx dans les Core Fonctions). A noter : '{style: "toolbutton"}' permet de ne pas afficher le contour des boutons, pour donner un aspect minimaliste et plus moderne à l'ensemble, mais ce n'est pas une obligation de l'ajouter !
        monBTN6.helpTip = "Help & Info"; // l'attribut 'helpTip' permert d'afficher une chaîne de carractères spécifique lorsqu'on passe en rollover avec la souris au dessus des boutons icônes

    }
    
    // ----- Click events -----

    monBTN1.onClick = function () { //puisqu'on a stocké la variable 'monBNT1' lors de la création du 1er bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    app.beginUndoGroup("Apply Symmetry FX"); //on encapsule la fonction appelée au clic dans un 'app.beginUndoGroup()' pour pouvoir annuler/rétablir son exécution dans AfterEffects en une seule fois (très important surtout pour des scripts qui lancent des fonctions complexe qui exécutent beaucoup de tâches ! Dans ce cas vous seriez bien ennuyés de devoir faire des CTRL/CMD + Z des dizaines et dizaines de fois !)
    sym() ; //exécute la fonction 'sym()' qui est la fonction qui va appliquer la Symmétrie au calque sélectionné s'il rencontre toutes les conditions nécessaires, comme décrit plus haut dans les Core Functions
    app.endUndoGroup; //on ferme le 'UndoGroup' ouvert précédemment en ajoutant cette fois '.end' au début (fonctionne un peu comme une balise en web)
    }
    
    monBTN2.onClick = function () { //puisqu'on a stocké la variable 'monBNT2' lors de la création du 2ème bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    app.beginUndoGroup("Apply Metaball FX"); //on encapsule la fonction appelée au clic dans un 'app.beginUndoGroup()' pour pouvoir annuler/rétablir son exécution dans AfterEffects en une seule fois (très important surtout pour des scripts qui lancent des fonctions complexe qui exécutent beaucoup de tâches ! Dans ce cas vous seriez bien ennuyés de devoir faire des CTRL/CMD + Z des dizaines et dizaines de fois !)
    meta() ; //exécute la fonction 'meta()' qui est la fonction qui va appliquer le Metaball FX au calque sélectionné s'il rencontre toutes les conditions nécessaires, comme décrit plus haut dans les Core Functions
    app.endUndoGroup;
    }

    monBTN3.onClick = function () { //puisqu'on a stocké la variable 'monBNT3' lors de la création du 3ème bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    app.beginUndoGroup("Duplicate in Radial Array"); //on encapsule la fonction appelée au clic dans un 'app.beginUndoGroup()' pour pouvoir annuler/rétablir son exécution dans AfterEffects en une seule fois (très important surtout pour des scripts qui lancent des fonctions complexe qui exécutent beaucoup de tâches ! Dans ce cas vous seriez bien ennuyés de devoir faire des CTRL/CMD + Z des dizaines et dizaines de fois !)
    radial() ; //exécute la fonction 'radial()' qui est la fonction qui va dupliquer le contenu du calque sélectionné (s'il rencontre toutes les conditions nécessaires) en cercle, comme décrit plus haut dans les Core Functions
    app.endUndoGroup;
    }

    monBTN4.onClick = function () { //puisqu'on a stocké la variable 'monBNT4' lors de la création du 4ème bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    app.beginUndoGroup("Use Linear Cloner"); //on encapsule la fonction appelée au clic dans un 'app.beginUndoGroup()' pour pouvoir annuler/rétablir son exécution dans AfterEffects en une seule fois (très important surtout pour des scripts qui lancent des fonctions complexe qui exécutent beaucoup de tâches ! Dans ce cas vous seriez bien ennuyés de devoir faire des CTRL/CMD + Z des dizaines et dizaines de fois !)
    lineR() ; //exécute la fonction 'lineR()' qui est la fonction qui va dupliquer le contenu du calque sélectionné (s'il rencontre toutes les conditions nécessaires) en ligne, comme décrit plus haut dans les Core Functions
    app.endUndoGroup;
    }

    monBTN5.onClick = function () { //puisqu'on a stocké la variable 'monBNT5 lors de la création du 5ème bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    app.beginUndoGroup("Use Grid Cloner"); //on encapsule la fonction appelée au clic dans un 'app.beginUndoGroup()' pour pouvoir annuler/rétablir son exécution dans AfterEffects en une seule fois (très important surtout pour des scripts qui lancent des fonctions complexe qui exécutent beaucoup de tâches ! Dans ce cas vous seriez bien ennuyés de devoir faire des CTRL/CMD + Z des dizaines et dizaines de fois !)
    gridC() ; //exécute la fonction 'gridC()' qui est la fonction qui va dupliquer le contenu du calque sélectionné (s'il rencontre toutes les conditions nécessaires) en grille, comme décrit plus haut dans les Core Functions
    app.endUndoGroup;
    }

    monBTN6.onClick = function () { //puisqu'on a stocké la variable 'monBNT6' lors de la création du 6ème bouton, on peut ensuite demander à exécuter une fonction lorsque l'on clique dessus
    // pas besoin cette fois d'encapsuler la fonction dans un UndoGroup() puisqu'on ne fait qu'ouvrir une autre fenêtre !
    helpInfo() ; //exécute la fonction 'helpInfo()' qui est la fonction qui va ouvrir une nouvelle fenêtre avec des infos et boutons en rapport avec le script, comme décrit plus haut dans les Core Functions
    }
    
    // ----- Show UI -----

    monPanel.layout.layout(true); //cette ligne de code est indispensable pour pouvoir réorganiser les éléments constituant notre UI panel 'à la volée' (le rediensionner par exemple)
    monPanel.layout.resize(); //cette ligne de code spécifie qu'on souhaite spécifiquement 'écouter' l'évènement de type 'resize' (qu'on on tire sur les bords du panneau pour le redimensionner)
    monPanel.onResizing = monPanel.onResize = function () //et lorsque justement on redimensionne le panneau (confirmé par 'on.Resizing' et '.onResize'), alors on exécute une nouvelle fonction anonyme (car sans nom) qui va...
    {
        monPanel.onResize = function () { //...
        monGroupe.orientation = monPanel.size.width > monPanel.size.height ? 'row' : 'column'; //...forcer le groupe 'monGroupe' dans le panneau 'monPanel' à réorganiser les éléments qu'il contient, suivant que la largeur du panneau est supérieure à sa hauteur (auquel cas l'attribut '.orientation' prend la valeur 'row' pour les organiser en ligne horizontale - c'est le cas par défaut), ou au contraire que la largeur est inférieure à la hauteur du panneau (auquel cas les éléments qu'il contient seront réorganisés en colonne verticale grâce à la valeur 'column' que prendre alors l'attribut '.orientation' de 'monGroup').
        //A noter : cette syntaxe est une autre forme, un peu moins répandue, de condition (appelée "ternaire"). Dans ce cas, on n'utilise plus les mots clés 'if' et 'else' mais les signes ' ? ' et ' : ' , qui permettent de gagner de la place et donc de garder un code plus concis (mais un peu moins lisible pour les novices donc... Ne pas en abuser !)
        monPanel.layout.resize(); //on rappelle à nouveau 'l'écoute' de l'évènement '.resize()' pour nous assurer que notre fonction s'exécute à chaque fois que l'on redimensionne le panneau
        }
    }
    if ( monPanel instanceof Window ) { //si le script est lancé depuis le menu 'Fichier > Scripts > Executer le script', on a affaire à une fenêtre de type 'Window' et non 'UI Panel'... 
        monPanel.show(); //Dans ce cas, nous devons afficher cette fenêtre car sinon rien ne s'ouvrira et aucun outil ne sera utilisable !
    }
}// on ne doit pas oublier de bien fermer l'accolade ouverte au tout début de notre script par notre fonction anonyme globale
)(this); //'this' est l'argument passé à la fonction globale anonyme ; Ce mot clé renvoie à l'objet globale, et dans le cadre de notre script, il s'agit de la fenêtre ou de l'UI Panel
