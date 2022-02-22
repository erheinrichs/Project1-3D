    require([
      "esri/WebScene",
      "esri/views/SceneView",
	  "esri/widgets/Search",
	  "esri/widgets/Legend",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Search, Legend, Home, PopupTemplate) {

      
      var scene = new WebScene({
        portalItem:{
         id:"6117ddab39e942cbb772cf8c8f2dd30c",
          
        }
      });

      
  
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'global',
      });
	  
        var homeBtn = new Home({
        view: view
      });
      view.ui.add(homeBtn, "top-left");
      
	  var searchWidget = new Search({
        view: view
      });

      
      view.ui.add(searchWidget, {
        position: "top-right"
      });
	  
	    view.when(function() {
         
          var featureLayer = scene.layers.getItemAt(1);

          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: featureLayer,
              title: "K-12 State Education Rankings"
            }]
          });
        
          view.ui.add(legend, "bottom-right");
        });
        
    });
