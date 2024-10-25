function(instance, context) {
//could add an <i> icon element and use this to display the chosen icon data-iconpicker-preview="icon#icon_preview"
// that value would get added to the button that launches the picker. 
instance.canvas.append(`
<button type="button" id="GetIconPicker" data-iconpicker-input="input#IconInput" data-iconpicker-preview="i#IconPreview" style='display:none;'>Select Icon</button>
<i id="IconPreview" class="fas fa-bullhorn" style='display:none;'></i>
<input type="text" id="IconInput" name="Icon" required="" placeholder="Hidden etc. input for icon classname" autocomplete="off" spellcheck="false" style='display:none;'>
`)
    
    
    IconPicker.Init({
    jsonUrl: "https://cdn.jsdelivr.net/npm/@furcan/iconpicker@1.5.0/dist/iconpicker-1.5.0.json",
    searchPlaceholder: 'Search Icon',
    showAllButton: 'Show All',
    cancelButton: 'Cancel',
    noResultsFound: 'No results found.', 
    borderRadius: '20px', 
});
    
     IconPicker.Run('#GetIconPicker',function(e) {
            
            
 		const icon_name = document.getElementById('IconInput').value
      	//console.log(icon_name)
         	instance.publishState('selected_icon', icon_name)
			if (icon_name != null && icon_name != "" && icon_name != undefined){
                instance.triggerEvent('icon_selected')
            }
 		});
    
    
    	const trigger = document.getElementById('GetIconPicker')


    
}