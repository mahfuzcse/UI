//This is used for flex templates in order to have fully flexible content areas
            $(document).ready(function(){

                //add first-child and last-child classes to .flex-wrapper children 

                $(".flex-wrapper").each(function(index) {

                    $(this).find("div.flex-50:first, div.flex-33:first, div.flex-25:first").addClass("first-child");

                    $(this).find("div.flex-50:last, div.flex-33:last, div.flex-25:last").addClass("last-child");

                });

            });
