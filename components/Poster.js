AFRAME.registerComponent('posters',{
    init:function(){
        this.posterContainer=this.el
        this.createPosters()
    },
    createPosters:function(){
        const thumbnailRef=[
            {
                id:'empyre',
                title:'Empyre',
                url:'./assets/posters/empyre.jpg'
            },
            {
                id:'marvel',
                title:'Marvel',
                url:'./assets/posters/marvel.jpg'
            },
            {
                id:'spiderman',
                title:'Spiderman',
                url:'./assets/posters/spiderman.jpg'
            },
            {
                id:'superman',
                title:'Superman',
                url:'./assets/posters/superman.jpg'
            }
        ];

        let previousXPosition=-60
        for(var item of thumbnailRef){
          const posX=previousXPosition+25;
          const posY=12;
          const posZ=-40;
          const position={x:posX,y:posY,z:posZ}
          previousXPosition=posX

          const borderEl=this.createBorder(position,item.id)
          const thumbnail=this.createThumbnail(item)
          borderEl.appendChild(thumbnail)

          this.posterContainer.appendChild(borderEl)
        }
            
        },
    

    createBorder:function(position,id){
      const entityEl=document.createElement('a-entity')
      entityEl.setAttribute('id',id)
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{
        primitive:'ring',
        radiusInner:10,
        radiusOuter:11
      })
      entityEl.setAttribute('position',position)
      entityEl.setAttribute('material',{
        color:'#292c52',
        opacity:0.8,
      })
  
      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl=document.createElement('a-entity')
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{
        primitive:'circle',
        radius:10,
      })
      entityEl.setAttribute('scale',{x:1,y:1,z:1})
      entityEl.setAttribute('material',{
        src:item.url
      })
  
      return entityEl
    },
    
    
      
})