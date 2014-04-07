
// collapse-panel
(function($, window) {


    // Collapse panel data-api
    $(document).on('click.collapse-panel.data-api', '[data-toggle="collapse-panel"]', function(e) {
        var $this   = $(this), href;
        var target  = $this.attr('data-target')
                || e.preventDefault()
                || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
        var $target = $(target);
        var data    = $target.data('bs.collapse');
        var option  = data ? 'toggle' : $this.data();
        var parent  = $this.attr('data-parent');
        var $parent = parent && $(parent);
        
    });

    
})(jQuery, window);
