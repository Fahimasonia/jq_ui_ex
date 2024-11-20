$( function() {
    $( "#draggable" ).draggable();
 $( "#accordion" ).accordion({collapsible: true});

$( "#selectable" ).selectable();

var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
$( "#datepicker" ).datepicker();
//select menu
 $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

//tabs
    $( "#tabs" ).tabs();

//tooltip
      $( document ).tooltip();
 $( "#sortable" ).sortable();
$( "#resizable" ).resizable();
  } );