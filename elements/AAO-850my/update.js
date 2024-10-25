function(instance, properties, context) {

    //jfind fred
    const fred = document.getElementById(instance.data.uuid)
    fred.className = properties.icon_name
    fred.style.fontSize = properties.font_size +'px'


	fred.addEventListener('click', function(){
        instance.triggerEvent('click_heard')
    });

}