var GUI = (function(){

var HomeView = Backbone.View.extend({
  id:"wrapper",
  render: function(){
    var $h1 = $("<h1 class='head'>").text("The Official ECUS Guide to Figuring out what Faction to Play");
    var $Dropdiv = $("<div id='Dropdiv' class='dropdown'>");
    var $DropBtn = $("<div id='dropBtn' class='dropbtn'>");
    var $ActDrop = $("<div id='ActDrop' class='dropdown-content'>");
    var $Opt1 = $("<a href='#'>TR</a>");
    var $Opt2 = $("<a href='#'>NC</a>");
    var $Opt3 = $("<a href='#'>VS</a>");
    var $Opt4 = $("<a href='#'>No One</a>");

    this.$el.append($h1);
    this.$el.append($Dropdiv);
    $Dropdiv.append.($DropBtn);
    $Dropdiv.append.($ActDrop);
    $Dropdiv.append.($Opt1);
    $Dropdiv.append.($Opt2);
    $Dropdiv.append.($Opt3);
    $Dropdiv.append.($Opt4);
    $('#app').append(this.$el);
  },
  initialize: function(opts){
  },
  events:{
    "click #dropbtn":"ShowMenu",
    "click":"CloseMenu"
  },
  ShowMenu: function(){
        /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
        document.getElementById("myDropdown").classList.toggle("show");
  },
  CloseMenu: function(){
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
});

var HolderView = Backbone.View.extend({
  render:function(){
  },
  initialize: function(opts){
  },
  events:{}
});

function GUI(mercs){
  var homeview = new HomeView()
}

return GUI;

}());
