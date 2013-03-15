//	HYPE.documents["80sTees-one-big-pic"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "80sTees-one-big-pic.hyperesources";
	var documentName = "80sTees-one-big-pic";
	var documentLoaderFilename = "80steesonebigpic_hype_generated_script.js";
	var mainContainerID = "80steesonebigpic_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",f:"d",N:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",bH:"d",bI:"f",n:"c",aK:"i",bJ:"f",X:"i",aZ:"i",aL:"i",Y:"bM",A:"c",B:"c",bK:"f",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"full-80s-clipboard.png",p:1},"1":{n:"full-80s-clipboard-1.png",p:1},"2":{n:"80s-big-pic-clean.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"13":{o:"content-box",h:"2",x:"visible",a:2800,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"4",d:289.58600000000001,bF:"14"},"12":{o:"content-box",h:"2",x:"visible",a:1400,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"2",d:289.58600000000001,bF:"14"},"15":{o:"content-box",h:"2",x:"visible",a:4195,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"3",d:289.58600000000001,bF:"14"},"11":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"1",d:289.58600000000001,bF:"14"},"14":{x:"visible",k:"div",c:4200,d:289.58600000000001,z:"1",r:"inline",a:0,j:"absolute",b:0}},n:"4-one-bigs",T:{kTimelineDefaultIdentifier:{d:80,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:80,i:"a",e:-4200,s:0,o:"14"},{f:"1",t:0,d:80,i:"b",e:0,s:0,o:"14"}],f:30}},o:"10"},{x:1,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"2",d:288.79399999999998,bF:"4"},"4":{x:"visible",k:"div",c:2795,d:289.79399999999998,z:"2",a:0,j:"absolute",b:0},"2":{o:"content-box",h:"0",x:"visible",a:1395,q:"100% 100%",b:1,j:"absolute",r:"inline",c:1400,k:"div",z:"1",d:288.79399999999998,bF:"4"}},n:"one-big-pic",T:{kTimelineDefaultIdentifier:{d:30.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:30.01,i:"a",e:-1402,s:0,o:"4"},{f:"1",t:0,d:30.01,i:"b",e:0,s:0,o:"4"}],f:30}},o:"5"},{x:2,p:"600px",c:"#FFFFFF",v:{"7":{x:"visible",k:"div",c:2795,d:289.79399999999998,z:"2",a:0,j:"absolute",b:0},"8":{o:"content-box",h:"0",x:"visible",a:1395,q:"100% 100%",b:1,j:"absolute",r:"inline",c:1400,k:"div",z:"1",d:288.79399999999998,bF:"7"},"6":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1400,k:"div",z:"2",d:288.79399999999998,bF:"7"}},n:"one-big-pic Copy",T:{kTimelineDefaultIdentifier:{d:30.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:30.01,i:"a",e:-1402,s:0,o:"7"},{f:"1",t:0,d:30.01,i:"b",e:0,s:0,o:"7"}],f:30}},o:"9"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

