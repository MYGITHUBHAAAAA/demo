const t_i = $('#thumb_image');
const sky = $('#sky');
t_i.click=(function(){
    //更改position的值也是很好的呀,切换属性值src
    // const src=sky.getAttribute('src')
    // if(src==='#city'){
        // alert(t_i)
        // alert(sky)
        sky.prop('src','#sechelt')
        // t_i.setAttribute('src','#thumb_c')
        // t_i.setAttribute('position','2 4 3')
    // }
    // else if(src==='#sechelt'){
    //     sky.setAttribute('src','#city')
    //     t_i.setAttribute('src','#thumb_s')
    //     t_i.setAttribute('position','1 4 -3')
    // }
})