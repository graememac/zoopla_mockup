jQuery(document).ready(function(){
    
    jQuery(".accordion_section").click(function(){
        
        //reset accordion
        jQuery(".accordion_section").removeClass("section_open").addClass("section_closed");
        jQuery(".accordion_desc").css('display','none');
        
        // open section
        jQuery(this).removeClass("section_closed").addClass("section_open");
        jQuery(this).next().show("fast");
    });
});