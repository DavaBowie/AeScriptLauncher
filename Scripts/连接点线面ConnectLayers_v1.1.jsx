// Copyright (c) 2015 MONTER AECLUB :)
function ConnectLayers() {
    var connectLayers, utils;
    connectLayers = this;
    utils = new ConnectLayersUtils();
    this.scriptName = "Connect Layers";
    this.scriptVersion = "1.1";
    this.scriptCopyright = "Copyright (c) 2014 Motion Boutique";
    this.scriptHomepage = "www.motionboutique.com";
    this.scriptDescription = {
        en: "This script connects the selected layers with segments or triangles created with shape layers.\\r\\rRope: creates a single shape layer with a path connecting the selected layers (2D only). Use AutoBezier or Tension options to get rounded joint style.\\r\\rTree: computes minimum spanning tree and draws each edge with a shape layer (2D and 3D support).\\r\\rTriangulation: triangulates the selected layers and draws each edge with a shape layer (2D and 3D support). If you want filled triangles (not just the edges), activate the Fill Triangles switch in the Options dialog. By default they will be filled with the same color, but you can also choose a source layer to colorize them.\\r\\rNote that for functions that create shape keyframes (Triangulation with Filled Triangles turned on, and Rope), keyframing is done within the comp work area.",
        fr: "Ce script relie les calques s\xe9lectionn\xe9s avec des segments ou des triangles cr\xe9\xe9s avec des calques de formes.\\r\\rCorde: cr\xe9e un calque de forme avec un trac\xe9 connectant les calques s\xe9lectionn\xe9s (2D seulement). Utilisez les options AutoBezier ou Tension pour avoir des joints arrondis.\\r\\rArbre: calcule un arbre couvrant minimum et dessine chaque ar\xeate avec un calque de forme (supporte 2D et 3D).\\r\\rTriangulation: triangule les calques s\xe9lectionn\xe9s et dessine chaque ar\xeate avec un calque de forme (supporte 2D and 3D). Si vous souhaitez des triangles remplis (pas seulement les ar\xeates), activez l\\'option Remplir les triangles dans le dialogue des options. Par d\xe9faut ils seront remplis en blanc, mais vous pouvez aussi choisir un calque source pour les colorer.\\r\\rNotez que pour les fonctions cr\xe9ant des images cl\xe9s pour le Trac\xe9 (Triangulation lorsque Remplir les triangles est coch\xe9 et Corde), la cr\xe9ation de cl\xe9s se fait sur la dur\xe9e de la zone de travail."
    };
    this.scriptAbout = {
        en: (this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription)),
        fr: (this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription))
    };
    this.scriptUsage = {
        en: "\u25ba Click on the function you want to execute\\r\u25ba Optionally, open the Options dialog to adjust parameters",
        fr: "\u25ba Cliquez sur la fonction \xe0 ex\xe9cuter\\r\u25ba Optionnellement ouvrez le dialogue des Options pour ajuster les param\xe8tres"
    };
    this.headerImgData = "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\xc3\x00\x00\x001\x08\x02\x00\x00\x00\xe8G\x8a\xef\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\xc9e<\x00\x00\x03$iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\xef\xbb\xbf\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.3-c011 66.145661, 2012/02/06-14:56:27        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmp:CreatorTool=\"Adobe Photoshop CS6 (Macintosh)\" xmpMM:InstanceID=\"xmp.iid:D5F00D7DC15B11E2A331BAC9DE75E25B\" xmpMM:DocumentID=\"xmp.did:D5F00D7EC15B11E2A331BAC9DE75E25B\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:D5F00D7BC15B11E2A331BAC9DE75E25B\" stRef:documentID=\"xmp.did:D5F00D7CC15B11E2A331BAC9DE75E25B\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\xc4\x96W\xed\x00\x00:TIDATx\xdal\xbd\xf7\x97\\\xc7\x95&\xf8\xe2\xd9\xf4\xde\x95\xf7\x05\xa0\xe0\x08\x90 @+\x1a\xa9\xa5\x99\xee\x99\xd6\xb4\xa6Gg\xf6\x9c\xd9\xfdy\xff\xb0={\xba\xa7{\xb6G-\xa9I\x89\xa4\xe8 \x91 \x08o\n(\xef\xb3\xd2\xfb|\xf9L\xc4\xde\x88\xe7\"\x0b]\x00\n\x99\xf9|\xc4\x8d\xef~\xd7&\xfa\xf9\xdf\xfd\x8a\x08\x82\x80D\x84\x04\x11\x89\x02\x82\x1f\xf8%:\xbf\xfc\x1fA\x10EQ`[E\x91\xfd\x12\xe8GH`{\xd2mtw\x91\x1dBO\xc5\xf6r\xde\x88\xb6(\x99\xbd^<*`%\xe5\x9c\x92\xed\xe7\xfc\x82\xf3\x882\x12\x8a\xd9\xc8\x00\x85\xba\x9d\x81\xec\x9cN\x92\xf5\xc1\x00\x99\xedXf\x8a \xc9?Ht\xee\xce}\x85\xdc\x1b\x16\xb0(X\x82\x80\x91\xa8\x89r\xa8\xdd8Q\x14\xc5\xc6H\x13\rE\x0b\x8bJTV\xc3\xb6e/N\xe7\x8aS3\xdf\xff\xf0P\x96e\x01\xce\"\x08\x9a\xaa\xea\xddJW'\x99\\\x91`\x9b\x9e\x9a~\xcc\x1e\x179\x83\"\xb0\x1f\xc4\xde\xb9/\xbd\xcf\x9c\x9d\xe1\x03\xe2\xbfC\xeeN\xf0C\xbc]\t\x12\xfc\x83\xe1\x7f\xc2\xbd\xf1\xf7%\xdeV\xe7@\x12|H\xdc\x7f\xf4=\xf1\xb6:\x7f\xe8'\xfc\x9e\x84 \xfa\x01b/\x9c\x0f\xe9[\xfa\x8b;\x8a\x8c\x9d\xda;\x87\xff\x0f;[\x88wQw/\xf7rBp\x1c\xfdC\xbc\xdd\x04\t&\x8c{\x06\xff\xff\xb1gw?\x17\xbd\x11F\xde\xc0\xba\xaf\x10\xf7\xd6\x1btA\x14\x04o\xab(\x9a\xba\xa1IC\xa2\xe4\x9d\x9d\x11\x9d~\x91m\x141\x11\xc3\x12\xc9\xe7\xe2\x1dK\x1dt\xfa\x92\x04\x07\xd1\x7fp\x93\x91h|\xd0\xb5\x88\xd9\x15Ci\x98\x0e\xff\x06\x11\x13yg\xca\x89s%Q\x12\x90\"\x10\x9b`\xd36\xba\xf1x\xaa\xdd\xae\xc1!\xd1\xa8,\xca\xaa\xac\x84\xd83#E\x12M\x1b;\x03\xc7n\x1a\x19\xa6\x15O\xe7k[\xeb\x96\x95\x91\xe0\xdat`\x90\xff\xf4\xc8\x19r\xe4L\x86\xb7\x81M\x0e\x93\x1fOl\x02Q\xa1\x13\xe8\xbeq\x84\x88\x9d\x8e\xb8\xb7\xce\x0e \xfeYy\xd1\xf1e\xc6=\xdc9\x8f\xb3\xdb\xd8fw\xda\x1d\x99\xf1\xe4\xc7\xdd@\x1c\x99\xc1\xf4\x9f'%\x81\x94\x05\x9f\xf0\xb2\xcb>'\x02/&\xae\x8cx\x17\x1f\xdb@\xb8]|\xa9\xa4g\x80\x87\x14\t\x12<\xf1xE\x9a\xdc\xb5\xe9\x8eK '\xee\x12t\xff\"wz]\xc9\x11\x841q3mA\x18u\xe5p\x94\x10\x19\t$8\x1e!\x8c\x85\x98L\x8a\xa5t]\x97{\xed\x0e\xc3<\x91m\x14\xd9\x89H8\x9e\x19\x0et\x05\x19\x8e\xe4\x89\xdc4\x13\xc1\x81\xca@\xde\x11\x92\x01~\x90\x1c\x82O\xa3\xe1\x88e\xf4@P\x08H\x98#\xb5\x02\x91D4\x1a\x99\x82/'\x88\x8e\x85\x89\xa5\xd9\xe9\x99V\xa3\xc2 \x97\x8e\x8c\xe8\xdc\xa4\xb7\xee\xd9KWj\xbd'\xf4\xc1\x86\xfe\xe5\xa0\xc5\xfb\xcc\x15I\x81\x93\x1cW>\xd8_D|\xe4!L*\xfcu\xcec\x0e;\xb7+8\xfe\x84;'\xf3\x11\x89\x9d\x0e\x13\xe2\xbe\xc6\xc1\x87\xf0\x1fv?$\x18\x13\xf7\x13\x81\xf8\x9b\xe8_\x8c\xbd\x17\xce'\xf4\xbd\x8d\x9d\x03\xd9V\xec\xed\xc66`\xb6\x87\xed\xbf\xf3~l\x1b>\xb4\xa92!\xc1\"t$\xc3\x1d/\xff\xd3\xe0\x7f\xfe\x83\xb1\xf7\xfe\xec8g \xee,#Q\xef\x0f\xe2!\"H1\x1f\xd0\x9c?\x16&\xb90J\x162'\r\xd3\xd6\x87\x92\"\xf2W@Lg\xc0\xdc\xcb\x91\x9c1\xe8h\xc9\xa8i\x12\xe7\xde\\is\xa4\x89!%!\xae>\x82Q\x12E\x05\x89\x8a\"i\x13!5\x19\x11\xfbD\x03\x1cr\x94THSA\xb8\xbc\x19v\xd5\xcfH\x1f%cI\x89TL\xc3\x94\x15\x89\xa1\x01B\x01\\ G&\x18\x9ep\x9a\x89\xf0\x8b\xca9\x9f\x8f.\xce\xd3{k\x99b\x92\xb3+\xe1\x0e\x16\x02}\xe6\x82\x9cs\r\xc2\x9f\xc8G@\xe2\x03$\x07Q\x84\xd7x<\xaa\x90@\x13y\x88\xc5\x89\xaa\x03\\\xbc\x84\xfa\x88\xe5\xcb\xb6\x8be\xde\xd63\x888\xf6\x81\xbb\x1bFD\x14|D\t\x06G\x08\x16\x9e;\xff\xc4\x17.O\xcex=(\x12\x7f\xa3\x0b8\x0c^DQ\x1fY\x1a\xeeH\xa1\xa4\x0fFl\x1f\x11d\xb8\x18\x07!\xc9\x1d\xd6tK\x1f\x882eK\x0e\x14\xc1o\xc1\x9bJx MSG$,[\x1dY\x91\xd9#0e\xe1\xde\x9b7u<9\x11\xe8r\t+\xd2\x85\xf3\xe7\x0b3+a\x05\x9b\x86\xee\x10\x1eEU\x0c\xcbv\xf7C\xc4W\x96#\x8b\xe4r\xf9z\xf5H\x14eF3\xbc\xc1&\x9e\xearU\xa9\x83\x12$\x98\xb91\x8a\xe1\xdf\x88\xab\xa6\xd8$\"\x0e\xdc8\xf8\xf4 \xceE1\x8f\xc8\x10\x1f\x06y\x8e\xc2>\xc2\x1e\xa0\x05\xb7@\xce \x99?\xb3\xae48\x02\xe1\"\x96\xe0\xa0\x0fqP\x08{\xb0D\x88\x8bY\x1c89\x7f(8\xb9\xc0\xe6B\x91\xf3?vw\xb3\xb1\x07R\xf4\x9f\x85\xb1\xec\xc9\xbc\xa78\x10\x1a\xd7n\xaeT\xb9\x04r\x1c\xad|\x8d\x86\xf8\xbd\xbd\x83L\x82\xacA;\x1c\x0f\x13\x14\xf2E\x8c\xfe\xc6x2\x1b\x16\xe2\x99\xe3\x93\xb6HL\x87\xab\xb9\xeb\xdeS\x97\xecl\xa2\x03\x03Z$\xde\xee\xb7\x0by\xab\x03w\xcb\x94\x01C,F\xec\x05\x9f0Q\xe2\x02\x02l\xdb$\x1e\x92V\xe6'\xf6\xea}d\xe8\x93\x85\x9cn\x9c\xea\x16e\xd3\xc0\n\rC\x7f\x15L\x87##\x9b\xccEZ\xad\xc1`\x10\xd6\xb4\x00\x0fP@V\x1ch\xf1\x8f$\xc1\x0b\x82|\xa9\xf4\xf6\xf5%\x9c\x10!\xc0\xa3\xe0\x17;\xc2\x05#\x9e\xafxS1\x0eK\xbc\xee$<\xf8\xb8\xb0\xe2\xc3\xcc\x19\xb0 \x1c\xbb\x1a\xe3X\x01\x17\xf2\x11g\x8cM\x05K\x89\xd1-\xcc\xe1\xdf\xf8\x91\x84p\xd4\x8b\xb2\x02\x8e\x0f\n\xdc\n\x1c\x7f\x0e\x8f-\xf2\x8a\x8d7l\\\xd6\x14P\tQ\x1c\xf4tM6D5\xe9\xb0\x1a\xf8\x8b)|\xe1\x99B\xd4\x08g\x8e\x0f\xeb\x88\x98\xc8e'>y\x0ft\xaa\xbf\x84\xe1\x16E-\xd1\xeftR1\x05\xfbs\x83\xc6\xd0\xde9\x0b\xac\x9bxH^\x9c+\xed\xd6\xfa\xf5jS\x96\xd0\xc0\x14\xd2\xc9$\x12L\x10;\x807cd8\x8a0\xb0H\x18\x8d\xea\r\xcc|\xae\xd0\xa4\xb0$\xf9\x1c\x9a\x138D8\x1d\xe1\xd2\x1f\x07r\x1c\xa6D8\x82\xe3\"\x1e\xf2`B\x08`\xc2\x13?^\xddx\x84\xc9\xc5;\x81\x87%\xe2\xeb*\xe7#\xc4\xeb6\xe2\x00\x950\x86O\xf0\x1b\x07\x92Fx;\xd0\xc3\xad\xc0\xea#.&\tc\xe4\xc9cW\xc4\xc5$\xc1\x85%wg\x9fE\xb9\xbf}\xca%\"W\xb9!\xde\\\xf3I\xb4\xe7\x02\xf0E\x84\x07\x17!\x98U\x9fl!G\x8a\xe8\x14J\xa3\xba\x16M\x02Er\x04\x83`\x14\x12\xc9\xecT\xba\x85#\xd5\x93\x8a$b\xe4Zp\xc8?\xb5g\x1f!\xd7\xe4\xf1\xd6\xb3*K\x03;d\x0f\x9b\xb1h\xd81\xbfPpy\x97\xf4\x80\xe5\x96\x8b\xa9\xf3\xb3\xc5\x9dr\xb7YoIp\x01j\xda\x89\x83\x11)d\xe2\xc46%Y\xb6m\xcb\xb5\xda\x89\x8b'\xce\x8fa\x18j$\x95IF:\xdd\x8e\xe3\xed \x8e6\x1b\xb7o|zr\x06d<,@\x9c\xad\xe3\xab3\xe2\xe90\x01q\x07\x12\x1fP\xc6mgA \x01\x9b\x16\xb8Y\x17x\xde\x8d\x02\x02\xeec\xc8\xb8Rs\xe5\xcc\x9d{_9:\"\x88}Q\xf0\x7f03\xfa\xbc\xd7\x84\x04o0\x19\xd3}\xbert\xf8\xb8\xab\xdd\xa8$\x11N4\x08\xe2\x94\x93O<\x90g\xc3\x8d\xa3G\xa0\xd3H d\xceG\x96 \x8e:\x8dpD\x15\xe4\xa83\xa6\x14-\x1425\x999\xed\xcb\xedZ]\xf2\xcc\xb4\x80\xa4\xf9\xec\x0b\xa1\xc0\xbf@D\xe7\x13\xaa\xe3\xc2\xe1f\x9f$5K\xd3B\xc4Y\x8c\xc85\xdaaW8\x7f!\xa1\x95J\xb9\xad\xe3f\xb7\xd3\x011\xa2f\xa3ek\x8a\xdc\x1e\x8c\xc2\xa1H:\xae\xc2\xd9-\x0bs\xe4\x15\xf9\x08\x02\xa2\xdf\xe9\xe9\xa9L\xbe\xdf\xa9\x11\n\x82\x04\xbd\xb2\x1f\xef\x81\xe1a\x86\x8c\xc1\x87\xaf%\x9cM\x018\t\x01\x03\xf3\x04\xc6\xe7]\x9cu\xc6\xb3q\x1fB\x04\x81\xe3FD\x08\xae\x1f\x08e\x009\x1c\x91\nd\xd0\xd5~\xae\xa1\xe7\xeb4\xe2\x0b\x1f\xf1\xa4\xc7\x912\x1c\xa0\x92\xe0\x08\x90@\x021\"\x1e \x11\xdb\x87+\xcc[L\xbe]\xe6\x9b\xfd\xc8#\x05\x88Sc\x9es\x07\xf1\x9f\x07.%@\xa4~O\x0f\x89\x03)\x9aq\x0c!\xb8d6\x82\xf2S\x85\x83\xa65h\xd5%&Gt\xb6\x90\xaf\xbf\x04a\xcc\x890f)\xba\x06\r\x16@\xc7Uk\xcdbZE\xa2,\xa0\x00\xd3\xc1\x0c\x9c\xca\x843\xb9\xec\xcb\xc3\xc6\xb07p@\xc5\x91\x1bY\x12\x15Y:\xaa\xb4\xa7'\x8a\xf0\x99\x05\x98\xe4\x83\x99\x83;\x0e;\x06\xe9\xb7-I\x8dGT\xb1\xd5\xacQ\x1d\x17\xf0[\x9f\x80{3\x85|\xc7\x9do\xea\xf0x\x82\xc6f\x95S}\xfe\xc7\x98\xe7L\x01\xf1\xf6\x19\n\xe7#\x10\x04\x9e\xd2\x04\xac<p\x04\x901\x04\x0bP*\xd8\x829\xe6\xed\x1d\"p\x1e\x04\x17\xbd\xb8\xf3\t\x1c\xa4\t\x1cP\xf9\x84\x9d\x03*o\x8b\xf8\x8a\xc1?\x06\xb8\x1e\x9dve\xc7#\xff\xae#\"0\x1d|\x99\x10\x91n\t\xf6\xa0\xaeF\x13\x96-Y\xb6m\x9av1.\xc5\x8b\xc5\xfdr\xdf\xecw$Y\xf2\xf9\x94s\x18\xc3\x17\xc70B\xe3\x84L\xf0\x1d\xb4\xce\xe0\xc8H\xe8\xe3\xc8\xa0]/\xe5\xe1\xe4.7\xc5\xb6=\x9d\x89D\x93\xc9\xad\xa3\x86\xa1\x8f\x90\xab\x9b\xe8Q\x86\x85\xe1D\xb2\xa2\x18&>:ml\xee\x1e\x0c\x07}\x9f\xa8b^\x0c\x18\xfd\xea\xf4\x07\x13S\xb3z\xbf\x81\xb1;\xeb\xcc\x84q=(\xd8w,\xb1[%\xe3\xec\xc3\x9fM\xec2i\xe4+*\x9eK\x91`\xce<\xc9\xe0P\xcd\xc7\"\xe6\xa1\xe17!\x8f\xd9\xa0\x00\xaex\xea\xc3C\xcb\x98\xc0\x08\xde|\x07\x12\xe6y\x89\xce\x9aw\x18\x93\xf1\xcf\x1c_\x91\xed>\xbe\xb3\x959\xad0\xe6\x0f\x17\x1c\xcbN\xe6\xb1@\xe0\x1c\x94\x1eU\xa2\x13Fe\xc6\xc6@<4U\x01\xde\x8a$\x19\xaci8\xdc\xb4\xa8$\xc2\xb2\xf7t\x102l\xd4\xa9\x9ef\"8\x95\xc8\x86\xc3!$)\x11\x05\x89\xd1\xc4\xeea\xd3\x1e\xf54Ms\xd7\xa1\xef0\xc6\x04\xb4\x1c\x80\xa9$Q\r%\x8b2'\xc3\xce\x04`\xd0=\x82M]\x07@\xd8C\x9ar\xd2\x1c,E\xda\xf1D\xac\xd7\xe9I\x12\x9a\xcaF\xc3\x89\xf8\xf6a\x03\x9b`\x06\x8a\xde\xfcQ\x19\xb2\xd8\xcaRd\x19[z\xbf\xd7_]\x9cn5[\x9dn\xcfF\x8a(\x03\xb0!\xd7\xa3M\x88\xe3\xa2\xa2\xe3!\xc5\xe3\xd1P\xb3UO$R\"uA)!M\x86\x1b\x19\x19\xb6n\xc0\xba\xc0\x92s\t\xc1EJ\xd7\xd1M\xbc\xc7\xf1|^\x01\xdez^p\xd7\xb1C<OV\x00b\xc8u\xfb\xb8\xcek\x18\x07\x9cI\xa7\x90\xa5\xd7:\xba(\xba\x8b\x1c\x80\xd6\x82\xd5C\xc8X<\xc6u\x10`\xe4\x93}\xcci2\x0e\x98\x98x#N\xdc\x04\x87\x9a3\x9eC\x18\xb3\rX\x1b\x95\x0c\x0bK2\x0c\xa7\xa8\xca\xb0\xc5\x1e\x19\xa6a\xb1\xe0\x18\xa7\x8a\x03\x83\x8f\xa2:\x92}\xc3t\x9cp{c\x84\x00\xf6IL\xb6\x17\xe6\xf2\xa5\xd9\x85X2\x1b\x8aD%I\x05\xd9\x12\x89ED\xe9\xf6\xbd\xf5\xda\xe1\xb6,\x8a\x0e<$\x14\xfc\xde\xbb\xe7\xe6.\xbd\x11Od\xb5\x90FC\x10\"\x1a\xea\xe6[\xfa\xf0\xc5\xf6\xd1\xe3\xa7/,\xc3PT:\x19\x96i__.]|\xed\xaaM\xe5\x14E\xc2\xea\xb3\xa3\xf6\xdd;\xf75\xd5\rv\x99\x16Y-\x85o\xbc\xf1\xba%\xd0\xa7\x11$\xe5\xf6\xc3\x97'\x87Gk\x0b\xc5\xd7\xaf\xae\tJ\xd80\xac\xb0&\x1f\xd7;_\xdfy\xac \xe48\xa9a1g\xe2\x91\xf7\xde|M`\x1a*\x16\xd5\x06\x8f7*\xc7\xdb\xb1\xfc\xec\xea\xea\xf9\xd9\xd990\xf5a\xa4\x10\x92\x10\xbbg8\xf3`d\xfe\xf9\xee3\xcb\xb2$\x11\xb5\xbb\xbdl~j\x7fw\xf3\xfc\x95\x0b\xf3\xd3\xa5h,\xa4(pn\xc14\xad\xe1@\x7f\xb1}xR\xeb\xdc\xba~A\x91D\xe2k'\xc41*\x90\xb9\xe1\xf0\xee\xe3\r\xc3\xc6\xce:$\xae3\x9d\xba\xb9\x92\xe9\xec\xe5s3\xb0\xec\xd6_n\x1c7z\x12s\xda\x13G\xea\xfc\xa0\x1aPW%t\xf9\xca%\xa1u\xf8\xcd\xfd-Bd\xba\x83(\x97\xa6\xa7\xa6s1\xc1\x1c>]\xdfj\x0cm\xc9\x93\\\xd0\xf9\xe7/\xacdC\"@\xc5\xce\xce\x9e\x96)\x96\xe2\x8aec\x9e`3\x87\xadP\xd9\xdbyQ\xb3\xd6.-fdbbzQ\xb8\x96e\x1a\xddV\xf3\xb8\\o\x8d0u\xbaQ\xcc\x81[\x97\xe7\x96g\xa6\xb3\t0~\x15\x05\x06\x1f\x8f\xfa\x9d\xc3\x9d\x9d\x97\xe5>\xa1\xa3\xea\x07bx\xb7\x82\xe3O\xf2}\xb6\xe3Q\x11*\x1c\x16\x9eM\xc9W^\xbf\x9e(,HJ\x18>\x079\x05\xf9\x80\xdf\x8a$\xe5\n\xc9\x17uT9\xd8\xa3'5\xad\x1b\xab\x85\xd7\xde~?\x9e\x9b\xa61WP\x9c\"]\xeb0=\xa1\x90*\xcb\x89\xf9\xb9\xc9\xab\x97\xcf\xfd\xee\xf3;\xb5\xe3}U\xd3\xc0\xd4\xca&\"+\xcb\xb3&c\xc1\"\x12s\x13\x93\xb5\xe6p\x7f\xe39\x88 []\x02\x98\xf4\x0bs%\x93(\xf0\x8c\x16\x92\xd5\xf5\x03X\x971M\x9a\x99\x9d\xa2A\x18*\x0e(\x91\xc9l\x1f\xd6\x0f\x0f\x0e4E\x05\xe9\x87\xa3dY\x9a\x9a\xcc9\xd8\n6=uWIaE\x01\xf2-\xa8\xb1p2\x16\xe6U8\xec\xd01,Y\x14L:\x84\xb0\xee\xadx6\xfb\x7f\xfe\xfa\x97\x99L\x16\t>\xa1\x11dIJ\x864\x03\x0b\xa7\xcd\xf5B!\xa5\xb1M\xaf:|@\x96\xfb\xba\x82\x04\x1fe\x84\xc0m\x8d\xb1\xacj\xf9l\x02\x8e\xddU\x15\x17]\\\x8fU@\xbb,lO\xe6\xb3\xe9\xa8L\x94B>ur\xd4\xd4a:mktpT\x9e\x9b\xbd^\x8c\xa5F\xbd\xf6\x0f\xebGD\x96\xe1\x18\x00\xc9Lqbq*\x0f@9h\x94\x1b\xed\xe1\xb9\xc5d.\xa5\xc1\xe7\x04\x0b\x81\xfe$T\x92\x06\xe5}\x8cp\"\x95\xcaj\xc0,i\x88\x030^U\x95\x99\xe9\x89\xf9\xd9\xc6\xf3\xa7\xeb\x9b5\x03\xd4\x8e%\x86.^\xba\xb0R\x8aa\xfa\x08\xb8?\x00\xc6\xa0\xc4s\x13\x17S\xc9\xc8\x93G\x0f\x0e\xbaX@\xc2\x98\xf7\t;H,#\x17\x9b\x89@\xd0X\xc4\x1aQ/\xdfJ^\xb9z\xeb\xa6\x14\x9b\xb6`\xbbe\x82\xa6\x90\xa8,\x89\x0c\xdd\xb0\x01R`[\xf4p\xdb|\xff\xd2\xe4\x95\xf7\x7f!\xa8)\x80\nQ\xb4UE\x84\xd5,8\x92\x0f\xb2o\xc1\x7f0F\xb1\xff\xfe\xcb\x8f\xfe\xf9\x93\xef\xca\xbb/A\x0c\x00\x8d\xc0\xbc\x02\"\xe5\xd8k`\xea\xff\xfc\xfd\xab\xff\xd8j\xf5[UE\xd5\x10\x1cec\x13\xe6\x96\xd0\xd5\x02'\x1d\xe9\xc3~\xeb\xd4\x18\x86\x01{-6\x93 NaE\xfe\xe0\xad+\xff\xd2\xee\xe8\xbd\xaeL!\x96N\x1d\x08\x1cbc\rsK5\xb0\xa8\xba0\x8c\x90\xa3O$\x9f\xe6\xb3U\x93\x8ci\x89\x88\xdc\x1b\x1a\xf9R\xe6\xed\x1b\x97\xc2\xaa\xe2\xc7\xe7\x1c\xf6\x0e\x17\xb2\x18\xec\xfb\x9c\xd0\xf9\x90p0.\x05\\3\xb0\xf5\x10\xe7\x06w\x08\xac\x8d<\x03\xca\xe5\x83$\x88\xc9\x00x\xc8\xda\xdc\xcc\x04\xc0;\x92\xc3\xb3\x13\xb9\x93\x06\xacR`\x96\x925\xec>\xdb8H^\x99\x9b\x9c\x9d\x99<m\x1e\xb4t\x00\x07I\x8b\x9c_\x99\x16\x19\xb6\xbc\xd8<\xe8\x8c\x18\x87\x01\xbc\xb1\xf5\x07\xdf\xfd\xb0\xdd2)t:\xe0\x01\x8f\x0c\xcb_\x8e2N\x03l\xa1\x7f\xff/w6\xcb}\x14J\xad^\xbaxy>s\xe1\xc2b\xe7\x87\xe7\xc7}2\xb92\xb74\x11\xb7)\xc3\xed\xbf|\xf6bc\xff\xb8\xd9\x17\x16_\x7f\xe7\xe6J2\x1c\x8f*\xa83\xc4\x08q6\x81\x0fN\xa2\x17\"Ch\xdc\xb1\n\x00Y\x0c\x93K\xd7.\x92\xf0\x94mY\xf0\xac4\x96\x8e\x94\xd3F\xb7Q\xab\x08\xb6!+*\x0b/Qzxi2z\xe5\xdd\x8fm1\x0e\x8fD\xf7T\xe5z\x9f<]\xdf\xd9\xd9\xda\x1at\xdb\xf0\x161&\xa2\x9bv2$\xfc\xf5Ooj\x89\x12\xb1m/i\xc3\xf5e\x82\x1a\xcdG\xe5\x0f\xdf\xbf10\x84F\xb5\\?=\x1a\xb4\xca\x81\x1f\x9b\x10\x10\xcdX\xba(\xa9\t\xe2\xdb\x93\xcc\xd4\xcf'B\xef\xdd\xba\x06X\xc4\x0cY\xcf\xe5\xe2;6E\tf\x8e\xb9\x05\x90\xef\x9b\xae\xb5{\x07\x95\xfaQ\xadqR\xab\x1f\x95k\xc0H\xea\x1d#\x9fI\xbd{\xf3\xb2\xe6\x89\x91\xccd\xa5\xda\xea\x9e\xb6:\xc0\xef\x15gXl\xfb\xe4\xb4~\\k\x1e\xd5\x9a\xbai\xf9R\xa5\x8f\x8c\xc3j\xe3\xb8\xd6\xa8\xd4\xdb\x983\xc5\x89\x1f\x9a!c6\x1eg%!\xdf9mQ\r\x98.\xa6\"N\x88tb\nL\x0b\xcdbr\x07rP><\xd8\xad\xf6\x15-\xba\xbc0\xa1\x08\xd8\xb4\xf1\xe4\xf4t>\xa6\xc0\x136*\xa7\x07\xd5\xae(\x89~8\x0f\x89\n\xa3.2\xfdM\xa3@\x12\xb0\x05\xdf\xa7@\x87S\xd4\xd4HB4Z\xcf\x9e\xac\xef6\r5\x91\x9d.\xc6\x007\x0b\xa9\xa4\x0c\xcf-\t\xcd\xa3\xed\xf5\xfd&V\xe3\x89D\xb8u\xb8}\xfb\xf6\x9d\xdbONt\"\xbal\x0bs9%\xec\x89d\x82\xb8\xe0=\xe7\xa1\x94\xb0\xbd4W\x14S\x0b\xc4\xa6L\x16\x80\xe8\xb0/|\xf1\xf9\x9fz{?f2\x89R\xa1\xf0\xf6\xf5+\xd97\xdfD\xb2\x12A\xf6\xe5kk\xb6\x92!\xb6E3\x8b4\xf5\x9b\xe7\x95?\xfe\xf3?hv5\x96*\xc4\xa3\xd1\x0fo\xae]\xbdy\xd3\xa6.J\xa2[x\"\xa9^\xbby\xfd\xf3\x7f\xfd-(i4\xee\x99\x1b\x19\xd6\x85\x99\xf4;\xef\xbc\xf1\xe7\xaf\xbe\nG\x13\x91D&p+\xb3\xec\x91\xe1P7\x06u\x8f\x86\xba\xde.\xa0\xc2\xe7g\xb3\xd5\xcbk?\xde{(\xb9\x8a<0!\x1c\x8e,rV\x05\xbc\xbfs\xff\xc5\xe6\xd6\xae\x16R\x0b\xa9\xe8@\x1f\x9aX\xb1,\x9cK\xa7B\xb2lxbTnt\xbe\xfa\xeea\xadV\x03!L\xa4\x92\xef\xdc\xb8\x1c\t\x87\xe1\x06\xfe\xf8\xe5\x0f\x0e\xf5\xf9\xf9\x87o\xcd\xe4\x93\x16C\xa3Z\xad\xf9\xd9\xb7?\xd2\x81\x92\xc0X\xd4x\xaf\xe4Y_\xca\xd9l \x97rS\xea\x8c\xa4\x85\xb9\x19Xw\xedf\xafk\x08\xd3\xc5\xd4t)w\xda>\xa4\xf6\x08,;\xacol\xecNe\xd6\xb2\x85\x89\xa9\xf4\xd1nG\\\x9e\xcd\xd3K\x18\x83\xad\xed#S\x10\xf9\xbc\x08J\x1bE'\xf9\x86\xb8Y(\xd8\xc6d<j\x01\x14%\x92\xcaM\xcc\x15\"\xa2\r\x92\x15\x8e\x88\xa4\x07\x02\x87\xe9\xa90U=\x94\xdd\x01\xe1\x94m\xbd\xd3\x18`7 A\xf8\x94(\xcf\x16\xc5t\xc4\x10\x1a\x0f\x1b9\xaf\x12!\x92\x99,a\x1bx\x0e\x06\xd25\x92\x94\xef\xbe\xbb+\xd4\x9e\x16&'\x05Q)\xb7\xf5O\xbf\xfcK\xa3\xdfm\xb4\xc2\x8bY-QX\x84\xc5\n\xd7\x07\xa5vo\xa7\xfd\xe5\xff\xfe\xc7|\xcc\xd0b\xcb\xb0\x1cu\x8c\x7f\xf3\xc5Cc\xd0\xbd\xf9\xb3\xbf\xb2,z+\xa0\xa2\x97'3\xbf\x01\x05\xdc\xad\xd3\x9bC\x98wN\x81\xb6\xfb\xf0\xc6\x85\xde\xd0~|\xff\x9e\x97d\xe2\x84\x89\xd1p8\xb0\x07U-<I\xc62\xa4\x98:\xb3\xf1\xcd+K\x95zkog\x97\x1a\xec\\\xb0\x07\xa8\x00o\x9e:'TT5\x1c\x8e\xc8\x8a\xdc\xd5I*\x9e6\x8c!\xc1\xd2\xd2\xe2\x94\xe5\x91\xa7zo\xf8\xcf\xff\xfao\x92\x12M$\xd30\x1c\x86n\xfe\xe9\xf6\x83\x99\xa9\x12\xd3\x11ag\x88\x1c\x19u\xf9\x96$i\xa1\x88\x93\xe4$\x10.\x80\xe1\xdc\xdf\xb8\xeb\x92\xcb\x0f\n\xf2\x08\x00\xda\xe3\xe9\xdcL>\x06oNO\xcb\xdb\r\x92\xcd\xa6\xa6\xa7K/\xf7\xca\xed\x11\x06\x16\"\xc9j\xa7v\xbay4qy.\xbd\xb22\x9f\x1c\xcaq\x8d.\xce\xc3\x83C\xa0S \xc4\xb6\x9fVD\x07\x99\x1a\xf0\xd4>%AJ\x1a\xe1\xe3\x86\x84\xe9\x13\xcb\xd2\xa2\xe1\xb8F\xef\x91\x05\x00\xac\xc3\xfd]\x82\xa7\x97\xa6\xe3\x99\xe9\xa5k\xba\xf0b\xbf\xd6\x1e\x9a,\x1c\x8f\x84\xb1\xb8[\xe0\xf3w\xde\xcbnP\x8c=\x9c\xe8\xc5oi\xe6PHU\xa2\x19\xe7\xa2\x9a$\xb6u\x82\x8cv\x08@\x02Q\x9bH\x95$S\x94\xbf\xbc\xb3.\xda\xf6\xe5\xabE1\x14\xb5\x19\xc7\xb4%yk\xf3\xa9*\x8e\x86\xb6\xda\xadV@)\xc3\x19\x0c\x8b|\xf1\xf9\xc9\x95\xcb+Z\xe9\x1c\xdc;\xe0b8$M-^\xd0b\xc0\xcb\xb1k\xf2\xd8D\xa5\xa0Cm}\x05\x9b\x1f\xbey\xfe\xf4\xe4T\xc0=\x0e>\x11\x08t$U\x02\xfa\xec;MY\xc6\x08\x06\x10\x00u\xa0H\xe4\xa3\xb7\xaf\xfec\xbd\xa9I\xa0\xcbD\xffa\x15Er\xbc\xe6\xfe4\xc2=\xbdqy\xf9\xca\xea,\xa2\x9c\x1dHt\xf7\xee\xc3\xf5\xa5\xe9lDSm\xcfS\xba\xb9{2\xe8\xf7c\xb0\x9e\xd8\x8a\x93\x14j\xe4\x1e\x1c\x96A\xf8<\xfa3\xe6\x80\xf3Lp/\xdas&\xfa\xc1\x05U\x83\xd8\xeb\x98\x1f\x89\xfaC\xe6g'5Y2\x86\xbd\x83\xe3j\xa3G\xca\xf5\x99\xc5br\xb6\x98|\xb4S#\xb2\xc4F\x00\x03,M\xe6\x12\xa9L!\xc2\xecwc\xd8\xdd\xd8=\xa5\xb9WAx\x14V\x924\xbb\xbc\x9c5mo\xf2)w\xde\xdb\xdc>\xd4\x03;\x01\xe4\x06\x88A<\x95].E\xa9\xcf\x04\xf7A\xc7\x03\xfet\x1b'\x0f\x8e\x0e\xab\xbdk\xb7\xd6J\xcb\x97/\x17\xa7\xeaG\xc7\x95\xa3\x93J\xa5\xadcf\x1e\xf3\xd9s\xbe\x17\x1d\xae*s\x99\xa2A|\r\xee%$\x83\x01\xaf9\x03\x11\x95Q\x1c\x81\x86\x04\x9d\x8d\xbd\xc41z\xd3 l\xa6!\xc9\x92MMn\xc6\x9bA\xbb\x03YVDI\x95-%\x14\x8a\x84C\xe1hT\x0b\x03S\x93z\xba\x18\xf2\x8ce\xdb2V\xa6b\xe9B\x94\x9e\x8fE\xf5;#\xab}\xb2w\xe1\xfc\xb2\x85\x91i\x93\x94&\xfe\xf2\x17o\x1fn\xbc\xa0\x06\xad\x9b\xd7\t\xb6OX\xa0\xbe+\xdbK\xe3D\x83\x81\xfdb\xfd\xf9[o\\\x06\xc3\x15$4\x15\x91\x7f\xf1\x93\x1b\xa3^\x93\x87q\x99e\x01\x03s\xe7\xc9S&\x1eF\xf1\xb0\xb3\x92\x0c\x1a\xc1\x1dY\x84\xa6\xb6\xd8\x1e\x95\xae5\xda\xa1p\xcc\x18\r\"\xd1\xa4\xebj\x04\xb1\xa3\xd3I\x10\xe2!\x85\xa7>t\xdc\x90\xe3m\xf5H\x83+rA\x92\xa3w\x1cv8\xbf'N\x18\x87\xa2\x89\xd9R\x1a\x0e/\x97+\x95\xce\x08.\xb2wT\x99\xca/-,\xccn\x1f5\xfb\x16s\x16H\xaa\xde\xae<\xdf>\xb9\xb56I\xa8\xbe \x1b[;M\x1dK\xd4V\xc6~ \x0f0!S,\xe4\x04\xc1\r\xa6\t\xc0\x95\xac\xfa\xfe\x1e\x1e\xba`i\x0b\xca\xd4\xcc|jZ+\x952\x890,5|\xb0\xb5\xbbS\x1d\x89T\"eU\x1a>\xfb\xfa\xdf\xb6\xd7\xe7_\xbf\xf1\xda\x85\x99\xd2\xb9l~nq\xe6dg\xfb\xc1\xfa\xf1\x003\x95)`\xc2\xe7\xbe0i\x92_M\xb7u\x92\xbdl\xd7\x9a`\x9c\t\x91\x85\x99\x8c\x1a\xcd\x8fZ{\x82\xa4\xf0\xa6/\xdc\xbe9\x1a!Oy\xc6E\xbc\xb6\xba8(\x1f\x87\xa4\x11\xcd\xcff\xfa\xda\x04\xbeh\x9b\xa0\xf8\xdc\xb8=B\x03\xcb\xde;\xaeLG\xb2p_\x8e\xf6\x86\xb5\xfe\xcd\xa3\xbd\x08\xd1\x17._7\xe1\xc7\xc6\xc0\xa3\xc5\xf9Y\xe6\x97t\xfd\xbc\x8ah\x87T\x91p7\n\\\xfe\xe9N9$\xa17\xdf\xb86\xb2\x81\xb1\x92\xb9R\xf2\xa8&\x9a\xa6\xa5j\xaa7\xae\x14\xe4\xf5\x91N\xd7*\x12\x05\xce(s\x93w\x91\x87\xc9\x9c\x8e\x07\x88P\x94\xb01\xea\xb8\x9e7\x96\xba\x86\xfcL\xec3\xf1W\xe1L(\xd7\xcfD\x19\xdf\x87\xf0\xc9 ~\xa25b\xf6<Y\x99\x9f\x89\x85d\xcb\xd0w\x0fNlB\x8d\xea\xf2\xf1\xc9\xe9\\i&\x9d\x9a)\xc4\x9f\x1d4eF\xa8AY\x1f\xec\xee,Lg'\x12j\xabz\xfc\xf2\xa0\xc1\xf2\x17\xb8X0MF6\xd6\x1f>9h\x1b\xccC\xe4\xd8\x9bd\xd8\x1bIb\xd8\xc3wuvi\x11\x01\x056\xcdn\xb3~\xb0\x7f\xb0}X\xb7\x1c\xf7$\x10#5V\x9a\xd2Z\xb5\x83/\x7fwp7\x95;\xf7\xda\xf5k+\xd9\x99sk\x8a`\xfe\xf9i\xc5`.\xdd3\x0f\xc5F\x92\xbc\xf2\xa0\x0c#G\xa6\x89\xf1\xc8\xc9\x05\xe8\x8eH>\x8c\n\xab\xab\xa6%\xf9\xd8\r\x02\x00\x16:\xa8\x91\xdeP\x16L\x9a\xadA\xa3\x02\x98,N\xa7\xdbX=<<9)\xd7\xe0\xefq\xb9\xbawPFF7\x9eN\xb8\x01\x16\x11U\xda\xa3f\xa3i\x19\x86\x8f\x83\x94\x8a\x11\xf9w_?\xecT\x0e\x80\xb3\xb2ej\xe7si$\xa9n\x90\x02\xa1\xe1\xc8\xd2\xbbMI\x18\xf9RO\x13\xc2e\xed\xdb{/\xf7\x0f\x0eU\xe6\xad3m\xa1\x94\x8d\x03\r\n<\xb665Z\xa83\x81c\xef\x07\xd5\xe6\xf3\xfd\x93\x97\x87\xa7\xcf\x0f\xcb'\xa7589\x18_\x98s2eS\x11\x8bE\x04l\x16\xaas\xbc\xc1`\x1a\xfb\xb9\xf0\\\x92\t\x17\xd9\t\xb2G\x82\xd7\\\x8cv,\x89\x8dx\xf9\xfb\xc0\x01\x94ptq2\x0b[\xda\xadN\xa3;\n\xab\x8a\xaa(\"\x1e\x9dT\x1a6\x92\xe7f'\x15\xea\xe7g\x0eN\"$\xd3\xd9\x88J\xb3_\xba\xed\x96ny>\x1d\xee\xf4p+\xfdn\xb7\xd6\xec6[\xddf\xb3\xd7h\xd1\xd7\x03\x0b\x07\xe6,\xd1\x9f<\xdd<\xee\x01\x03\xc6G[/\x1fl\x9e\x8eXn\xbc\xab\xa4\xe9\x90I\x89\xfc\xd4\xf4TA\xd4\xab\xdf\x7f\xfe\xc7/\x1e\x1cw-\xb98\xbf4\x99Pl;\xc8\x97\xc4A\x8a\x92\xe3B\xe5sH=T\xee\x0e-\xab[\rE&@r\xfb\x185\xab\xed\xbf~{\xea\xf0\xf9\x85\xc1\xd1c-\x142\x89\x98\x96\x8d\x0f>|\xfdA5\xba\xbd\xf1\xfd\xeb\xfd\xb6\x9cJ#\xc1\xee\x9b\xa4\x14\xc5\xef\xbf\xfb\xfa'\xffr,bCRT\x9b\x02\x95\xf5\xce\xcdK(\x96\xc3\x86\x05\xf7k\x08\xd2\xe6\xc6\t\xb2tA\x14\x83x\x02B\x00Z'\x03\xfc\xe9\xe7\xdf\xfd\xea\xbf$E5\xee$+\x04)+\x84h\x9afK\xd1\x91a\x079et\x01\x8a#L>\xf9\xea\xee\xaf\xffS,\x9aL\xc1\\\x132f\x10\x9a\xd4\x1a\xb1\xa9 \x05\tO\xc2\x8f\x8f77\xb6\xf6\xa8\xff\x1a\x88\x14\xf0dE\xa95:\xdd\x81\x1e\x8f\x84l\xa6y.,\xcf<z\xfc\xa4Z\xafKJ,\x1aO\x1a\xa6\x11\r\x87g\xa7\n[\xbbGn,\x84\xa0\xb3\x90\xe4J\x0e\xf2\xf3\xb3\xc7x>9\x9b\xe5\xea'\xa6\x81\xd9\xb8\xbc<\x95\x8c*\xd4\xef\x9aL~\xfc\x93\x9b^2>\x05Q\xa03\x89tv&\x1b\xd9\xa8\xf4e\xa6\xc5\xd4p4\xac) \xe4l\x99\xfb\xce\xaa\xc0\x8f\xea\"\x93\xc8\xac/\x81\xb81\x14\x1c\xa8$@\x9f\xd6\xd1\xc6nO\xfa\xd9\x9b\xf3\xab\x17\xcf\xb7\xba\x0f\x0fz`\xac\t,\xc6\x88d\x19\x14=,\x1b\x0b\x08K4]\ng\x94\xb8$Z\xc0v\xb5H>\x1e\xdanv\x88\xe3\r\xe72\xa3\xb0\xe7x;\xfb\x03\xf3\xdd5\xa5\xd3\x83\x13Y\xb2X\xcc\x07\xed6\x0c\xad\xdd\xf8\x1f\xff\xf5\x83\xb9\xcbo\x03'\x9eIi\xff\xe1\xa7\xef^\xb8\xf1n8\x91\xa9\x0cpe\xef\xa9\xec\xe4\xfb#\xa1\xd1\xb3o\xad\xe4\xfe\xc3\xdf\xfe\xc7p\xb2\x00Z*\xa9\xa2\xff\xf4\xb3\x1b\xd3\x97^\x87[\x81\xad\x8a,\x1e7\xf5\x83\x17\x0f\xc0\\\xe6/\xecPTM\x91\x9e\x9f\xf4\xbf\xfe\xfa{X\x8f\\R\xad\x1b\x8e\x90\x88\x11\t\x89\xa2\x1c\xe1\x07\x8czW%\t\xd6\xf1\xa7\x9f}&Xf \x9c\xde\x81\x00\xae\xb6m\x023\xe3\x192\x08%\xd8n@\xe3\xc0\xb0WU\x1a\xbe\xe9\xf4\x06\xcf7\xf6d\x8f\x92\xa7b\xd1\xbf\xff\xdb_,-\xcc\xe9\x83&\xccY\xa9\x90\xfb\xab\xf7\xae\xaf,LQ\xc7\x1fK\xa9\xc3\x04\x9f)4\nr\r\x05.\x89\x80\x90q\xc7\x8b+J\xd8O\x00\x02\xba\xabh3\x939\x81%\xfa\x0c\xe9:A^\x16\x1b\x02\x03ldZ@]\x16\x17fd7\xb9C\xc0\x18s%KA\xda\xf5x\x14\x98\xbb\xbe0\x9ef\xce\xa8B(\x12\xaa\xee\xbc|v\xd4U\xe2\x99\xcb\x97\x16\xa2\x88\xba\x88\xa3\xb9\xe9[\xb7\xae\xbf\xff\xf6\x8dw_\x9b\xd1\x10e\xc5\xb0\x06M!2\xbfPH\xab\xc4\xe2\xa8\x06\x97\xe8\xe2\xbaWe\xc4\xb3\x83 \x89\x16\x14\xb5\xf4r\xbf11\xbb\x1e\x9dz\x8d\x06\x15\x11\xda\xad\x0eca\xeb\xa3\xb7.w\xce\xcf\xa5\xa2R$\x9e\x1e\x19`G\x9aX\x94\xef>\xdc\x9b^9\x10\xe3s\x02\x01\x04\x10\xba}\xeb\xf5\xe5\xd2\\\xe1o:\xf5Z!\x13J\xe5s@\xa2\xe1\xbc\xc0\x9b\x0cI\xfb\xe3\x97\xdf\xd8\xc3\x16\x92\x13\xaff\x98R\xcd\xa2(?<\xdd\x9e*\xc6\xcf]{\x1b\xe0\x84+\x1e\x13t\x932G\xc6\x16<\x1eKC\x8f\x12\xb6I\xa7y\xf4\xb0\x81\xa7\xa6\x1e\xbc}\xeb\x869\x96p/\x18@\xb6M\xc3\xc6r\xc0\xed\x04\xe1\xd6k\xab\xd7\xd7\x16h\xbcE\x10z\xba\xf1\xc57?J6z\xbeq\xb0\xba8\x9d\x89GM\xe6\xd1\xce$b\xff\xe3\xbf\xfd\xb2\xdd\xeb\x83U\x15\x8fE\"H\xd8>m\x122\xce\x8ax\xe5\x16$\x12y\x01\\/\xcf\xfc\x8c<\x81}\x0e\xda\xd6ag\xf0b~e\xa1\x94\x86\xd3\x0b\xbb\x1b\x1b?\xac\x1fJ\x14y(\xbbA\xccc\x12\xcb\x14?|\xebb&\x9f\x9bH\x87\xf7\x1b:\xf2\x8d@\xe4\x06\xdex\xb7:\xaf\xd3\x01\xe1\xa8\x9e\x0e\xae\xed\xd0~\xe2\xde\x0f\x925\xb9\xff\xf4\xde\xb3\\\xe2\xfaLq\xfa\xd2R\xf3\xbb\xa7'\xa0\x00\xb1\x12\x8e\xa74)R\xc8E\xf7[\r\x03a\x1c/&\xb3a\x02'\x03\x05\xdb\xea\x1b,A1\xc8\xdc\xf2s\"\xc4\x7f\xa7\x90\xcfc\xd9-K\xbe{\xf7\x99\xd5\xda\x91U\x95\xa1%\xd2M`\x1cf&\x9d\x10Cq\x9bZC\xf4$@\xfd\xf7\xdb\xf6\xed\xcf>\x93\xad\x96$\xab\xceT\xe9#\x0b\xa4mii:\x96\xce\x82\xb0\xc3\x9d+\x00tj\xf8\x7f}\xfex\xe7\xc1m5\x9c\x10\xc6\xd6\xb4\x1f\xcaA!A\xcf\xe4\x12\x7f\xf8a\xaf\xb2\xb7\tt\x87\xdf\x8c\x91h\x18v\x98\xa5\xe0\xfa\x90\xa4\xeb\xfd\xd3\xa3\x97\xc4\x1cfK\x8b\xb7\x1fn\xbf|\xb9\xa9\x8e?\x8fa\xe2\x91>\xf4\x14\xa5;\xe8\xa9h\xa8\x98\x8e\x17S1\xf8\x9bI\xc5\x1c\x03\xb2?\xd4?\xff\xe6~_\x1f9W\xb5\x9c=c\xd1L<\x02\xf8i\x8d\x15#\xa1W\xa3n~\x1e\x98p&\x8f\x11\x07\x05B\xce\xe1\xc9Tr\xb2\x94/\x152\x13\x85l\xa9XX\x99-\xc2\xf9MC\xdf<\xa80\x18`\xa9\x1c\xd4!D\x8fl\xd5\xcaG\xb5\x8e\xa2E\xe6g'\x00\xa3\xc8+H\xe8\x87\xfdqP\xbc\x86\xa2\x89T!\x9f)d3y\xf8\x9b\x83\x17\xe9\xb8*c\xae\xd2\x8e\xe6\xa6)\x9a88\xf9\xf1\xe1N\x0f+3+\xcb\xe7&\xa3\xdd\xea\xd1\xc3{O\xb7Ou\xa4\xc5/^97\x9b\x89\xa6'\xe6o\\\x9a\xd3\x80.\x8a\xf2\xb0~x\xd8\x1a:\x81\r.5\xd8\x15`\x99\x03#\xdfO\xe6\x06N\x14\x19\x1d\xf7\x85\xaf\xff\xf4\x97\x9b\xb7F\xd9\x99\xf3\xa2\x12v\xbc\x05p\x02P\xa4\x9a\xaajZ\x08,c8\x8d\xaa\xca?\xeew\x85\x7f\xfb\xed\xdb\x1f\xff4\x96\x99\xa2\xc3\xc6 \x18dH\x92\xe8V\x90\x89F\xcf\xf8\xcdo\xbfy\xf1\xfd\x17\xb9\xe2\x04fU\xa2\x80'\x1a\x95Q[\x16\xc5\x11\x8b\xc8\xcaDO%\"\xed\x91\xd2\xeb\xe9\x9f|~\xe7\xd7\x7f\x9f\x8a\xa4'\x08v\xca\x8c\x80\x94\xa3\xa1\xad\x18\xa6\xad\xc9\x8a\xc8\x143,\xb9n\x7f\xd0\xae\x97\xa7g\x97\x08\xa5e\xa1O\xbf}\x90I''\xf2y\x87L\xa9,Cn\xd0\xef\n\xe9\x90\x8aD\x1e\xfc\x91\xc7\x99@y\xdb\x98F*\xa2\x11\r\xc0\xe2\xf3\xdb\xf7\xdf\xb8\xbc:Y\xc88\xee\x00\xec\xed\x06V\x80,K\\i\x8f\x00\xc6\x94\xca6\xd1\x18\xb1,\x92\xf1r!\xe4\x97E\"\xaf\x04\x0eN\xc2<\xecW/\xae^\xe5\n#\t{\x90\xbd\x83\xfdFW\x97$\xd9\xcb|sV\x16\x88\xb0\xb9\xb5s\xb24\x99\x99\x9d\x99\x9c\xdc>\xdc\xab\x0f\xa8\x81\"\x83\xadNh\x86\xb1\x13\x04\xc6^\\F\x04sE\xb2P\xe8\xe2\xb5\xab\x17\x83\xdc8\x04;n\xde\xbds\xfb\x80&\xce\xc3\x0e\x04\x86\x9c\xe5C+\xe1H\xeb\xe0\xe5\xfd\xad\xdc\xdb\xe7\xb3\x97^[k~\xfb\xe0\xb0\xb6\xf7\xe7o\xbb\xf2Go/\x17g\xdf~\xafhb8\x96\xc5\n;\xa7\xf7\x1f\xedt,\xb8\xe6\xb8E\xca\x02\xdd\xcc\x9f\x848\xfd\xe9Y\xf3\xae]\x0c\x9b%\xb1\xaa\x93O\xbf\xbc\xb74\xb3?5\xbf\x9c\xcd\xe6\"\x89\xb4-*\xb5v\xbf|r\"Z`B\x8e\x98\xbb\x8a\x80\xb1\xf1\xe3n\xe3\xe0\xff\xfd_W\xae\\\x98\x9e[\xc8\x16\nR(\xccT\x12\xde;.o\xef\x1d\xfe\xf8\xe33\xb3[\xc9\x16'Y\xa6\x00\x15\xa3\x93z\xf7\xc7\x87\xcf0sD\x89`m\xe9\xedX\x045\x87\x8ai\x0cC\x8a\xb4\xdb\xb2~\xff\xc7\xef\xce\xaf\x9d\xb7\x89(!\x0c\\\xc1\xd4\x07\x80\xfc\xe5\xa6\xf1lcsH\xa3\x03\xc8\xb0\xeda\xa76\xb7\xb4\x86\xd4d\xb5|\x14\x8dFC\x89\xfc\xa7_\xdf\xbb~\xf9\x9ci\xd1 \x8f\xa6h\xfd\xfe\x10\xe4c82\x9en\xed\x137\xe7\x81h*H\xa4\xe5\xac\xe9\xc1\xc8\n\xa9r:\x1e\x02\xbe\xd5\xee\xe9\xb5r\xfd\xb0\xfc\x97\x95\xf9\xa9\xb9\xa9|>\x9b\n\x87i\xb5I\xbf\xaf7\x9a\xed\xa3J\xd37\xbd\xe0\x96\x0f\x8eN\xbbM\xea\xcc\x049hv\xfb\x08\t\x84\x8b\xd4\xf8^\x05\xc4\x8aT`PM\xc3\xd8\xde;\xb6m[8\x0b, ^\xf8\xc5\xe61\xc3Z\xbfJ\xd8%\xb5 \xe8\xcd\xea\xc9\x83\xa7jRC\n\xcd\x92\xe8\xdb\x86~\xb8\x7f0\x1a\x8dZ\xf5\x9e\x9b\xba\xe2\xa5\"\xf5\xbb\x9d\xedNe\xe8\xb0\x02?gM\xa0\x14\xb9\xda\xa1\x96\xf8\xa0\xdd\xdc-\xf7\x86\x96\xd1\xd1mf\xcd\x8b!U\xd8y\xf20\x8c\xe7\x122\x89\x02\x95\x1f\xd8v\xeb\xe8\xb7\xff\xf4\x9b\xb5\xcb\xe7W\xe6'\x12\x9ah\x0c\x07\xadfmw\xe7\xb0: T\xf1\xf2u\n>\xc9\x05a\xfa\xc5\xdf\xff\xda\xed\x02\xe0TI\xbb\x85B\xc8+\xdaw\"\x12\"\xcdA\xc08\xacIZ(LD\x05\xf8\xa91\xecQX\nG`\x15\xb8\xcd\x03D\x11\xf8\x14L\x9b&\xa1T2\x16\x8b\xc5\x89(\xb7\x07\xc6\xcb\x17[\xb8{\xb8\xb8z^\x8d\x97\xc0:\xf0\xba\r\x886\x8d\xfeZ4R\x86\x80L\xf7\x92q\x89h90@E\xb7\xd5\x80\x08F\r\xa1\x82&!\xbb++\x8a\x1aN3;\x9fdB6\t%\xf6\xf6O\x8f7\xef\xae\xac^H\x96\x96h\xfe\x8bM\x9a\x95cQ0\xe3\xa9\xbc\xacF\xdb\xad\xe6\xa0u81{N\x94\xb5\xf2\xfez,\x16\x89ef\x01\xdeh6/\xc1K\xb3\xf9j{\xd0j\xf5\x00\x872\xc9\x18\xf0\xeevo\xd0\x1b\x8cD\xcf\x1c\xb2,\xe6\x8bW\xa5\x10\xe5\xe3\xc6`\x04v'\xa2\x95\x9c\x8a\xec'\x9e[\xd4\xed\x85\x9d\xa8\x9aL\xed?\xf9U\xcc\xe3\x8b,\x19i3\xb1\xaf\x9cQ\x10\xc3\x009\x83\xc3%\xd1MYC\xce\\q\tl\x06(i\x16\xc7\x85\xb9\xa4\xce}\x90J\xc0{\x80&\x1a\xb1\xc1^D\x84B\x93\x01\x0c\x00c\xd7m\xee\xfd\x82\x1fQ\x96(\xaa\x0b\x04D\xd0\xa6\xb97\xf4P\xec\xf6\x10\xb0\x0c\x83>/ \x1a\xbd\t\x9a\xdb6hu\xfb2\xcc\xae*\xd3\xbc\x00\x98\x03I\x14\xbd\xe8-W\x9d\x19d\xd4\xc9\x1c\xd7\xe6\t\x13r-K7i\x89&\x02\xc0\xc5i`fh\x08\xc8\x04\xcc\x88\x84\xb2\xafr\x05:\xd6\x92\n\x874{F\xa3[\xa3X*\xd1t\xa2j5t\xb8\xbf[,\xe9\x91\xcc\x8c\xe3\x14\xa4\xb6\x18\xa83U\x03\xb4\xed\xb5\x1a\xaa\xd0\xb1\xc4\x19bb\xc7\xef\xc5\\dX\xa6\xb3\x06\xeaOn\xd7\x1bQ\xe6+\x05\xe1\x87\xa1\xd4-9\x1b\x96O\x0e_\x16\x0b\xb9Dn\xd6f\xde,x\xd2\xc2\xc4L\xa7\xd3iT\x8f\x13\x89d\xa18}l\x19\xad\xea~q\xe6\xc2h\xa4\x83\xb0h\xd4\xc9\x84\x9d\x14P\xe0\x1b\xf9T\x14D\x08\xcc\xb7vwpPn\xb06\t~\x9d-Rd*\x16p\xc9\x9enj\xa2\t\xbc\x9e\xc5\xef|^B\xe5\r\x1eMv\x92\x89\x1d0\xc1\x84\xaf\x13$\xe8\xac\xa3\x0e\x8esNK\xc6\xea\xe6\x83\x8a3\xec\xe42\xf0\xbec\xcf\x16TT\x85\xcf!\x80)\x0f9\x05U.\x9d\xc6\xbe\xa9\x06\xb2.y\x93\x8d\xb8\x10\xabs\xebT\x86\x14U\x16\x82H\x07;NRT\xe4\xa1\x18{\x0eYKgBN\xe5\x88\xa4\xd2h\"\xc1|\xc1\xef+eP\x98H\xcbk\x97\xbcv$\xde/\xc1oW\xe2\xd6z\x88\xee/V\xce\xc8~\xfc\xc4\x01\x17\xc0|$\xf3\xfe\xa36\x95\xc4R\x08Xfg\"\x99\xc0j\xf2\xe4\xe8\x10\x0f*@\x06\x91D\xe30\xac\x95\x89\\==A\xa3J<?\x87\x91\x86\xb8\xcc[\xbf\xec\x0evj6@\xd4Fj4Kh\x8c\x1a\x99D\xba\xf7\xdd\xb7\xf9\x84XZ\xbc\xee\x98\"~\xc4\"L\xe33\xe9n\xa7\xdbk\x9ed\xf3\xa5j\xb5!X}\xc3\xb2\xc3\xb0!\x9avr\xaamk\xd4iW\x15\n\xa0Z\xa5\xd6\xd2u\x83\xb5_A\\M$WSC\xbd\x0ct,\xa8\xf5\xc9Wp\x9f\xe9\x10\x81\xdc{\x1dw\xfe\x92\xf1\xc81g\x90\x137\x15\x9c/\xcf\xf5+\x04\x829#>@qU\x8e~\xb6.\t\xcaO\xf8Z&\xbe,\x92p\xc5$|\xc96\x17\x8d%|\xe7\x08\x81\x831\xd7H@~5\xcb\x98y8\x9e\xa3\x87E\xbe\x1a\xc9W\xec\\\xfd1\xe2\xca\x16\x90\x80\x04\xf2j\x85\x960^~\xcc93\xfc\xd7\xd8\xb2\xb2\xc9\xe8\xf4\xf2\xa5\xe6(\xb4\xbb~\xcf\xe8\x9e\x88\x92\x84E\xe9\xe4\xe4\x08\xf7\x8f\x92\x859j\xb49\xbc\x91\x04\x19\xfb\xfeP\x82\x161\x8c\x91\xfb\xb0H\xde\xd9z1\xeaU\xde{\xebV$\x99\x03\x13?X\xf2\xd4;\x0b\xeaR(LLk\xf1B\xf5\xe4 \x16\x8f\xd7\x1a\rl\x8d@\x92\x14\t\xce\xd2\xb5\x8d\x81mt%daQ\xad\xb7z\xd8%\x85\xc1\xf2t\x83bn\xcd\x05\x1dT\xaaoE\xae`\x9e\x1f\xcb\xa0\xf6\x84pS\xc4\xbb\x94\x08_\x83&\x8cU\xcb\xb9Ue\x82W\x80(x\xc5\x8a|\xdd6\xc1\\\x08\x98\x9cI\xff\xc7d\xbc\xc8\xedl\x8c\x98`nw\xbfD\x89\x90\xb3>(\xc2U\xa4\x90\xb1\x8arn:\x85W<\xf4|K\x04\x17\x93\x82\xc6#\x1e$\xf1o\xfdf&^\xf9v\x00>n\xd5\x99\x87c$hR\xe1\x9d\x05\xf9\xd9DDU\xc4L\xbe\xd8\xb3\xb4\xe3\x9du\x15\xe9\xb5\xf6\x10\xf8\xd3\xe4\xc2\x05QI\x10\xcf)\xe0\x9e\xda+\x92f\xe7\x91\x1a\xcd\xa6\x8c\x87\xd1t\tP}\x7f\x7f\xaf\xb6\xff\xe8\xdc\x95\x9b\xb2\x1c=\xbf<yp\xda\x01\x95\x87<\xcb\xdc-\xb9$$\x12\x89D\xe3)\xe6\xccT\xccQ?\x14\x89\x0b\xa2\x8a\x05\xa6\x91\x90-(\x89hHQ5u8\xb4\xd0X\x19z\x90'\x87\xb8@\\H\x15-\x9b\xe1\x08\xfa\xf7\xda\x04\x8d\xb9\x94^u~\x0bc+\x90\x04+\x96\xd3{A0\x97[\xfd~\x89\x9b\xe0\x8c\xcf\x19~\x82\x82*\xee@\x06x7\x04:+\x0bd\xac\xf1\x11qW\x0c\xe2\x8b\xc2\xc7\xd0)hE1V\x92.\xf0UZ~\xa6\x9b_\xd7\xf0\x8a\x02\xf7*\x90P@\x0b\xdd\xe4u&=\x98\x08\xa2\xc7\t\xbc&:\x02\xf2\xe1\xd6Ip\xa0+Ar\xcdo\xaa\x81Eb\xceN\x16\xea\xd1\xd8\xfe\xf6\x93L\xb4\x01(\x85\x94$&\xb6_\xa3A\xcdZD\x13f\x11f\xd3&\xbaJ\x1e(&\xa8\xcb\xd3J\xedp\xe3\xc7\xd5\xd5s\xf1T\xa9\xdc\x1eM\xd5\xcb\xb3\xf3\xb3{\x9b\x9b\xcc\x9b\xc0\x92\x9f\xb0\x05\xf0%\t&\xa1\x11)\xca.\x07\x83\x91\xa0\xa6$-) US\x84\xa8\x8a\xdb}P\xa3r\xa33\x9a\x9f\x0c\x0f\x81J\x8f\x0c\ty\xc5Q\x88\xeb\n\xc0\xb9\xb9h\xa7)\t\x8fL\xe243!A\xbf\r>\x98\x16\xe4\xb7\x91\xb3\x85\xb5c\xfdL\xbc:\x0fO\xea_\xd1\x16$\xe8\x814&j\x84\xefX!\xb8\xb9\xda\x84\x08g\xebI<\xb8\xc1\xe4LM\xaf\xc0\x17c\n\xe3\xfd\xb9\xfc\xca\xff\xa0U\xc1\xd9\x9c\x07WS\x8c\xe5Zy7,{n\x0b$\xbc\x92\xcd-\x8c\x15\xaa\xa2\xb1\x94cO\xd38\x88D\xbcJfow\xe4\xa5\x14\xb0\xd5\xc4\xbc\xecDp\x19\rh\xa0l*6\xcc\xcf$\xc5j\xaf?\x90\x86\x87\xa1h\x8a\x95\x1b\x88\x01\xe8\x8b\xc4e\x1e\x18\xf9\x91\xceNo\xb8\xf9\xe4\xbb\xe9\xc9Rn\xea\x1c\xd8\x13\xb2\xacl\x1eun\\\x9f<\xd8\x0fw[\xa7\xc6h`\x19\x038\x184Z.W\x90\x94\x84\x89\xc5\x88j\xc7h\x93-\x19loU\"\xb3\xa5\xe4I\xad\x85\x05xI\xc0\x1ei\xb4\xfaS\x85\xcc\xd6~\xd55\xd8\x9cbN\xe4\xaf\t\xbf\xbe\x8c\xd63\x81\xe1\xa3;I0\xde(\xf9.J\xc4\x95\xc3\xfa\x8c\xc9\x93F\x0fjq\x10\xdf\xa0o\x82!\xf3%\x08q\xd5\xe2g\x9a\xd4\xf0\\\x88\xef\xb8\xe6\xeb=\x1e\xb1\xb8\xfa\xca\xb1\xae\x10~j\x0b\xdf\x15\xee\x15\t\xe6\xb7\xf3\xfeG\"\xbcR\xd3>&\x83^\x04\x97\xf0\x05\xfe\x88#\x9e\xbc\xab\x12\x8du\xf5\t\x80\x8b\xdb#\x88`\xba\x9d\xd0\x10\n\x16\x82H\xdc\x1eA@z\xd3\xf9\xe2\xdez\xb9`\x1d\xa3\xf0D\xb7\xbd\xab\x85\xc0\xe2Lh\xd1\x04MBB\xb2\xbb\xfaX\xce\x81@\x05Q\xec\xeb\xa3\xfa\xd3\xbb\x99\xb8:\xb3\xfa\xba J\xd8\x04\x83lP\xed\xb4kG/\x076\r\xa1'\xd3\xb9D\xaa\x18\x8e\xc4dY\x1dad\xeb4\xbd\xcb\xc9\xcd\x02\x9b9\xac\xca\xe7\x16\n\x83\x91\xd9\xe9[2\xf3\xa6\xc2\x8d5\xbaF1g\x17\x8b\xd9r\xb9*\xb3~r\xee5\x89'L^\x06\xb6i\x81j\x96\x08\xa8B\xc1\xf7\xf0\"7@\xead8\xf0\xadw\xdc\x81\xf0t\xa1\xa3H\xd8\t\x11#\\~\xd1\xa9_\x14\xc0\xb3\xcc\xf1\xc6\x10g\xba\x94\xf0=\xd7\xfc\x16t>q&\\K\x11\xc2\xf7!!c-\x0c\x08\xdf\xb1\xc43\xd2Y\xbf!2F\xd8]d!g$;hN\x10\x08&\x12\xa4\xa5\xb5\x8bngH\x14p \x14\x94\xeb\x8f\xf3\x9e\xf17~\x8f\x9aW-\xbf\xe0@!\xe8V\xe1\x15\x8a\xd3a\x0e\xa9\x92\x18\xc96N\x0e\xa7'\xd3\x91\xec\x92M\x94n\xaf7lW-\xa3\x87\x08\xf5\xa4\x82\xdd\x8d\x9cN[\"\xea\xf6\x87'{\xeb\x12\x1e\xce,^\xecv{\x95\xa3\xcd\xca\xf1^\xabQ\xa1;(\xf1\xbf\xfa\xc9M\xb5\xb0\xaaH\x8a\x12\x8a\xf8\x16\x92\x9f\x9ek\xdb\x04\xa8\xd2\xea\\>\x1a\r?yqHs>\xbd\xe6\x07\xb0\xdfp\xa8_\\\x99.\xd7{\xb6\x1b\x08sgG\xa1\xfe\x16\xc91\x8a\xe1\x06\x14EI\xc7C\xbd\x81\xc1\xf0[\x94U\x8d&\xf7\x8czp\x88\xaa\x85\x9d\t\xa0\x87\xc8\xcc\\\x95X\xc6\x18\xf3\xd9\xb0\xec?\x9b\xa5n\xaa\"=\xa4\x0fr\xa4h!\xb8\xb8\x8d\xa9\xa0\xc3Q\xb4f\xc1\xabi\x96Y\t\x98S\xe4\xec\xa9\x0b\xea\t\xa2\xe3\x81h\xfbM\x82mGb\xa8\xbe\x15\x89e\xf4\x01n%\xb8\x1fD+?isE:v\x02;\x03\r\x01\xc9\xcc'M\xf3\xebE\xbf\x0f(\x1d\x1ez\x8b\xc8\xcd\x0f\x90i\x06\x8ba\x99:\x06s\x86F\xa8X\x81\n\xf3\xe0\xb8\xc5\x98,\xd5\x98V\xbe\x81\x05+I\x8e\xcf\xc9)0t\xef\x13c\x99\xfc\xbbFX`\xe1\x124\x9e\xdf\xcd\x87U\x08\xd7\xfc\xcc\x83#\x12\xe8\x06O\x01\x8a\xae\xdb\x7fl\xe5\xc1\xf3\xe7\x92!s\xfa\xd2\xce\xc6\xc3\xe5\xf3J\"9\x19\x8f\xc7ap\xf5\xa1\xde\xed\xb6\xfb\xbd\x1e\x0cq8\x12\xd5\")$G\x91,\x13Q\x1d\x1a\xe6\x8b'w\xd3\xd9B2?\x9b\x9f\xca\x81]\x0fC`\xd9\xa4Zm\xae\xad\x9c\xbf]\xab*\x98f.`\xaf\xe5\x13\xfc1m\x02\xd4zv2\x13\x8fG\x9fm\x1d\xc2\xce \x1e\xa01)B\xd0,P\xd4\x19X\xc7G\xe5\x0b+s\xf7\x1e\xaek,\xe9G`\x8d\x0c\xbe\xff\xfa\xb7\xddv\xfd\xfa\xad\x9ff\xf2\xd3\x86\xa1\x7f\xf9\xe9oE\xa2\xaf]\xffY<\x95\x85\x03\xb7\x9f\xdf}\xf1\xf4^\xadV\r\x85\xc2\xf3Kk\x97^{K\xd3\xe4o\xff\xf8O\x83\xa1\xc1R\x81\xa9'\xef\xe2\x95\x1b\x9b\xcf~\x90#\x99\xd7\xdf\xfa)\x9c\xf8h\xeb\xde\xd3G\xf7*\xd5*\x80\xee\xcc\xc2\xf9\x8bW\xdf\xcc\xa42\xa7\x87\xeb\x0f\xef\xfdE\x8d\x17\xae\xbf\xf9\x01M\x14\xb1\x06\x8f\xfe\xf2\xe9i\x0f]}\xebg\xd9\x98\xcaDM\xe9U\x9e=\xbc\xff\xd0\xa6m\xa7P<;\xb5\xbav\x15\x16\x06X\xbe\xbd\xd3\xad\xe7O\x1e\x1c\x1e\x1d\x9b\x82\x9c)\xce\x9c\xbbt}\xa2X0\x07'\x0f\xbe\xf9\xd6P\xf3W_\xbf\x15R\x84\xd3\x9d\xfb/^\xecO\xae\xac\xf6\xcb\xdb\xed\x81M\xa5\n\x9b\x16J\xcc\xcc\xcf4\xb6\x1fY\xa9\x0b\x17\xaf\xac\x86\xc8\xa0\xb6\xf5hcs\xb3\xd6\x1a 5\x9a\x9f\x9c_:w>\x93\x08w\x0e\xef=[?I\xce^[Y,\tVk\xe7\xc1\x9d\xd3~\xec\xdc\xd5\xab\xfa\xee\xf7\xfb\xf5!\x0c\x82m\xd9\xe9\xe5kK\x93Y0\xcc\xe9\xb2\x19\xd7[\xbc\x91O8w\t\xf1\x9d%A\x9fV\xc4\xd7N8\xb2\xe2\x87\x99`\x83\x144\x8d!NZ<\xf2\\\nN\x13\x1c\xb8\x15\xab\x94O\xec\x0cV\xf67\xd7\xe7.D\x05)!#\x01\xa6\x1c%\x126&C}\xd8\x1f\xb4GzYU\xd5B<\x9a\xbd\xf5A\xbd\xd1n\x94\xf7l\xd3T\x04\x9dF\xd1$\xc5\xa6\xc5lx\xebD_\x9ck\xcd/\xcc\xefn\xbcp\x83\xbe\xc4i\x90b\xc7\xa3\xa1\xb9\xa9\x9c*\xa3Z\xab_\xad\xf5(\xe5vA[tPI\x92\xd1\xf6Q\xed\xfd\xa9\xd2\xc4\xe4\xc4\xe9\xc9\x89\xe3\xe25L\xe3\xd1\xd3\xe7\xf5j9\x92\xc8\x7f\xf4\xf3\xe5\x8d\xe7\xf7\xff\xfc\xddwX\x10K\x8b72\xb9\xe2\x83\xef?\xfb\xe2\x8b?\x18XLe\x8a\xedzw\xf7\xe0\xb3\xbd\xbd\x9d\xbf\xfa\x8f\xff\xe5\xa8\xd2)W\xeb\x80:\x8a\x16\t\xc7\xd23\x8b\xfd\xc7\xcf\xd6C\xa9\xa97\xdf\x957\x1f\xfd\xe9\x93?\xfcahI\x89t\xc1ju\xf7\xbf\xf9bgw\xe7\x97\xff\xf5\xff\x1a\x0c\xba\x0f\x9e\xbe\x10\x84\r\x83(\x1f}\xf0SQ\xb0w\xb77\xd7kh\xf1\xfaG\xb9\x18#\xcc\x12\xd2\xbb\x8d\xc7O\x9eI\x89\x89\x88*\xd4\x9e<\x1b\xa0\xd0\xfb7_o\x1f\xdc\xfb\xf4\xf7\x9f\x1c5\x8dp2\xab \xf3\xf4\xd1\xbd\xed\xed\xdd\x9f\xfc\xe2W\x0bYsscc\x101.]\xa7IH\x9d\xc6\xe9\xa3g\x9b([\xd2\xeb\x9d\xa3j\xdb2h\xc6\x98\x14\x95\xe2\xe9\xce\xf6\x8bM}z\xe2\xe25\xe1\xf8\xc1\xd7_}\xbf>\x10B\xd1D\x02\xb7\x1a\xe5\xf2\xc9\xfeI\xe3\xe3\x9f\x7f\x88\xfb\xb5\xf5\xf5\x9d\xa9\xc8\xb9\xd5e\x98Y\xe3\xf4p\xffy#=s\xf1R\xb7|\xbc\xbe\xd7\x0f\xc7\xe34\x17q\xd2Z\xf6\xd2\xb1\xe4\xa0\x8e\xd8O\x0c\x08j\xd5\x91\xd7\xb2\x8c\xd6\x7f\x88\x1c;r->\xcf\xbeg\xd5\xfd\x01\x181\xab\x8ee\x1f\x10'.\xc4\x12\xa1\x90\xcb\xd0\xdd\xd3;I\x11\x9697;\xb1\xb59\xac\xee<*,\xbf\x81\x89\x86l\xdb\xb1\xdd\xe2\xd1\x88\x10\x8b\x81H\x8dFC<\xe8\x87B\xd6l!:7}\xe3\xb4\xd69<\xde)\x1f\x1f\xe5\x8b\xa5LaV\xd6\xe2\x92\">x\xbcy\xfd\xe6\x1b\x87\x07qb\x0e\x04\x07\x93m;\x16\x0e\xad\xccO4[m \xe9\x8f\x1e\xacSm\x05\x9a\xc1m\x05\xe7\xa4Z\xd3\xdb\xb3\x88\xf8rs\xf7\xd2\xa5\xb5\xcai\x95\xe92\xb1\xdf\xeb\x82\xa9\x08j\xeb`oG\x1f\xf6\xb66\xd7\xa9\x8a\x11\xc5^\xb7\r*\xf5\x9bo\xbeBJ\xf4\xfd\xf7~~\xf1\xd2\xd5v\xb3\xf6\xd5g\xff\xb2\xbd\xb3\xf5\xe8\xe1\x83\xbf\xfb?\xfe\xef\x17O\xbe\xfb\xfdo\xfe\xe9\xc2\x8d[\xef\x7f\xf0q\xbf\xbeO\xb3\x1fT\xb5\xdf*\xdf\xbe\xfd\xad\x81\"7?\xfc\xc5\xd5K\x97F\xfd\xe6\xb7\x7f\xfa\xd7\x8d\xad\xed\xbb\xf7\xee,O\xa5U\x9am'>\xfe\xf1v\xb14}\xf5\xdc\xb4(3\x958\xd6\xd4\x91NKi\xe9\xda;\xab\x89\xff\xf9\x0f\xff\xd0\xee\x1b\xd8\x1a\xdc\xbd}\xfb\xa8m\xcf]z\xfb\xd6\xcd\x1ba\xa4?\xbb\xfb\xd5\xfdGO\xef|\x7f'\xff\xf1e\x85\x96\xb7\x8a\xcc\x93D\xbd\xc2\x12(E%\xfd\xc1\xdf\xfc\xfa\xe8\xf1\x1f\xff\xf8\xd5\xe3\x89\xb5\xf7\xde}\xeb\x8aq\xf4\xf8%]\x89\x8a\xd5\xdaz\xf0pc(\xa7\xd6n\xfcdm\xb1d\xb5\xf6\xee}\xf7\x97\xbd\xe3\xcd\x07/\xcf]\n\xb3\x13\x89n{fj\xb6\xc8n\x87O\xa2\xc4V\xdf\xf9\xc5ZV\xb2\x88`\xd1\xf0\xa5\x97U\xc25\x00r\x8c\xcf\xc0v\x14\xc8\x98YH\xb86e\x81\x0b\xdeO\xb7b-0\x04\xcf\x8e`\x9d\n1\xd7\xaf\x0e\xfb.w/PD\xf5\xb1h\x9b\xf3\x0b\x0b\xa7\xc3x\xf3\xe0\t\x92\x02\xff\x1ck\xa9jI\x02\x8eF\"\xe1d\x01\xcbI0\xe7\xadaw2\x1b~\xf3\x8d\xab\x8b\x97\xdf\xec\x19\xe2\xc6\xfa\xc3\xd3\xbdG\xc4\xe8T\x86r\xebx\xff\xdc\xb9\x05\x93\xba}\x00n\xedhX[[\x9d\xd9\xda;,\xe5sO^\xee\x18&v\x13\xc8\xfc>d^\x83W@\xa1\x83\nP\xf7\xd3\xab\x97WG\x06MS\xaeV\xca@\xe7\x13\xa9L\xb5V\xfb\xfe\x9bO\x8e\x0e\xf7b\x89\x0c\x08]\xb3Q\xadT\xca\xbd~\x7fq\xe5\xc2\xad\x9b\xb7B\xb20==\xfd\xde{\x1f\xa9\xb2\xb4\xbf\xbf#!\xa2\xc9\xb4JS\x96PDuk\xbaEzT\xad\xd1\xeeM\xcd\xaf\xbe\xf5\xe6\x1bQU\xc8\x17'\xde~\xe7\x03PP\xe5r\x99v\xad\xb0\xac\xdc\xccr:\x11\xfe\xe2\x0f\xff{\xff\xf8\x94\x8a;\xf6[:\xba\x8dF\x80\x12\xd5w\x7f\x04 \xb4\xd4\xf8\xc2\xdc\x8c5\xa8\x9e4\xdaj4s\xe3\xcd\x1b\x85\xb8\x1c\x8a$\xde\xb8uk2\x1b\xe9\xd4\x0e[\x9d\x9e\x93\xf5\xe1tY\xc1^\xafHE\x91@\xc3\xd2\xd1FbH\x15eVN\x0cD\xa0[\xdeiv\xcd\xd4\xe4\xda\xb5\x8bsqU\xcc\xcd\xae\xbdye1\x86F\xa7\x07\xe5\xbe)\xf8\x1dt\x9d\x84\x19\xdb\x8d\xb8 \x11\x0f\x0e\xee\x7f\xf6\xcd\x17\x9f\xefUh\x93\x0f\xaf\xad\x1ey%\xb7\x9d\x08g:\x19:\x1e\xac\xa0\x18<pQ\xf8Y\x9f\\\xce2&\x1c\xce9\xd9%X\xe0\\\x1d\xac2\x89\xb8.\x13z\x7fXA\xd6\xec\xf2\xf9\xe3:\x0c\xd1\xbaS\xa2\x85I\xd0W\x8c\x8a\x94e\xc3\r\x03Q\xb5\xa5h\x7f\x84:\x1d=\xa6\xa0\xe5\xa5\x85\xc5\xd55,\x87\x8f\x0f\xb6\x06\x8d\x9d\xfb\xcfv\x16\xb3b2W4FFX\x93/,O\xado\xedO\x15\xf3\xad^\xafV\xef\xd0\xb2=\xec\xdf=\xc6\xe3\xad:a\xc1=^\xdf\x83Y\xc9\xe6\xb20\xb5\xd5\xd3c\x10\xe4\x8b\x97\xae\xc9Z\xe8\x87\xbb?t{\xfd\xb5\xcb\xd75-\xdc\xa8Wh\xce\x10E4\xcbm\x86c\x03\xe72\x1c\xdf\x10\xeb\xe1i;\x8f\x0c,\x90\xb3\x82D\xe6)\xb1\xe8\xc3\xb2\x92e\x01\x1bl\x14X\xc5\x99i&\x8b\xf3\xef\xfd\xe4ck\xd8\xfa\xf2\x8bO\xba\x03\x83E\xd6\xddVXnz$\x8dc\xabRb2\xac\xd8\x8f\xbe\xfbS\xb9\xd6\xa7\x05\xf5\xd8B\xec:\xec>L'u\xc9\x1fe\xaf\xb7\xac;\xf2N{QwB,\x87\xcf;b\xc1\x92a\xe0T\xc4\xec\xd5\xb6w\x9e?\xea\xeb\xa6\x84\x04\xaf\x03\x0e\xf6<\xa0(\xe8\xa1\xc4\x9eJ\xd7q\xa3o\x0f-?lCDo\xfa\xc7\xfbb\x92\xc0\x81\xce\xa5\x07z}\r\x9d\xb4\xad\xa0\x9d\x9c\x8b/\x81+\xc3\xeb7D\x04\xbe\x8b\x93\xcb\xb81\xc3\x1b\xbf\xed\x1c\xcb\xba\xb7c*),\\\xda\xd9\xadX\xdd}j^\xf9-\xe8\x88\x03lN\xe3g\x9a\x8f\x00\xea\x9fHjo$\xf6\x87\xb6$j\xc5\xd2\xcc\xe4\xccb$\x1ai\xf4\xda?|\xf5\xe9\xcal\x1aX\xf0\xd5\x0b\xf3\xeb[\x072\x12S\xa9\xd8\xd3\x17\xbb\xf4K\x01\xfc\xe6\x89A\xa3\xbc\xa0\x1d,\xdcVW\xc7\xcf_l]\xb9\xb0`\xd9v\xadr\x02X\xbe\xb8|\x1e\xce<\x1c\x0e\xd3\xb9\x12\x90j-\x14\xaa\xd7*\xe1h\x0c\xec\x80\xad\xcdg\xeb\x8f\xbe\xa39\xf9\x8d\xe3\xef\xff\xfc\xa5n\xda\xc5\xc9\x05\xd0\x05\x18s-\xf6\x98\x9c\xd2GK\xa6c\xb1\xe8\xe1\xce\xcb\xa7\x8f~\x80{\x18u\xca\xf7\xbe\xffr8\xc2\xd9lA\x91hSCP\xdf\x8b\xe7@9_?988i\x0cD$p=\xb6\xe9\xfd\x99\xa6\x91\x9cX\xfa\xd5\xdf\xfd\xea\xe2B\xfe`\xfbE\xa5\xa5g\xd3i\xbdW\x7fp\xff{\x1d@\xd4\xea\xbc\xbc\xff\xfdam\x10NM\xc5\xa2\tx\x1a}\xd0k\xf7\x87\xc8\xeav\xeb5jlQ\x9a\x81\xfd\xf0\n\xf6\xa6\x15[$\\\x98\x8bE\xe4\xc6\xc9\xf3\x97\xdb\xc7\xa3^\xe3\xce\xd7\x9f\x7f\xf1\xc3f\x8f\x84\xd2\x13\x13\x11\r\xac1\xbb\xdf\xaf\x8d\xe0\x98Au\xd03\x040\x04\x05\x89&\x0e\x08\xe1\xa5\x9b\x1f\xfd\xe7\xbf\xf9\xf8\\)B\xf3Z\xd9\x90\xcacQ\xc5\xc0\xa9\xe6\xb7~%\\o`\xc1\xad\xd5\xf1\xda\xbd\x12\xe4G\x02\x18\t\"NCQ\x91ur\xa0\xf4\x88v\x96\t<\xf6\xb0|\x05\xc7|t\xe2\xde\xb4\xa7\x95\xe8\xc6\xdf\x01\t\xd21E\x9f\xb9\xbc\xbf\xfdh\xf1|\x94(YZ\x95ED\xa7E\xa0\xe8\xb4\xdev\x92 l\xe4\x7f\xd5\x84M\x0f\x84\x8b\x85\xd4PH\t\x91\x83n\xb7r\xe7v.\x9d\xdc\xd89\xect\x06\x1f\xbf{\xed\xc7\xc7/iY\xa0\xe4\x145:\xa6&vZ\xd1 \xfe\xcb\x1fh\xda\x9a\xb4uP_\x9a\x9f\x9e\x9b\x9b\xaa\xd5*`\xf6'\xe2\xf1\x85\x85\x95Gw\xbf]=w1\x93\xce\x84\xb4\xd0\xe9\xc9a$\x12\xb9\xf6\xc6{\xb7\xbf\xfa\xe4\x93\xdf\xff&w\xe76X\x05\x8df'\x95\x9f\xb9t\xf5\x9am\x99\x00K\xa61\xb2i5\x0b]\x034\xed\xd7\xd0\xa3\xf1\xeck\xd7\xdf\xfc\xd3\x9f>\xff\xe2\x0f\xbf\x81\xb3\x99\xa3A\xad\xd9\x89\xe7\xe6._\xbd6,?\xb5L\xdaD\xc30\xcd\xd7o\xfd\xb4R9\xdd\xd8\xdaC\x82\xe67OCL\xcd\xc3\xb0\xd6w\xee\xff\x7f\xff\xcf\xf3j\xa5*\x85\x93\xe1d\xf1\xea\xf57\xf6\x8e\x7f\xb7~\xff\xbb\xca\xde\x0b\x15\x99\xcdf{$%^\xbbr9\x15O\xe4\xd2\x99\xa3\xad\x93/\x7f\xf7?S!R9\xad\x89\x91\x89t6\x8f-\x93\xb6\xbb2L\xdbb\r\xfd\x00\xe5\r\xc36FJ|\xe6\xfc\xea\xfc\xb7\xf76\xee|\xf1\xfbl:f!q0\x1c\x88\xa1\xe2\xb9\xb9\\J\xd0S\x91\xc7\xa7\xbbO>\xfb\xed\xa12\xeaTZ$2\x0fb'\xd6hEb\x7f\xeb/\xffv@p\xf1\xca;\xd7\x16K\xb4\xdc\x02l\x83\x85\xf3k\xac\x80\xfcL\xffH\xbeq$\xf1\x82n\xdc\xf7\x06\xf0mK\x05\xcee\xc4\x7f\xd9\x00\xf7m\x1f\x02:\xdb0\xce\xbd\x96\xc7{\x1dE\x19\x8f\x85\xdb#uP\xd9Hf2\x98&<:\x16\xe3X\x7fs\x84\xb8\x923\xb7\xf52aY{@-\xc3\x92\x1cZZZz\xb9[\xbe\xf5\xda\xb9F\xa7\xb7\xb5WVd\x85/v%c\x19\xcf\x84\xcf\x81\x06im\xd4\x1b\xe7\x97\xa6\xef<x\x16O\xa4\x96\x96\xce\x85#\xb1N\x7fx\xf9\xf2k@\xd5j\x8d:\xecpq\xed\xe2\xcc\xdc\x8a\x1aM\xf4z\xfd\xde`\x84\xa4\xd0\xec\xca\xe5\x0f\x7f\xfa\xd7\xd9$\x18\x07\xb8\xd7\xef\x82\x94L\xcf.M\x96J\x86><\xa9T\x93\x99\xd2\xfc\xdcBib&\x91Jw\xba\xbd\xde\xc0\xc4\xa26\xb9p\xe9\x83\x8f\x7f1\x91\x89v:\xadZ\xa3S\x98^\x9c)\xe6\xe0\xe4\x85B\x11\xec\x03-\x96YX\\\x8e\xa9\x92\x93\xc9d\x0c\xda\xd5\xb6\x0ezvh\x8a\xe1\xcc\xf4\xb5[?Y\x9cL\x87\xe3\xd9R\xa1\xa8\x0f\x07\xbd\x01\xe8\x19)\x9e\x9b\xbd\xfe\xceGk\xb3YPq\xb9B\tD\xa4\xdb\xa7 \x12JO\xbf\xf6\xd6\xbb\x8b\xc5\x08H#0\xfdZ\xd7\xceN\xccM\x14\x92\xd6\xb0Si\xf6B\xd9\xe9\x99\xc9l\xbe0\x99\x08\xcb\xfd\xc1\xb0\xaf[HKd\x0b\x19\xa2w\x86845;_\xcc\xc6\x07\xbd^\xb7?\xd2\x850\x98m\xaf\xbfq>\xa3Z\xadzcH\xfb\xca(\x16\x91b\x85\xe9\x89T\xc4Av\xf4\xf1\xdf\xfeJ\x04\x8a\xe8e\x92\xf8\x15\xf7\xa2\xefc\x14\x9d\xae\x0c\"\xe7\x8e\xf4\x9a\xe2\xb2\xe8,B^\xce\x89\xe0\xa7\x9f8\x06\x92\x97\xab!r\x8eK\xf7C\xf7+r\xfc\xe6\xbanf\x1d\xd5\\\xda\xce\xf6nZ\xac\x14\x96^'n\xcb9\xde\xe99\x96\xc3\x12\xf8D\xd9iA\x0b&\xc2\xca\xda\xf9\xa5r\xb5\xb9\xb20\xf5\xc7\xaf~PUm\xeckm\xfc\xef@\xe0\xba\x89\xa3\xa0S8\xd8\xff\xf6\x95\xe5R(]\xfa\xf1\xdeS\x96zD\xf3\xd7\x91\xa3\x16\xa99\x19*f\x13\xdb\xfbeE\r\x19\x86\t\x9a\x05\x0c\xbap8\xc4,E\xdb[ \"\xeb(G\xbdZ4\xd9\x93iU\xf8\x14,\x1f\xd3\xa4\x87\x809\x15\xd640\xf8-\xf7\x10\x91q\x0b\xccZ\xcbI\xc4\xc9s\"6\xe7\x9dFA\x079\xea\r\x04p1Y\xf7\x12\x19\xe0j\xa8\xeb\xc0\x8f4\x15\xa6\x96R.\x9a\xad&J\xac\t\xdd\x88V/\xcb@\xb5\xb1\xed4\x83s\xa3|\xd8\xad:g\xa5\xd6\x8eY\rF\x19\x80\xe7\xc8\xa4\xb5\xd4!\x05u;}\x13I\xf1\xb0F\xdd\xfa\xb6\xcd\xbe\xb4\x83~\xef\x02\xedvn\x93\xb1\xae6^B\x15<\xbf\xb4x\xfe\x82\xffm\x1c\x01\x0e\xa1\xb1\xe6\xed\xfe\xd7\xb7xS2\x06F\x9c\x1b\x9b\xf8x6\xfe\x15'c\x98\x14D\xde\t\xf1/\xe7\xb7\xd9\x83\x91\x8a\xa53'\xd5^\xd8\xaei\x89\x82\xd38\xc0\xeb-\x1f(a\xd7u\x85\xc62n`d`y\xcd\xcdM\xce\xcdL~{\xe7!\xd8k\xa2\xdf\xa8~,\xdc~\xa6\xd3\x03\xf1\xbfX\x02\x88y\xbd\xd9Y[,\xf6F\xb8\xdb\xe9\x88N\xff'\xdf\"\xc78\x9b\x8a6[}Z2\x8ahog0\x93m\xc6\xf98\x0b\x05\xfb\x05\x01\x88{\x0bD\x17\xb1v\xd02\xac\x16Z\x83\xe97Q\xf2\x9b\xcc\n\xc4#\x85\xc2XZ\"v\xff\xd2^8\x96\xcb\xe5YC\x08P\x7f \x04\x8a\xe4\xb4g\xb3\x88o3\xd3V\x8e4\xff\x9aQr\xec\x87\xeb\x82\x1a\x17&\xebn\r\x01+A@\xac\x80L\xa6\xde\x03\xa2\x85\xd4\xb0\xc2\xfc\xe4,QX\x04r$:\xa4\xdd\xb5\xba\x90\xf7%)B\x90\xe8f\xcbA\xa4\x9a\xfbr\x057\xcc\xe8\x06R\xbd\xa4\x10/e\xd8U}\xee\xd7@\x89\xa2s\x00f\xdf\xe9@\xb0\xeb\x96r=R\xa2\xdb\xba\xc2/\x84w^ \xcc\x16*rK\xbf\xd8\xdaw\xbfQ\x06cU4'\xe7\x96\x0e\xb7\x9e\xcck[Zz\x89\xd0\xe4O\xd6\xb7\x06\xbb\x90\x82\x05'\x8a%\xb0\x0b\x10\xe7\xfb\x04\xa8s\xca&\xb0\xa4V\x17f?\xfb\xf3\xbdF\xa3\xa3j\x1a\xa3\x1a\x1c\x04\xb9\xc6(3\x94\x91W\xdf\xe0|\xc9\x88\xa7\xda\x81\x06\xdc{\xb4\xbezn\xa5Z\xa9a\xfaU]\x88/S\xa1^\x03\x19\x99#\xa7L\x1f\x05\xee\xd93_7\xe1\x8b)z\xb5\n\x8d\xeb|\xc3}K\x169\xf3\x9dF\xdc\x17\x1b\t\xaf\xb4\xe5\x0frC\xf8f\xdd|P\rs\x17\xe0\xb6\x05]\x08\xb9\xd4\x04\xae\xdd\x85\xf3}\x1d|0\x17\x8f\xe7*\x9cI|\xf1j\x111\xf0\xa4s\xe7\xdd\x0c\"\x14\x8c\x04?\xf6|\xc3n\xbe\xb9\xa9\xaf\x15<\xbfv\xf0\xb5\x13\xe3\x19\x85^\x8aA\xf0e\x0c\xe3=\x98\x83\xa8pPx\x1f\x92\x11\tg\xab\x87\xbb\xa9\xb8\x8c\x94\xb8\x93]*\x8c\xa7\xf8p3\xe2v{\x01\xf2zeufD\x84\xafn\xdfS\x15\xd5\xc5<\x82\xf8iA\xe4L\x0e\x90\x10|\xf5\x91\x1bs\x16:}#\x1d\x95\xa3\xa9T\xad\xd6\x10\xb9\xb6D\x96\x85\x13\xb1\x10\\\x8c2$w\x021\x1f\x1e\x1dkC\xfc\xef\xf4\xc9\xc6|*\\\x90\x08\x17\xf4i\xe6B\xf8\xcc\xba\xf4\xb3f\xb9\x00-\x1ek\x91L\xf8\xccG2\x06?\xc2X\xabI\x81\xf3u\xf2\x12\xc6\x7f]\x1by%'\xc0\x0ft0\\\xe0[8\x8f\t\x15\xac\xff\xff_\x80\x01\x00W\x90,\x1f\xbfk\xca\x13\x00\x00\x00\x00IEND\xaeB`\x82";
    this.optionsBtnName = {
        en: "Options",
        fr: "Options"
    };
    this.aboutBtnName = "?";
    this.ropeBtnName = {
        en: "Rope",
        fr: "Corde"
    };
    this.treeBtnName = {
        en: "Tree",
        fr: "Arbre"
    };
    this.triangulationBtnName = {
        en: "Triangulation",
        fr: "Triangulation"
    };
    this.optionsTitle = {
        en: "Options",
        fr: "Options"
    };
    this.optionsBtnHlp = {
        en: "Options...",
        fr: "Options..."
    };
    this.aboutBtnHlp = {
        en: "About...",
        fr: "\xc0 propos de..."
    };
    this.strokeGrpName = {
        en: "Stroke",
        fr: "Trait"
    };
    this.strokeWidthStName = {
        en: "Stroke Width (px)",
        fr: "Largeur du trait (px)"
    };
    this.strokeColorStName = {
        en: "Stroke Color",
        fr: "Couleur du trait"
    };
    this.strokeWidthEtVal = 1;
    this.strokeColorClrVal = [1, 1, 1];
    this.ropeGrpName = {
        en: "Rope",
        fr: "Corde"
    };
    this.autoBezierRbName = {
        en: "AutoBezier",
        fr: "AutoBezier"
    };
    this.autoBezierRbVal = true;
    this.tensionRbName = {
        en: "Tension (%)",
        fr: "Tension (%)"
    };
    this.tensionRbVal = false;
    this.tensionEtVal = 0;
    this.closedCbName = {
        en: "Closed",
        fr: "Ferm\xe9"
    };
    this.closedCbVal = false;
    this.triangulationGrpName = {
        en: "Triangulation",
        fr: "Triangulation"
    };
    this.fillTrianglesName = {
        en: "Fill Triangles",
        fr: "Remplir les triangles"
    };
    this.fillTrianglesCbVal = false;
    this.useColorsFromLayerCbName = {
        en: "Use Colors from Layer",
        fr: "Utiliser les couleurs du calque"
    };
    this.useColorsFromLayerCbVal = false;
    this.useColorsFromLayerId = 0;
    this.refreshBtnName = {
        en: "Refresh",
        fr: "Rafra\xeechir"
    };
    this.pgsBr = null;
    this.optionsPal = null;
    this.buildUI = function(thisObj) {
        var pal, res;
        pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", this.scriptName, undefined, {
            resizeable: false
        });
        pal.margins = 5;
        res = "group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], spacing:5, \n\t\t\tgr0: Group { alignment:['fill','fill'], \n\t\t\t\theader: Image { } \n\t\t\t}, \n\t\t\tgr1: Group { spacing:0, \n\t\t\t\toptionsBtn: Button { text:'" + utils.loc(this.optionsBtnName) + "', preferredSize:[55,20] }, \n\t\t\t\taboutBtn: Button { text:'" + this.aboutBtnName + "', preferredSize:[25,20] } \n\t\t\t}, \n\t\t\tgr2: Group { orientation:'row', alignment:['fill','top'], spacing:0, \n\t\t\t\tropeBtn: Button { text:'" + utils.loc(this.ropeBtnName) + "', alignment:['fill','top'], preferredSize:[50,-1] }, \n\t\t\t\ttreeBtn: Button { text:'" + utils.loc(this.treeBtnName) + "', alignment:['fill','top'], preferredSize:[50,-1] }, \n\t\t\t\ttriangulationBtn: Button { text:'" + utils.loc(this.triangulationBtnName) + "', alignment:['fill','top'] } \n\t\t\t}, \n\t\t\tgr3: Group { orientation:'column', alignment:['fill','top'], \n\t\t\t\tpgsBr: Progressbar { alignment:['fill','top'], preferredSize:[-1,5] } \n\t\t\t} \n\t\t}";
        pal.gr = pal.add(res);
        connectLayers.pgsBr = pal.gr.gr3.pgsBr;
        pal.gr.gr0.header.image = ScriptUI.newImage(this.headerImgData);
        pal.gr.gr1.aboutBtn.onClick = function() {
            utils.createAboutDlg(connectLayers.scriptAbout, connectLayers.scriptUsage);
        };
        pal.gr.gr1.optionsBtn.onClick = function() {
            var optionsPal, res, selCompErr, latestColorInt;

            function populateLst() {
                var comp, i;
                optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.removeAll();
                comp = app.project.activeItem;
                if (comp && (comp instanceof CompItem)) {
                    for (i = 1; i <= comp.numLayers; i = i + 1) {
                        optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.add("item", comp.layer(i).name);
                    }
                    if (optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.items.length) {
                        optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.selection = 0;
                        connectLayers.useColorsFromLayerId = 1;
                    }
                }
            }
            selCompErr = {
                en: "You must select a composition first.",
                fr: "Vous devee d'abord s\xe9lectionner une composition."
            };
            optionsPal = new Window("dialog", utils.loc(connectLayers.optionsTitle), undefined);
            res = "group { orientation:'column', \n\t\t\t\tgr0: Panel { alignment:['fill','top'], \n\t\t\t\t\tgr01: Group { alignment:['fill','top'], \n\t\t\t\t\t\tstrokeWidthSt: StaticText { text:'" + utils.loc(connectLayers.strokeWidthStName) + "', alignment:['left','top'] }, \n\t\t\t\t\t\tstrokeWidthEt: EditText { text:'" + connectLayers.strokeWidthEtVal + "', preferredSize:[65,20], alignment:['right','top'] } \n\t\t\t\t\t}, \n\t\t\t\t\tgr02: Group { alignment:['fill','top'], \n\t\t\t\t\t\tstrokeColorSt: StaticText { text:'" + utils.loc(connectLayers.strokeColorStName) + "', alignment:['left','top'] }, \n\t\t\t\t\t\tgr021: Group { alignment:['right','top'], orientation:'stack', margins:[0,0,1,0], \n\t\t\t\t\t\t\tcoloredGrp: Group { preferredSize:[65,20], alignment:['center','center'] }, \n\t\t\t\t\t\t\tcolorPickerBtn: IconButton { preferredSize:[12,7], alignment:['center','center'] } \n\t\t\t\t\t\t} \n\t\t\t\t\t} \n\t\t\t\t}, \n\t\t\t\tgr1: Panel { text:'" + utils.loc(connectLayers.ropeGrpName) + "', alignment:['fill','top'], \n\t\t\t\t\tgr11: Group { alignment:['fill','top'], \n\t\t\t\t\t\tautoBezierRb: RadioButton { text:'" + utils.loc(connectLayers.autoBezierRbName) + "', value:" + connectLayers.autoBezierRbVal + ", alignment:['left','top'] } \n\t\t\t\t\t}, \n\t\t\t\t\tgr12: Group { alignment:['fill','top'], \n\t\t\t\t\t\ttensionRb: RadioButton { text:'" + utils.loc(connectLayers.tensionRbName) + "', value:" + connectLayers.tensionRbVal + ", alignment:['left','top'] }, \n\t\t\t\t\t\ttensionEt: EditText { text:'" + connectLayers.tensionEtVal + "', preferredSize:[65,20], enabled:" + connectLayers.tensionRbVal + ", alignment:['right','top'] } \n\t\t\t\t\t}, \n\t\t\t\t\tgr13: Group { alignment:['fill','top'], \n\t\t\t\t\t\tclosedCb: Checkbox { text:'" + utils.loc(connectLayers.closedCbName) + "', value:" + connectLayers.closedCbVal + ", alignment:['left','top'] } \n\t\t\t\t\t} \n\t\t\t\t}, \n\t\t\t\tgr2: Panel { text:'" + utils.loc(connectLayers.triangulationGrpName) + "', alignment:['fill','top'], \n\t\t\t\t\tgr21: Group { alignment:['fill','top'], \n\t\t\t\t\t\tfillTrianglesCb: Checkbox { text:'" + utils.loc(connectLayers.fillTrianglesName) + "', value:" + connectLayers.fillTrianglesCbVal + ", alignment:['left','top'] } \n\t\t\t\t\t} \n\t\t\t\t\tgr22: Group { alignment:['fill','top'], orientation:'column', spacing:0, \n\t\t\t\t\t\tuseColorsFromLayerCb: Checkbox { text:'" + utils.loc(connectLayers.useColorsFromLayerCbName) + "', value:" + connectLayers.useColorsFromLayerCbVal + ", alignment:['left','top'] } \n\t\t\t\t\t\tgr221: Group { alignment:['fill','top'], orientation:'row', spacing:0, \n\t\t\t\t\t\t\tuseColorsFromLayerLst: DropDownList { preferredSize:[95,20], alignment:['fill','top'], enabled:" + connectLayers.useColorsFromLayerCbVal + " }, \n\t\t\t\t\t\t\trefreshBtn: Button { text:'" + utils.loc(connectLayers.refreshBtnName) + "', preferredSize:[65,20], alignment:['right','top'], enabled:" + connectLayers.useColorsFromLayerCbVal + " } \n\t\t\t\t\t\t} \n\t\t\t\t\t} \n\t\t\t\t} \n\t\t\t\tgr3: Group { \n\t\t\t\t\tokBtn: Button { text:'OK' } \n\t\t\t\t} \n\t\t\t};";
            optionsPal.gr = optionsPal.add(res);
            if (connectLayers.useColorsFromLayerId) {
                optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.selection = connectLayers.useColorsFromLayerId;
            }
            latestColorInt = 255 * (65536 * connectLayers.strokeColorClrVal[0] + 256 * connectLayers.strokeColorClrVal[1] + connectLayers.strokeColorClrVal[2]);
            optionsPal.gr.gr0.gr02.gr021.coloredGrp.graphics.backgroundColor = optionsPal.graphics.newBrush(optionsPal.graphics.BrushType.SOLID_COLOR, [connectLayers.strokeColorClrVal[0], connectLayers.strokeColorClrVal[1], connectLayers.strokeColorClrVal[2], 1]);
            populateLst();
            optionsPal.gr.gr0.gr01.strokeWidthEt.onChange = function() {
                if (isNaN(parseFloat(this.text))) this.text = 1;
                connectLayers.strokeWidthEtVal = parseFloat(this.text);
            };
            optionsPal.gr.gr0.gr02.gr021.colorPickerBtn.onClick = function() {
                var r, g, b, c;
                this.value = false;
                c = $.colorPicker(latestColorInt);
                if (c == -1) return;
                r = ((c >> 16) & 255) / 255;
                g = ((c >> 8) & 255) / 255;
                b = (c & 255) / 255;
                latestColorInt = c;
                optionsPal.gr.gr0.gr02.gr021.coloredGrp.graphics.backgroundColor = optionsPal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, [r, g, b, 1]);
                connectLayers.strokeColorClrVal = [r, g, b];
            };
            optionsPal.gr.gr1.gr11.autoBezierRb.onClick = function() {
                connectLayers.autoBezierRbVal = this.value;
                connectLayers.tensionRbVal = !this.value;
                optionsPal.gr.gr1.gr12.tensionRb.value = !this.value;
                optionsPal.gr.gr1.gr12.tensionEt.enabled = !this.value;
            };
            optionsPal.gr.gr1.gr12.tensionRb.onClick = function() {
                connectLayers.autoBezierRbVal = !this.value;
                connectLayers.tensionRbVal = this.value;
                optionsPal.gr.gr1.gr11.autoBezierRb.value = !this.value;
                optionsPal.gr.gr1.gr12.tensionEt.enabled = this.value;
            };
            optionsPal.gr.gr1.gr12.tensionEt.onChange = function() {
                if (isNaN(parseFloat(this.text))) this.text = 0;
                connectLayers.tensionEtVal = parseInt(this.text) / 200;
            };
            optionsPal.gr.gr1.gr13.closedCb.onClick = function() {
                connectLayers.closedCbVal = this.value;
            };
            optionsPal.gr.gr2.gr21.fillTrianglesCb.onClick = function() {
                connectLayers.fillTrianglesCbVal = this.value;
                if (!this.value) {
                    optionsPal.gr.gr2.gr22.useColorsFromLayerCb.value = false;
                    optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.enabled = false;
                    optionsPal.gr.gr2.gr22.gr221.refreshBtn.enabled = false;
                    connectLayers.fillTrianglesCbVal = false;
                }
            };
            optionsPal.gr.gr2.gr22.useColorsFromLayerCb.onClick = function() {
                this.parent.gr221.useColorsFromLayerLst.enabled = this.value;
                this.parent.gr221.refreshBtn.enabled = this.value;
                connectLayers.useColorsFromLayerCbVal = this.value;
                if (this.value) {
                    optionsPal.gr.gr2.gr21.fillTrianglesCb.value = true;
                    connectLayers.fillTrianglesCbVal = true;
                }
            };
            optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.onChange = function() {
                connectLayers.useColorsFromLayerId = this.selection.index + 1;
            };
            optionsPal.gr.gr2.gr22.gr221.refreshBtn.onClick = function() {
                var comp;
                comp = app.project.activeItem;
                if (comp && (comp instanceof CompItem)) {
                    populateLst();
                    if (optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.items.length) {
                        optionsPal.gr.gr2.gr22.gr221.useColorsFromLayerLst.selection = 0;
                    }
                }
                else {
                    utils.throwErr(selCompErr);
                }
            };
            optionsPal.gr.gr3.okBtn.onClick = function() {
                optionsPal.close();
            };
            optionsPal.center();
            optionsPal.show();
            connectLayers.optionsPal = optionsPal;
        };
        pal.gr.gr2.ropeBtn.onClick = function() {
            connectLayers.doRope();
        };
        pal.gr.gr2.treeBtn.onClick = function() {
            connectLayers.doTree();
        };
        pal.gr.gr2.triangulationBtn.onClick = function() {
            connectLayers.doTriangulation();
        };
        if (pal instanceof Window) {
            pal.center();
            pal.show();
        }
        else {
            pal.layout.layout(true);
        }
    };
    this.doRope = function() {
        new Rope(this.strokeWidthEtVal, this.strokeColorClrVal, this.autoBezierRbVal, this.tensionRbVal, this.tensionEtVal, this.closedCbVal, this.pgsBr).run();
    };
    this.doTree = function() {
        new SpanningTree(this.strokeWidthEtVal, this.strokeColorClrVal, this.pgsBr).run();
    };
    this.doTriangulation = function() {
        new DelaunayTriangulation(this.strokeWidthEtVal, this.strokeColorClrVal, this.fillTrianglesCbVal, this.useColorsFromLayerCbVal, this.useColorsFromLayerId, this.pgsBr).run();
    };
    this.run = function(thisObj) {
        this.buildUI(thisObj);
    };
}
function Rope(strokeWidth, strokeColor, autoBezier, customTension, tensionFactor, isClosed, pgsBr) {
    var simpleConnection, utils;
    simpleConnection = this;
    utils = new ConnectLayersUtils();
    this.epsilon = 0.001;
    this.createJoints = function(comp, layers) {
        var i, stroke, layer, strokeColorProp, strokeWidthProp, j, start, end, t, str, path, step, shapes, keyTimes, isSafeB, pt, verts, shape, inTangents, outTangents, u, shapeLayer, rootVectorsGroup, shapeProp;
        start = comp.workAreaStart;
        end = start + comp.workAreaDuration;
        step = comp.frameDuration;
        shapes = [];
        keyTimes = [];
        pgsBr.minvalue = 0;
        pgsBr.maxvalue = Math.floor(((end - this.epsilon) - start) / step);
        pgsBr.value = 0;
        isSafeB = true;
        if (((end - start) * layers.length) > 100) {
            str = {
                en: "The script is going to create many keyframes, and this operation might be slow. Note that comp work area is taken into account when keyframing. Would you like to continue ?",
                fr: "Le script s'appr\xeate \xe0 cr\xe9er de nombreuses images cl\xe9s et cette op\xe9ration pourrait \xeatre longue. Notez que la zone de travail est prise en compte lors de la cr\xe9ation de cl\xe9s. Souhaitez-vous continuer ?"
            };
            isSafeB = confirm(utils.loc(str));
            if (!isSafeB) {
                return;
            }
        }
        for (t = start; t <= (end - this.epsilon); t += step) {
            pgsBr.value++;
            try {
                if (pgsBr.parent.parent.parent instanceof Window) pgsBr.parent.parent.parent.update();
                writeLn("Frame " + pgsBr.value + "/" + pgsBr.maxvalue);
            }
            catch (e) {}
            verts = [];
            for (i = 0; i < layers.length; i = i + 1) {
                layer = layers[i];
                pt = toWorld(layer, layer.anchorPoint.valueAtTime(t, false), t);
                verts.push([pt[0], pt[1]]);
            }
            keyTimes.push(t);
            shape = new Shape();
            shape.vertices = verts;
            if (customTension) {
                inTangents = [];
                outTangents = [];
                if (!isClosed) {
                    inTangents.push([0, 0]);
                    outTangents.push([0, 0]);
                }
                else {
                    u = verts[1] - verts[verts.length - 1];
                    inTangents.push(-tensionFactor * u);
                    outTangents.push(tensionFactor * u);
                }
                for (j = 1; j < verts.length - 1; j = j + 1) {
                    u = verts[j + 1] - verts[j - 1];
                    inTangents.push(-tensionFactor * u);
                    outTangents.push(tensionFactor * u);
                }
                if (!isClosed) {
                    inTangents.push([0, 0]);
                    outTangents.push([0, 0]);
                }
                else {
                    u = verts[0] - verts[verts.length - 2];
                    inTangents.push(-tensionFactor * u);
                    outTangents.push(tensionFactor * u);
                }
                shape.inTangents = inTangents;
                shape.outTangents = outTangents;
            }
            else if (autoBezier) {
                inTangents = [];
                for (j = 0; j < verts.length; j = j + 1) {
                    inTangents.push([this.epsilon, this.epsilon]);
                }
                shape.inTangents = inTangents;
            }
            shape.closed = isClosed;
            shapes.push(shape);
        }
        shapeLayer = comp.layers.addShape();
        shapeLayer.name = ("Rope  [" + (100000 * Math.random()).toFixed(0)) + "]";
        rootVectorsGroup = shapeLayer.property("ADBE Root Vectors Group");
        path = rootVectorsGroup.addProperty("ADBE Vector Shape - Group");
        shapeProp = path.property("ADBE Vector Shape");
        shapeProp.setValuesAtTimes(keyTimes, shapes);
        if (autoBezier) {
            path.selected = true;
            app.executeCommand(app.findMenuCommandId("RotoBezier"));
        }
        stroke = rootVectorsGroup.addProperty("ADBE Vector Graphic - Stroke");
        strokeColorProp = stroke.property("ADBE Vector Stroke Color");
        strokeColorProp.setValue(strokeColor);
        strokeWidthProp = stroke.property("ADBE Vector Stroke Width");
        strokeWidthProp.setValue(strokeWidth);
        shapeLayer.position.setValue([0, 0]);
        pgsBr.value = 0;
    };
    this.run = function() {
        var comp, i, areLayers2D, layers, err;
        comp = app.project.activeItem;
        err = {
            en: "Select at least two layers.",
            fr: "S\xe9lectionez au moins deux calques"
        };
        if (!comp || !(comp instanceof CompItem)) {
            utils.throwErr(err);
            return;
        }
        layers = comp.selectedLayers;
        if (layers.length < 2) {
            utils.throwErr(err);
            return;
        }
        err = {
            en: "Selected layers must be 2D layers.",
            fr: "Les calques s\xe9lectionn\xe9s doivent \xeatre des calques 2D."
        };
        areLayers2D = true;
        for (i = 0; areLayers2D && (i < layers.length); i++) {
            if (layers[i].threeDLayer) {
                areLayers2D = false;
            }
        }
        if (!areLayers2D) {
            utils.throwErr(err);
            return;
        }
        try {
            app.beginUndoGroup("Rope");
            this.createJoints(comp, layers);
            app.endUndoGroup();
        }
        catch (e) {
            alert(e);
        }
    };
}
function DelaunayTriangulation(strokeWidth, strokeColor, fillTrianglesB, useColorsFromLayerB, useColorsFromLayerId, pgsBr) {
    var utils;
    utils = new ConnectLayersUtils();
    this.pts = [];
    this.Triangle = function(a, b, c) {
        var E, A, B, C, D, F, G, minx, miny, dx, dy; {
            this.a = a;
            this.b = b;
            this.c = c; {
                A = b.x - a.x;
                B = b.y - a.y;
                C = c.x - a.x;
                D = c.y - a.y;
                E = (A * (a.x + b.x)) + (B * (a.y + b.y));
                F = (C * (a.x + c.x)) + (D * (a.y + c.y));
                G = 2 * ((A * (c.y - b.y)) - (B * (c.x - b.x)));
            }
            if (Math.abs(G) < 0.000001) {
                minx = Math.min(a.x, b.x, c.x);
                miny = Math.min(a.y, b.y, c.y);
                dx = (Math.max(a.x, b.x, c.x) - minx) * 0.5;
                dy = (Math.max(a.y, b.y, c.y) - miny) * 0.5;
                this.x = minx + dx;
                this.y = miny + dy;
                this.r = (dx * dx) + (dy * dy);
            }
            else {
                this.x = ((D * E) - (B * F)) / G;
                this.y = ((A * F) - (C * E)) / G;
                dx = this.x - a.x;
                dy = this.y - a.y;
                this.r = (dx * dx) + (dy * dy);
            }
        }
    };
    this.byX = function(a, b) {
        return b.x - a.x;
    };
    this.dedup = function(edges) {
        var m, i, j, a, b, n;
        j = edges.length;
        outer: while (j) {
            b = edges[--j];
            a = edges[--j];
            i = j;
            while (i) {
                n = edges[--i];
                m = edges[--i];
                if (((a === m) && (b === n)) || ((a === n) && (b === m))) {
                    edges.splice(j, 2);
                    edges.splice(i, 2);
                    j -= 2;
                    continue outer;
                }
            }
        }
    };
    this.triangulate = function(vertices) {
        var xmid, ymid, i, j, open, dx, dy, a, b, closed, edges, xmin, xmax, ymin, ymax, dmax;
        if (vertices.length < 3) return [];
        vertices.sort(this.byX); {
            i = vertices.length - 1;
            xmin = vertices[i].x;
            xmax = vertices[0].x;
            ymin = vertices[i].y;
            ymax = ymin;
        }
        while (i--) {
            if (vertices[i].y < ymin) ymin = vertices[i].y;
            if (vertices[i].y > ymax) ymax = vertices[i].y;
        } {
            dx = xmax - xmin;
            dy = ymax - ymin;
            dmax = (dx > dy) ? dx : dy;
            xmid = (xmax + xmin) * 0.5;
            ymid = (ymax + ymin) * 0.5;
            open = [new this.Triangle({
                x: xmid - (20 * dmax),
                y: ymid - dmax,
                __sentinel: true
            }, {
                x: xmid,
                y: ymid + (20 * dmax),
                __sentinel: true
            }, {
                x: xmid + (20 * dmax),
                y: ymid - dmax,
                __sentinel: true
            })];
            closed = [];
            edges = [];
        }
        i = vertices.length;
        while (i--) {
            edges.length = 0;
            j = open.length;
            while (j--) {
                dx = vertices[i].x - open[j].x;
                if ((dx > 0) && ((dx * dx) > open[j].r)) {
                    closed.push(open[j]);
                    open.splice(j, 1);
                    continue;
                }
                dy = vertices[i].y - open[j].y;
                if (((dx * dx) + (dy * dy)) > open[j].r) continue;
                edges.push(open[j].a, open[j].b, open[j].b, open[j].c, open[j].c, open[j].a);
                open.splice(j, 1);
            }
            this.dedup(edges);
            j = edges.length;
            while (j) {
                b = edges[--j];
                a = edges[--j];
                open.push(new this.Triangle(a, b, vertices[i]));
            }
        }
        Array.prototype.push.apply(closed, open);
        i = closed.length;
        while (i--)
        if ((closed[i].a.__sentinel || closed[i].b.__sentinel) || closed[i].c.__sentinel) closed.splice(i, 1);
        return closed;
    };
    this.findLayerFromPoint = function(layers, point) {
        var i, layer, layerPos;
        for (i = 0; i < layers.length; i = i + 1) {
            layer = layers[i];
            layerPos = this.pts[i];
            if ((Math.abs(layerPos[0] - point.x) < 0.005) && (Math.abs(layerPos[1] - point.y) < 0.005)) {
                return layer;
            }
        }
    };
    this.containsEdge = function(edgeArray, edge) {
        var i, isIn;
        isIn = false;
        for (i = 0; !isIn && (i < edgeArray.length); i++) {
            if (((edgeArray[i][0] == edge[0]) && (edgeArray[i][1] == edge[1])) || ((edgeArray[i][0] == edge[1]) && (edgeArray[i][1] == edge[0]))) {
                isIn = true;
            }
        }
        return isIn;
    };
    this.createJoints = function(comp, layers) {
        var i, layer, start, end, str, err, triangles, useColorsFromLayerName, pt, isSafeB, tabuEdges, tri, layerA, layerB, layerC, e1, e2, e3, vertices;
        this.pts = [];
        vertices = new Array(layers.length);
        for (i = 0; i < layers.length; i = i + 1) {
            layer = layers[i];
            pt = toWorld(layer, layer.anchorPoint.valueAtTime(comp.time, false), comp.time);
            this.pts.push(pt);
            vertices[i] = {
                x: pt[0],
                y: pt[1]
            };
        }
        if (vertices.length == 2) {
            utils.createJoint(comp, layers[0].name, layers[1].name);
        }
        else {
            triangles = this.triangulate(vertices);
            if (triangles.length == 0) {
                err = {
                    en: "Error occurred when triangulating selected layers (aligned layers?).",
                    fr: "Une erreur est survenue lors de la triangulation des calques s\xe9lectionn\xe9s (calques align\xe9s ?)"
                };
                utils.throwErr(err);
                return;
            }
            pgsBr.minvalue = 0;
            pgsBr.maxvalue = triangles.length;
            pgsBr.value = 0;
            if (fillTrianglesB) {
                isSafeB = true;
                start = comp.workAreaStart;
                end = start + comp.workAreaDuration;
                if (((end - start) * layers.length) > 100) {
                    str = {
                        en: "The script is going to create many keyframes, and this operation might be slow. Note that comp work area is taken into account when keyframing. Would you like to continue ?",
                        fr: "Le script s'appr\xeate \xe0 cr\xe9er de nombreuses images cl\xe9s et cette op\xe9ration pourrait \xeatre longue. Notez que la zone de travail est prise en compte lors de la cr\xe9ation de cl\xe9s. Souhaitez-vous continuer ?"
                    };
                    isSafeB = confirm(utils.loc(str));
                    if (!isSafeB) {
                        return;
                    }
                }
            }
            tabuEdges = [];
            for (i = 0; i < triangles.length; i = i + 1) {
                pgsBr.value++;
                try {
                    if (pgsBr.parent.parent.parent instanceof Window) pgsBr.parent.parent.parent.update();
                    writeLn("Triangle " + pgsBr.value + "/" + pgsBr.maxvalue);
                }
                catch (e) {}
                tri = triangles[i];
                layerA = this.findLayerFromPoint(layers, tri.a);
                layerB = this.findLayerFromPoint(layers, tri.b);
                layerC = this.findLayerFromPoint(layers, tri.c);
                if (fillTrianglesB) {
                    if (i == 0) {
                        useColorsFromLayerName = useColorsFromLayerB ? comp.layer(useColorsFromLayerId).name : null;
                    }
                    utils.createTriangle(strokeWidth, strokeColor, useColorsFromLayerB, useColorsFromLayerName, comp, layerA, layerB, layerC);
                }
                else {
                    e1 = [layerA.name, layerB.name];
                    e2 = [layerB.name, layerC.name];
                    e3 = [layerC.name, layerA.name];
                    if (!this.containsEdge(tabuEdges, e1)) {
                        utils.createJoint(strokeWidth, strokeColor, comp, layerA.name, layerB.name);
                        tabuEdges.push(e1);
                    }
                    if (!this.containsEdge(tabuEdges, e2)) {
                        utils.createJoint(strokeWidth, strokeColor, comp, layerB.name, layerC.name);
                        tabuEdges.push(e2);
                    }
                    if (!this.containsEdge(tabuEdges, e3)) {
                        utils.createJoint(strokeWidth, strokeColor, comp, layerC.name, layerA.name);
                        tabuEdges.push(e3);
                    }
                }
            }
            pgsBr.value = 0;
        }
    };
    this.run = function() {
        var comp, layers, err;
        comp = app.project.activeItem;
        err = {
            en: "Select at least two layers.",
            fr: "S\xe9lectionez au moins deux calques"
        };
        if (!comp || !(comp instanceof CompItem)) {
            utils.throwErr(err);
            return;
        }
        layers = comp.selectedLayers;
        if (layers.length < 2) {
            utils.throwErr(err);
            return;
        }
        utils.autoRenameLayers(comp);
        try {
            app.beginUndoGroup("Delaunay Triangulation");
            this.createJoints(comp, layers);
            app.endUndoGroup();
        }
        catch (e) {
            alert(e);
        }
    };
}

