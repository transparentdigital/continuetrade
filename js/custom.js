

//Plugin Jquery
            $(document).ready(function() {
                //Language Selector
                $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
                    effect: 'fade',
                    testMode: true,
                    onChange: function(evt){
                        
                    }
                });
                //UI TABS
                $( ".tabs" ).tabs({
                    show: { effect: "fade", duration: 600 }
                });
                
                //OWL Carousel
                $("#top-suppliers, #latest-arrivals").owlCarousel({
                    autoPlay: 3000
                });
                
                $("#hot-prod").owlCarousel({
                    autoPlay: 3000,
                    items: 3
                });
            });
            //UI Autocomplete
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

            $( "#keysearch" ).autocomplete({
                    source: availableTags
            });
            //Search Category Selector
            $(function () {
			$("#search_id").selectbox();
            });    
            //UI MENU
            $( "#cat-menu" ).menu();
            
            
            
            //Login/Signup Modal Box
            var signUpDialog = $( "#SignUpForm" ).dialog({
                autoOpen: false,
                modal: true,
                draggable: false,
                title: "Sign Up - Join Free",
                dialogClass: "signUpDialog",
                show: {
                    effect: "fade", duration: 300
                }
            });
            $( ".acc-sign" ).on( "click", function() {
                signUpDialog.dialog("open");
            });
            
             var logInDialog = $( "#loginForm" ).dialog({
                autoOpen: false,
                modal: true,
                draggable: false,
                title: "Log In",
                dialogClass: "logInDialog",
                show: {
                    effect: "fade", duration: 300
                }
            });
            $( ".acc-log" ).on( "click", function() {
                logInDialog.dialog("open");
            });