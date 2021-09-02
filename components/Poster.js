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
                url:'spiderman.jpg'
            },
            {
                id:'superman',
                title:'Superman',
                url:'./assets/posters/superman.jpg'
            }
        ];

        let previousXpos=-73

        for(var item in thumbnailRef){
            const posX=previousXpos+30
            const posY=10
            const posZ=-40
            const position={x:posX,y:posY,z:posZ}
            previousXpos=posX

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
          radiusInner:9,
          radiusOuter:10
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
          radius:9,
        })
        entityEl.setAttribute('material',{
          src:item.url
        })
    
        return entityEl
      },
    
    
    
      
})