function SpanningTree(strokeWidth, strokeColor, pgsBr) {
    var spanningTree, utils;
    spanningTree = this;
    utils = new ConnectLayersUtils();
    this.getLength = function(u) {
        {
            return Math.sqrt(u.x * u.x + u.y * u.y + u.z * u.z);
        }
    };
    this.Point = function(x, y, z, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
    };
    this.Edge = function(a, b) {
        this.a = a;
        this.b = b;
        this.cost = spanningTree.getLength(new spanningTree.Point(b.x - a.x, b.y - a.y, b.z - a.z, ""));
    };
    this.byCost = function(e1, e2) {
        return e1.cost - e2.cost;
    };
    this.contain = function(component, name) {
        var i, found;
        found = false;
        for (i = 0; !found && (i < component.length); i++) {
            if (component[i].name == name) {
                found = true;
            }
        }
        return found;
    };
    this.doesEdgeConnectTwoDifferentComponents = function(components, edge) {
        var connectB, i, component;
        connectB = false;
        for (i = 0; !connectB && (i < components.length); i++) {
            component = components[i];
            if ((this.contain(component, edge.a.name) && !this.contain(component, edge.b.name)) || (!this.contain(component, edge.a.name) && this.contain(component, edge.b.name))) {
                connectB = true;
            }
        }
        return connectB;
    };
    this.getComponentIndexFromPoint = function(components, point) {
        var i, component, idx;
        idx = -1;
        for (i = 0;
        (idx == -1) && (i < components.length); i++) {
            component = components[i];
            if (this.contain(component, point.name)) {
                idx = i;
            }
        }
        return idx;
    };
    this.mergeComponents = function(components, edge) {
        var i, k, j;
        i = this.getComponentIndexFromPoint(components, edge.a);
        j = this.getComponentIndexFromPoint(components, edge.b);
        for (k = 0; k < components[j].length; k = k + 1) {
            components[i].push(components[j][k]);
        }
        components.splice(j, 1);
        return components;
    };
    this.createJoints = function(comp, layers) {
        var i, layer, tabuNodes, j, edge, pts, pt, p, tree, edges, component, n, components;
        n = layers.length;
        edges = [];
        pts = [];
        for (i = 0; i < n; i = i + 1) {
            layer = layers[i];
            p = toWorld(layer, layer.anchorPoint.valueAtTime(comp.time, false), comp.time);
            if (p.length == 2) p.push(0);
            pt = new this.Point(p[0], p[1], p[2], layer.name);
            pts.push(pt);
        }
        for (i = 0; i < n - 1; i = i + 1) {
            for (j = i + 1; j < n; j++) {
                edge = new this.Edge(pts[i], pts[j]);
                edges.push(edge);
            }
        }
        edges.sort(this.byCost);
        components = [];
        for (i = 0; i < n; i = i + 1) {
            component = [];
            component.push(pts[i]);
            components.push(component);
        }
        tree = [];
        tabuNodes = [];
        for (i = 0; i < edges.length; i = i + 1) {
            edge = edges[i];
            if (this.doesEdgeConnectTwoDifferentComponents(components, edge)) {
                tree.push(edge);
                components = this.mergeComponents(components, edge);
                if (tree.length == (n - 1)) break;
            }
        }
        pgsBr.minvalue = 0;
        pgsBr.maxvalue = tree.length;
        pgsBr.value = 0;
        for (i = 0; i < tree.length; i = i + 1) {
            pgsBr.value++;
            try {
                if (pgsBr.parent.parent.parent instanceof Window) pgsBr.parent.parent.parent.update();
                writeLn("Edge " + pgsBr.value + "/" + pgsBr.maxvalue);
            }
            catch (e) {}
            utils.createJoint(strokeWidth, strokeColor, comp, tree[i].a.name, tree[i].b.name);
        }
        pgsBr.value = 0;
    };
    this.run = function() {
        var comp, layers, err;
        comp = app.project.activeItem;
        err = {
            en: "Select at least two layers.",
            fr: "S\xe9lectionez au moins deux calques"
        };
        if (!comp || !(comp instanceof CompItem)) {
            utils.throwErr(err);
            return;
        }
        layers = comp.selectedLayers;
        if (layers.length < 2) {
            utils.throwErr(err);
            return;
        }
        utils.autoRenameLayers(comp);
        try {
            app.beginUndoGroup("Spanning Tree");
            this.createJoints(comp, layers);
            app.endUndoGroup();
        }
        catch (e) {
            alert(e);
        }
    };
}

function ConnectLayersUtils() {
    var utils;
    utils = this;
    this.loc = function(str) {
        var localLang; {
            localLang = (parseFloat(app.version) < 9) ? $.locale : app.isoLanguage;
            return localLang.toLowerCase().match("fr") ? str.fr : str.en;
        }
    };
    this.throwErr = function(err) {
        alert(this.loc(err), "Script Error", true);
    };
    this.isInArray = function(array, element) {
        var i, found;
        found = false;
        for (i = 0; !found && (i < array.length); i++) {
            if (array[i] == element) found = true;
        }
        return found;
    };
    this.autoRenameLayers = function(comp) {
        var i, layers, j, elementsRenameMsg, originalNames, affectedIndices, reportInfo, msg;
        elementsRenameMsg = {
            en: "To avoid confusion the script has renamed the following elements by adding an appropriate number of trailing blank character to the original element name:\r\r%s",
            fr: "Afin d'\xe9viter la confusion le script a renomm\xe9 les \xe9l\xe9ments suivants en ajoutant un nombre appropri\xe9 de caract\xe8res blanc \xe0 la fin du nom initial de l'\xe9l\xe9ment:\r\r"
        };
        layers = comp.layers;
        originalNames = new Array();
        affectedIndices = new Array();
        for (i = 1; i <= layers.length; i = i + 1)
        originalNames.push(layers[i].name);
        for (i = 1; i <= layers.length - 1; i = i + 1)
        for (j = i + 1; j <= layers.length; j++)
        if (layers[i].name == layers[j].name) {
            if (!this.isInArray(affectedIndices, j)) affectedIndices.push(j);
            layers[j].name += " ";
        }
        reportInfo = "";
        for (i = 0; i < affectedIndices.length; i = i + 1)
        reportInfo += ("\tLayer " + affectedIndices[i] + ": " + originalNames[affectedIndices[i] - 1] + "\r");
        if (reportInfo.length) {
            msg = elementsRenameMsg;
            msg.en = this.loc(msg).replace("%s", reportInfo);
            msg.fr = this.loc(msg).replace("%s", reportInfo);
        }
    };
    this.createJoint = function(strokeWidth, strokeColor, comp, layerAName, layerBName) {
        var stroke, strokeColorProp, strokeWidthProp, is3D, rootVectorsGrp, vectorGrp, rectPath, rectSizeProp, trim, trimEndProp, trimStartProp, shapeLayer;
        shapeLayer = comp.layers.addShape();
        shapeLayer.name = "Joint " + layerAName + " - " + layerBName;
        is3D = comp.layer(layerAName).threeDLayer && comp.layer(layerBName).threeDLayer;
        if (is3D) shapeLayer.threeDLayer = true;
        rootVectorsGrp = shapeLayer.property("ADBE Root Vectors Group");
        vectorGrp = rootVectorsGrp.addProperty("ADBE Vector Group");
        vectorGrp.name = "Joint";
        rectPath = vectorGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rectPath.name = "Joint Path";
        rectSizeProp = rectPath.property("ADBE Vector Rect Size");
        rectSizeProp.expression = "strokeW = 1;\rL1 = thisComp.layer(\"" + layerAName + "\");\r" + "L2 = thisComp.layer(\"" + layerBName + "\");\r" + "p1 = L1.toWorld(L1.anchorPoint);\r" + "p2 = L2.toWorld(L2.anchorPoint);\r" + "dist = length(p2-p1);\r" + "[dist, strokeW];";
        stroke = vectorGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        stroke.name = "Stroke";
        strokeColorProp = stroke.property("ADBE Vector Stroke Color");
        strokeColorProp.setValue(strokeColor);
        strokeWidthProp = stroke.property("ADBE Vector Stroke Width");
        strokeWidthProp.setValue(strokeWidth);
        trim = vectorGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
        trim.name = "Trim Path";
        trimEndProp = trim.property("ADBE Vector Trim End");
        trimEndProp.setValue(50);
        trimStartProp = trim.property("ADBE Vector Trim Start");
        trimStartProp.expression = "L = content(\"Joint\").content(\"Joint Path\").size[0];\rl = content(\"Joint\").content(\"Joint Path\").size[1];\r1e-6 + 100* (l / (2*(L+l)));";
        shapeLayer.anchorPoint.expression = "s = content(\"Joint\").content(\"Joint Path\").size;\r[-s[0]/2,0,0];";
        shapeLayer.position.expression = "L1 = thisComp.layer(\"" + layerAName + "\");\r" + "p1 = L1.toWorld(L1.anchorPoint);";
        if (is3D) {
            shapeLayer.orientation.expression = "function angleBetween(v1, v2)\r{\rvar n = length(v1) * length(v2);\rreturn n == 0 ? 0 : radiansToDegrees(Math.acos(clamp(dot(v1, v2), -1, 1) / n));\r}\rfunction toEuler(x, y, z, angle)\r{\rvar bank, heading, attitude; // rotx, roty, rotz\rvar s = Math.sin(angle);\rvar c = Math.cos(angle);\rvar t = 1-c;\rif ((x*y*t + z*s) > 0.9999)\r{\rheading = 2*Math.atan2(x*Math.sin(angle/2),Math.cos(angle/2));\rattitude = Math.PI/2;\rbank = 0;\r}\relse if ((x*y*t + z*s) < -0.9999)\r{\rheading = -2*Math.atan2(x*Math.sin(angle/2),Math.cos(angle/2));\rattitude = -Math.PI/2;\rbank = 0;\r}\relse\r{\rheading = Math.atan2(y * s- x * z * t , 1 - (y*y+ z*z ) * t);\rattitude = Math.asin(x * y * t + z * s);\rbank = Math.atan2(x * s - y * z * t , 1 - (x*x + z*z) * t);\r}\rreturn [bank, heading, attitude];\r}\rtry{\rL1 = thisComp.layer(\"" + layerAName + "\");\r" + "L2 = thisComp.layer(\"" + layerBName + "\");\r" + "compPar = thisComp.pixelAspect;\r" + "A = L1.toWorld(L1.anchorPoint);\r" + "B = L2.toWorld(L2.anchorPoint);\r" + "u = normalize(toWorldVec([1,0,0]));\r" + "temp = [ (B[0]-A[0])*compPar,  B[1]-A[1], B[2]-A[2] ];\r" + "v = normalize(temp);\r" + "angle = angleBetween(u,v);\r" + "axis = cross(u,v);\r" + "if (axis[0] == 0 && axis[1] == 0 && axis[2] == 0) axis = [0,1,0];\r" + "axis = normalize(axis);\r" + "rots = toEuler(axis[0],axis[1],axis[2], degreesToRadians(angle));\r" + "[0, radiansToDegrees(rots[1]), radiansToDegrees(rots[2])];\r" + "}\r" + "catch(e){ value; }";
        }
        else {
            shapeLayer.rotation.expression = "L1 = thisComp.layer(\"" + layerAName + "\");\r" + "L2 = thisComp.layer(\"" + layerBName + "\");\r" + "try\r" + "{\r" + "   p1 = L1.toWorld(L1.anchorPoint);\r" + "   p2 = L2.toWorld(L2.anchorPoint);\r" + "   u = p2-p1;\r" + "   a = Math.atan2(u[1],u[0]);\r" + "   radiansToDegrees(a);\r" + "}catch(e){value;}";
        }
    };
    this.createTriangle = function(strokeWidth, strokeColor, useColorsFromLayerB, useColorsFromLayerName, comp, layerA, layerB, layerC) {
        var strokeWidthProp, t, pos, is3D, contentGrp, shapeGrp, contentsGrp, pt3d, pt3dProp, pathGrp, pathProp, keyShapeValues, keyPosValues, startT, endT, v0, v1, v2, strokeGrp, fillGrp, fillColorProp, keyTimes, verts, shape, shapeLayer;
        is3D = (layerA.threeDLayer || layerB.threeDLayer) || layerC.threeDLayer;
        shapeLayer = comp.layers.addShape();
        shapeLayer.name = "Triangle  [" + (100000 * Math.random()).toFixed(0) + "]";
        shapeLayer.threeDLayer = is3D;
        if (is3D) {
            shapeLayer.orientation.expression = "LA = thisComp.layer(\"" + layerA.name + "\");\r" + "LB = thisComp.layer(\"" + layerB.name + "\");\r" + "LC = thisComp.layer(\"" + layerC.name + "\");\r" + "a = LA.toWorld(LA.anchorPoint);\r" + "b = LB.toWorld(LB.anchorPoint);\r" + "c = LC.toWorld(LC.anchorPoint);\r" + "n = cross(b-a, c-a);\r" + "lookAt(position,position+n);";
        }
        contentGrp = shapeLayer.property("ADBE Root Vectors Group");
        shapeGrp = contentGrp.addProperty("ADBE Vector Group");
        shapeGrp.name = "Triangle";
        contentsGrp = shapeGrp.property("ADBE Vectors Group");
        pt3d = shapeLayer.Effects.addProperty("ADBE Point3D Control");
        pt3dProp = pt3d.property(1);
        pathGrp = contentsGrp.addProperty("ADBE Vector Shape - Group");
        pathProp = pathGrp.property("ADBE Vector Shape");
        keyTimes = [];
        keyShapeValues = [];
        keyPosValues = [];
        startT = comp.workAreaStart;
        endT = (comp.workAreaStart + comp.workAreaDuration) + 0.005;
        for (t = startT; t < endT; t += comp.frameDuration) {
            shapeLayer.position.expression = "LA = thisComp.layer(\"" + layerA.name + "\");\r" + "LB = thisComp.layer(\"" + layerB.name + "\");\r" + "LC = thisComp.layer(\"" + layerC.name + "\");\r" + "a = LA.toWorld(LA.anchorPoint);\r" + "b = LB.toWorld(LB.anchorPoint);\r" + "c = LC.toWorld(LC.anchorPoint);\r" + "(a + b + c) / 3;";
            pos = shapeLayer.position.valueAtTime(t, false);
            shape = new Shape();
            verts = [];
            pt3dProp.expression = "L = thisComp.layer(\"" + layerA.name + "\");\r" + "fromWorld(L.toWorld(L.anchorPoint));";
            v0 = pt3dProp.valueAtTime(t, false);
            v0.pop();
            pt3dProp.expression = "L = thisComp.layer(\"" + layerB.name + "\");\r" + "fromWorld(L.toWorld(L.anchorPoint));";
            v1 = pt3dProp.valueAtTime(t, false);
            v1.pop();
            pt3dProp.expression = "L = thisComp.layer(\"" + layerC.name + "\");\r" + "fromWorld(L.toWorld(L.anchorPoint));";
            v2 = pt3dProp.valueAtTime(t, false);
            v2.pop();
            verts.push(v0);
            verts.push(v1);
            verts.push(v2);
            shape.vertices = verts;
            shape.closed = true;
            keyTimes.push(t);
            keyShapeValues.push(shape);
            keyPosValues.push(pos);
        }
        pt3d.remove();
        shapeLayer.position.expression = "";
        shapeLayer.position.setValuesAtTimes(keyTimes, keyPosValues);
        pathProp.setValuesAtTimes(keyTimes, keyShapeValues);
        strokeGrp = contentsGrp.addProperty("ADBE Vector Graphic - Stroke");
        strokeWidthProp = strokeGrp.property("ADBE Vector Stroke Width");
        strokeWidthProp.setValue(strokeWidth);
        fillGrp = contentsGrp.addProperty("ADBE Vector Graphic - Fill");
        fillColorProp = fillGrp.property("ADBE Vector Fill Color");
        if (useColorsFromLayerB) {
            fillColorProp.expression = "L = thisComp.layer(\"" + useColorsFromLayerName + "\");\r" + "pt = L.fromCompToSurface(toWorld(anchorPoint));\r" + "L.sampleImage(pt);";
        }
        else {
            fillColorProp.setValue(strokeColor);
        }
    };
    this.createAboutDlg = function(aboutStr, usageStr) {
        var dlg = new Window("dialog", "About");
        var res = "group { orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'], \
			pnl: Panel { type:'tabbedpanel', \
				aboutTab: Panel { type:'tab', text:'Description', \
					aboutEt: EditText { text:'" + this.loc(aboutStr) + "', preferredSize:[360,200], properties:{multiline:true} } \
				}, \
				usageTab: Panel { type:'tab', text:'Usage', \
					usageEt: EditText { text:'" + this.loc(usageStr) + "', preferredSize:[360,200], properties:{multiline:true} } \
				} \
			}, \
			btns: Group { orientation:'row', alignment:['fill','bottom'], \
				otherScriptsBtn: Button { text:'Other Scripts...', alignment:['left','center'] }, \
				okBtn: Button { text:'Ok', alignment:['right','center'] } \
			} \
		}";
        dlg.gr = dlg.add(res);
        dlg.gr.pnl.aboutTab.aboutEt.onChange = dlg.gr.pnl.aboutTab.aboutEt.onChanging = function() {
            this.text = utils.loc(aboutStr).replace(/\\r/g, '\r');
        };
        dlg.gr.pnl.usageTab.usageEt.onChange = dlg.gr.pnl.usageTab.usageEt.onChanging = function() {
            this.text = utils.loc(usageStr).replace(/\\r/g, '\r').replace(/\\'/g, "'");
        };
        dlg.gr.btns.otherScriptsBtn.onClick = function() {
            var cmd = "";
            var url = "http://www.motionboutique.com";
            if ($.os.indexOf("Win") != -1) {
                if (File("C:/Program Files/Mozilla Firefox/firefox.exe").exists) cmd += "C:/Program Files/Mozilla Firefox/firefox.exe " + url;
                else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url;
                else cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
            }
            else cmd += "open \"" + url + "\"";
            try {
                system.callSystem(cmd);
            }
            catch (e) {
                alert(e);
            }
        };
        dlg.gr.btns.okBtn.onClick = function() {
            dlg.close();
        };
        dlg.center();
        dlg.show();
    };
}

function toWorld(layer, point, time) {
    // returns the given angle in radians
    function degToRad(deg) {
        return deg * Math.PI / 180;
    }
    // returns cosinus of the given angle (in radians)
    function c(angle) {
        return Math.cos(angle);
    }
    // returns sinus of the given angle (in radians)
    function s(angle) {
        return Math.sin(angle);
    }
    // returns 3D vector filled with the given elements
    function vec3(v0, v1, v2) {
        var v = new Array(3);
        v[0] = v0,
        v[1] = v1;
        v[2] = v2;
        return v;
    }
    // returns 3x3 matrix filled with the given elements
    function matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var M = new Array(3);
        M[0] = new Array(3);
        M[1] = new Array(3);
        M[2] = new Array(3);
        M[0][0] = m00;
        M[0][1] = m01;
        M[0][2] = m02;
        M[1][0] = m10;
        M[1][1] = m11;
        M[1][2] = m12;
        M[2][0] = m20;
        M[2][1] = m21;
        M[2][2] = m22;
        return M;
    }
    // returns 3D vector obtained by multiplying components of the two given vectors
    function multVec3Vec3(v1, v2) {
        return vec3(v1[0] * v2[0], v1[1] * v2[1], v1[2] * v2[2]);
    }
    // returns 3D vector obtained by multiplying the given 3x3 matrix by the given 3D vector
    function multMat3Vec3(M, v) {
        var v0 = M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2];
        var v1 = M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2];
        var v2 = M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2];
        return vec3(v0, v1, v2);
    }
    // returns 3x3 matrix obtained by multiplying the two given 3x3 matrices
    function multMat3Mat3(M1, M2) {
        var M3 = matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0);
        for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
        for (var k = 0; k < 3; k++) {
            M3[i][j] += M1[i][k] * M2[k][j];
        }
        return M3;
    }
    // returns 3D point obtained by rotating the given point about the x-axis
    function rotatePointAboutX(p, angle) {
        var newp = p;
        var a = degToRad(angle);
        if (a != 0) {
            newp = multMat3Vec3(matrix3(1, 0, 0, 0, c(a), -s(a), 0, s(a), c(a)), p);
        }
        return newp;
    }
    // returns 3D point obtained by rotating the given point about the y-axis
    function rotatePointAboutY(p, angle) {
        var newp = p;
        var a = degToRad(angle);
        if (a != 0) {
            newp = multMat3Vec3(matrix3(c(a), 0, s(a), 0, 1, 0, -s(a), 0, c(a)), p);
        }
        return newp;
    }
    // returns 3D point obtained by rotating the given point about the z-axis
    function rotatePointAboutZ(p, angle) {
        var newp = p;
        var a = degToRad(angle);
        if (a != 0) {
            newp = multMat3Vec3(matrix3(c(a), -s(a), 0, s(a), c(a), 0, 0, 0, 1), p);
        }
        return newp;
    }
    // returns 3D point obtained by rotating the given point about the x/y/z-axis
    function rotatePointAboutXYZ(p, angleX, angleY, angleZ) {
        var newp = p;
        if (angleZ != 0) {
            newp = rotatePointAboutZ(newp, angleZ);
        }
        if (angleY != 0) {
            newp = rotatePointAboutY(newp, angleY);
        }
        if (angleX != 0) {
            newp = rotatePointAboutX(newp, angleX);
        }
        return newp;
    }
    // returns 3D point obtained by rotating the given point about the x/y/z-axis
    function orientPointAboutXYZ(p, ori) {
        return rotatePointAboutXYZ(p, ori[0], ori[1], ori[2]);
    }
    // returns pixel aspect ratio of the given layer
    function getPar(layer) {
        var par = layer.source ? layer.source.pixelAspect : 1;
        if (layer.adjustmentLayer) {
            par = layer.containingComp.pixelAspect;
        }
        return par;
    }
    // returns accurate value of the given pixel aspect ratio
    function getAccurate(par) {
        var accPar;
        switch (par) {
        case 0.9:
            accPar = 0.9;
            break;
        case 1:
            accPar = 1;
            break;
        case 1.07:
            accPar = 1.066666666666667;
            break;
        case 1.2:
            accPar = 1.2;
            break;
        case 1.33:
            accPar = 1.333333333333333;
            break;
        case 1.42:
            accPar = 1.422222222222222;
            break;
        case 1.5:
            accPar = 1.5;
            break;
        case 2:
            accPar = 2;
            break;
        default:
            accPar = 1;
            break;
        }
        return accPar;
    }
    // returns value of the given transform property (post-expression value)
    function getTransValueAtCompTime(layer, transName) {
        return layer.property(transName).valueAtTime(time, false);
    }
    function getResult() {
        // retrieves layer transforms
        var anc = getTransValueAtCompTime(layer, "anchorPoint");
        var pos = getTransValueAtCompTime(layer, "position");
        var sca = getTransValueAtCompTime(layer, "scale");
        var ori = getTransValueAtCompTime(layer, "orientation");
        var rox = getTransValueAtCompTime(layer, "rotationX");
        var roy = getTransValueAtCompTime(layer, "rotationY");
        var roz = getTransValueAtCompTime(layer, "rotationZ");
        var pPar = getAccurate(layer.parent ? getPar(layer.parent) : layer.containingComp.pixelAspect);
        var lPar = getAccurate(getPar(layer));
        var ratio = lPar / pPar;
        // initializes resulting point
        var newp = point;
        // compensates anchor point
        newp -= anc;
        // scales according to pixel aspect ratio
        newp = multVec3Vec3(newp, vec3(ratio * (sca[0] / 100), sca[1] / 100, sca[2] / 100));
        newp = multVec3Vec3(newp, vec3(pPar, 1, 1));
        // rotates
        newp = rotatePointAboutXYZ(newp, rox, roy, roz);
        newp = orientPointAboutXYZ(newp, ori);
        // scales back
        newp = multVec3Vec3(newp, vec3(1 / pPar, 1, 1));
        // translates
        newp += pos;
        // reccurse if layer has parent
        if (layer.parent) {
            newp = toWorld(layer.parent, newp, time);
        }
        return newp;
    }
    return getResult();
}
new ConnectLayers().run(this);